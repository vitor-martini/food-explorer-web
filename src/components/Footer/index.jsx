import { Container, Logo } from "./styles";
import FadedLogo from "../../assets/faded-logo.svg";

export function Footer() {
  return (
    <Container>
      <Logo>
        <img src={FadedLogo} alt="Logo" />
        <h1>food explorer</h1>
      </Logo>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}