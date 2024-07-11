import { Container, NotFoundContainer, Section, CardContainer } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import NotFoundIcon from "../../assets/notFound.png";

export function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchName = params.get("name");
  const navigate = useNavigate();
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?name=${searchName}`);
      setDishes(response.data);
      console.log(response.data);
    }

    if(!searchName) {
      navigate("/");
    }

    fetchDishes();
  }, [searchName]);

  return (
    <>
      <Header/>
      <Container> 
        {
          dishes.length > 0 ? (
            <CardContainer>
              {
                dishes.map(dish => (
                  <Card
                    key={dish.id}
                    dishData={dish}
                  />
                ))
              }
            </CardContainer>
          ) : (
            <NotFoundContainer>
              <Section>
                <h1>Nenhum prato encontrado!</h1>
                <img src={NotFoundIcon}/>
              </Section>
            </NotFoundContainer>
          )
        }
      </Container>
      <Footer/>
    </>
  );
}