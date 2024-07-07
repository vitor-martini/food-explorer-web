import { Container, HeroContainer, Title, ImageWrapper, Image } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CategorySession } from "../../components/CategorySession";
import Hero from "../../assets/hero.svg";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get("categories");
      setCategories(response.data);
    }

    fetchCategories();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <HeroContainer>
          <ImageWrapper>
            <Image src={Hero} />
          </ImageWrapper>
          <Title>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </Title>
        </HeroContainer>
        {
          categories.map(category => (
            <CategorySession
              key={ category.id }
              categoryData={ category }
            />
            )
          )
        }
      </Container>
      <Footer/>
    </>
  );
}