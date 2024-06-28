import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, LogoContainer, CardContainer, InputContainer } from "./styles";
import Logo from "../../assets/logo.svg";

export function Login() {
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
        <h1>food explorer</h1>
      </LogoContainer>

      <CardContainer>
        <h2>Faça login</h2>

        <InputContainer>
          <label htmlFor="email">Email</label>
          <Input
            label={"Email"}
            inputId={"email"}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="password">Senha</label>
          <Input
            label={"Senha"}
            inputId={"password"}
            type={"password"}
          />
        </InputContainer>

        <Button
          title={"Entrar"}
          width={"100%"}
        />

        <a href="#">Criar uma conta</a>
      </CardContainer>
    </Container>
  );
}