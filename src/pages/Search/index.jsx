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
  const [searchDishes, setSearchDishes] = useState([]);

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get("/favorites");
      const favorites = response.data.map(favorite => {
        favorite.dishes.favorite_id = favorite.id;
        return favorite.dishes;
      });
      setSearchDishes(favorites);
    }

    async function fetchDishes() {
      const response = await api.get(`/auth-dishes?name=${searchName}`);
      setSearchDishes(response.data);
    }
    
    if (location.pathname.startsWith("/favorites")) {
      fetchFavorites();
    } else if (location.pathname.startsWith("/search")) {
      if(!searchName) {
        navigate("/");
      }
      fetchDishes();
    }
    
  }, [searchName]);

  return (
    <>
      <Header/>
      <Container> 
        {
          searchDishes.length > 0 ? (
            <CardContainer>
              {
                searchDishes.map(dish => { 
                  return (
                  <Card
                    key={dish.id}
                    dishData={dish}
                  />
                );})
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