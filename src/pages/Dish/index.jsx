import { Container, Content, Section, Photo, Ingredients, Options } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import DishPlaceholder from "../../assets/dish.png";
import { BackButton } from "../../components/BackButton";
import { Ingredient } from "../../components/Ingredient";
import { Quantity } from "../../components/Quantity";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast"; 
import { useCart } from "../../hooks/cart";

export function Dish() {
  const { addToast, toastTypes } = useToast(); 
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const params = useParams();
  const [dish, setDish] = useState({});   
  const [quantity, setQuantity] = useState(1);   
  
  function handleQuantity(quantity) {
    setQuantity(quantity);
    dish.quantity = quantity;
    setDish(dish);
  }

  function handleInclude() {    
    if(!dish.quantity) {
      dish.quantity = 1;
    }
    addToCart(dish);  
    addToast("Incluído sucesso!", toastTypes.SUCCESS);
    setQuantity(1);
  }
  
  const formattedPrice = (dish.quantity * dish.price).toFixed(2).replace(".", ",");
  
  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      const dish = response.data;
      if(dish) {
        dish.photo = dish.photo ? `${api.defaults.baseURL}/uploads/${dish.photo}` : DishPlaceholder;
        dish.quantity = 1;
        dish.ingredients = dish.ingredients.map(ingredient => ingredient.name);
        setDish(dish);
      } else {
        navigate("/");
      }
    }

    fetchDish();
  }, []);
  
  return (
    <>
      <Header/>
      <Container>
        <BackButton/>
        <Content>
          <Photo src={dish.photo} alt={`Foto de ${dish.name}`} />
          <Section>
            <h1>{dish.name}</h1>
            <p>{dish.description}</p>
            <Ingredients>
              {
                dish.ingredients?.length > 0 && dish.ingredients.map((ingredient, index) => (
                  <Ingredient
                    key={index}
                    name={ingredient}
                  />
                ))
              }
            </Ingredients>
            {
              user.is_admin ? (
                <Button
                  title={"Editar prato"}
                  onClick={() => navigate(`/edit/${dish.id}`)}
                />
              ) : (
                <Options>
                  <Quantity
                    quantity={quantity}
                    setQuantity={handleQuantity}  
                  />
                  <Button
                    title={`incluir ∙ R$${formattedPrice}`}
                    onClick={handleInclude}
                  />
                </Options>
              )
            }
          </Section>
        </Content>
      </Container>
      <Footer/>
    </>
  );
}