import { Container, HeroContainer, Title, ImageWrapper, Image } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Hero from "../../assets/hero.svg";

export function Home() {
  return (
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
      <Footer/>
    </Container>
  );
}