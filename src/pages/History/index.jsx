import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";
import { useState, useEffect } from "react";

export function History() {
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
      setOrders(response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) );
    }

    fetchOrders();
  }, []);

  return (
    <>
      <Header/>
      <Container>
        <h1>Histórico de pedidos</h1>

        {
          orders.length > 0 ? (
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
                      <td><span className={`status-dot ${order.status.name.toLowerCase()}`}/>{order.status.name}</td>
                      <td>{order.id.toString().padStart(8, "0")}</td>
                      <td>
                        {
                          order.orderDishes.map(dish => {
                            return `${dish.quantity} x ${dish.dish.name}`;
                          }).join(", ")
                        }
                      </td>
                      <td>{formatDateTime(order.created_at.toString())}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          ) : 
          ( <h2>Sem pedidos!</h2>)
        }
        
      </Container>
      <Footer/>
    </>
  );
}