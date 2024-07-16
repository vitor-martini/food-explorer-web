import { Container, OrderContainer, DishContainer, DishContent, DishDetails, NotFoundContainer, Section } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Payment } from "../../components/Payment";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { useCart } from "../../hooks/cart";
import DishPlaceholder from "../../assets/dish.png";
import { useTheme } from "styled-components";
import { useToast } from "../../hooks/toast";
import NotFoundIcon from "../../assets/notFound.png";

export function Order() {
  const theme = useTheme();
  const { addToast, toastTypes } = useToast();
  const { cart, removeFromCart } = useCart();
  const [orders, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: DEVICE_BREAKPOINTS.MD });

  function handleDelete(index) {
    removeFromCart(index);
    addToast("Removido sucesso!", toastTypes.SUCCESS);
  }

  useEffect(() => {
    async function fetchDishes() {
      const orderPromises = cart.order.map(async (o) => {
        const response = await api.get(`/dishes/${o.id}`);
        const dish = response.data;
        setTotal((prevTotal) => prevTotal + o.quantity * o.price);

        return {
          id: dish.id,
          name: dish.name,
          quantity: o.quantity,
          price: o.price,
          photo: dish.photo
            ? `${api.defaults.baseURL}/uploads/${dish.photo}`
            : DishPlaceholder,
        };
      });

      const orders = await Promise.all(orderPromises);
      setOrder(orders);
    }

    setTotal(0);
    fetchDishes();
  }, [cart]);

  return (
    <>
      <Header />
      <Container>
        {orders.length > 0 ? (
          <Section>
            <div>
              <h1>Meu pedido</h1>
              <OrderContainer>
                {orders.map((o, index) => (
                  <DishContainer key={index}>
                    <img src={o.photo} alt={`Foto do prato ${o.name}`} />
                    <DishContent>
                      <DishDetails>
                        <p>{`${o.quantity} x ${o.name}`}</p>
                        <p className="price">{`R$ ${o.price}`}</p>
                      </DishDetails>
                      <Button
                        title={"Excluir"}
                        bgColor={"transparent"}
                        color={theme.COLORS.TOMATO_400}
                        padding={"0px"}
                        onClick={() => handleDelete(index)}
                      />
                    </DishContent>
                  </DishContainer>
                ))}
                <h2>{`Total: R$ ${total.toFixed(2).replace(".", ",")}`}</h2>
              </OrderContainer>
            </div>
            <div>
              <h1>Pagamento</h1>
              <Payment dishes={orders}/>
            </div>
        </Section>
        ) : (
          <NotFoundContainer>
            <h1>Sacola vazia!</h1>
            <img src={NotFoundIcon} />
          </NotFoundContainer>
        )}
      </Container>
      <Footer />
    </>
  );
}