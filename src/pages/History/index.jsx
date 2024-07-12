import { Container, Card, CardHeader } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export function History() {
  const isMobile = useMediaQuery({ maxWidth: DEVICE_BREAKPOINTS.MD });
  const [orders, setOrders] = useState([]);

  function formatDateTime(input) {
    const [datePart, timePart] = input.split(" ");
    const [year, month, day] = datePart.split("-");
    const [hours, minutes] = timePart.split(":");
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}h${minutes}`;
  
    return `${formattedDate} às ${formattedTime}`;
  }

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get("/orders");
      const rawOrders = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      const orders = rawOrders.map(order => {
        return {
          status: order.status.name,
          id: order.id.toString().padStart(8, "0"),
          details: order.orderDishes.map(dish => {
                      return `${dish.quantity} x ${dish.dish.name}`;
                   }).join(", "),
          date: formatDateTime(order.created_at.toString())
        };
      });
      setOrders(orders);
    }

    fetchOrders(orders);
  }, []);

  return (
    <>
      <Header/>
      <Container>
        <h1>Histórico de pedidos</h1>

        {
          orders.length > 0 ? (
            !isMobile ? (
              <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Código</th>
                  <th>Detalhamento</th>
                  <th>Data e hora</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders.map(order => (
                    <tr
                      key={order.id}>
                      <td><span className={`status-dot ${order.status.toLowerCase()}`}/>{order.status}</td>
                      <td>{order.id}</td>
                      <td>{order.details}</td>
                      <td>{order.date}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            ) : (
            orders.map(order => (
              <Card
                key={order.id}>
                <CardHeader>
                  <p>{order.id}</p>
                  <p><span className={`status-dot ${order.status.toLowerCase()}`}/>{order.status}</p>
                  <p>{order.date}</p>
                </CardHeader>
                <p>{order.details}</p>
              </Card>
            ))
          )
          ) : 
          ( <h2>Sem pedidos!</h2>)
        }
        
      </Container>
      <Footer/>
    </>
  );
}