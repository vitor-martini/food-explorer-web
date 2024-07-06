import { Container, CardSession } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Card } from "../Card";

export function CategorySession({ categoryData }) {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`dishes?category=${categoryData.name}`);
      setDishes(response.data);
    }

    fetchDishes();
  }, []);

  return (
    <Container>
      <h1>{categoryData.name}</h1>
      <CardSession>
        {
          dishes.length > 0 && dishes.map(dish => (
            <Card 
              key={dish.id}
              dishData={dish}
            />
          ))
        }
      </CardSession>
    </Container>
  );
}