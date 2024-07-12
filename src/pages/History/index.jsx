import { Container, Card, CardHeader, Section } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SelectInput } from "../../components/SelectInput";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { useAuth } from "../../hooks/auth";

export function History() {
  const { user } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: DEVICE_BREAKPOINTS.MD });
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState([]);

  function formatDateTime(input) {
    const [datePart, timePart] = input.split(" ");
    const [year, month, day] = datePart.split("-");
    const [hours, minutes] = timePart.split(":");
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}h${minutes}`;
    return `${formattedDate} às ${formattedTime}`;
  }

  async function handleStatusChange(newStatus, order) {
    await api.put(`/orders/${Number(order.id)}`, { status: newStatus });
    order.status = status.find((s) => Number(s.id) === Number(newStatus)).name;
    order.statusId = newStatus;
    const index = orders.findIndex((o) => o.id === order.id);
    const newOrders = [...orders];
    newOrders[index] = order;
    setOrders(newOrders);
  }

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get("/orders");
      const rawOrders = response.data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      const orders = rawOrders.map((order) => {
        return {
          status: order.status.name,
          statusId: order.status.id,
          id: order.id.toString().padStart(8, "0"),
          details: order.orderDishes
            .map((dish) => {
              return `${dish.quantity} x ${dish.dish.name}`;
            })
            .join(", "),
          date: formatDateTime(order.created_at.toString()),
        };
      });
      setOrders(orders);
    }

    async function fetchStatus() {
      const response = await api.get("/status");
      setStatus(response.data);
    }
    fetchStatus();
    fetchOrders();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1>Histórico de pedidos</h1>
        {orders.length > 0 ? (
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
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      {!user.is_admin ? (
                        <p>
                          <span
                            className={`status-dot ${order.status.toLowerCase()}`}
                          />
                          {order.status}
                        </p>
                      ) : (
                        <Section>
                          <span
                            className={`status-dot ${order.status.toLowerCase()}`}
                          />
                          <SelectInput
                            label={"Categoria"}
                            inputId={"category"}
                            items={status}
                            selectedOption={order.statusId}
                            setSelectedOption={(e) =>
                              handleStatusChange(e, order)
                            }
                            width={"15rem"}
                            padding={"0.8rem"}
                          />
                        </Section>
                      )}
                    </td>
                    <td>{order.id}</td>
                    <td>{order.details}</td>
                    <td>{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <p>{order.id}</p>
                  {!user.is_admin ? (
                    <p>
                      <span
                        className={`status-dot ${order.status.toLowerCase()}`}
                      />
                      {order.status}
                    </p>
                  ) : (
                    <Section>
                      <span
                        className={`status-dot ${order.status.toLowerCase()}`}
                      />
                      <SelectInput
                        label={"Categoria"}
                        inputId={"category"}
                        items={status}
                        selectedOption={order.statusId}
                        setSelectedOption={(e) => handleStatusChange(e, order)}
                        width={"15rem"}
                        padding={"0.8rem"}
                      />
                    </Section>
                  )}
                  <p>{order.date}</p>
                </CardHeader>
                <p>{order.details}</p>
              </Card>
            ))
          )
        ) : (
          <h2>Sem pedidos!</h2>
        )}
      </Container>
      <Footer />
    </>
  );
}