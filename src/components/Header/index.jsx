import { Container, Logo, Title } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { Search } from "../../icons/Search";
import { Receipt } from "../../icons/Receipt";
import { Out } from "../../icons/Out";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>

      <Logo>
        <img src={logo} alt="Logo" />
        <Title>
          <h1>food explorer</h1>
          <small>admin</small>
        </Title>
      </Logo>

      <Input
          icon={Search}
          label={"Busque por pratos ou ingredients"}
          inputId={"search"}
          phTextAlign={"center"}
        />

      <Button
        icon={Receipt}
        title="Pedidos (0)"
      />

      <Out/>

    </Container>
  );
}