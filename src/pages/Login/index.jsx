import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, LogoContainer, CardContainer, InputContainer } from "./styles";
import Logo from "../../assets/logo.svg";
import { useMediaQuery } from "react-responsive";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export function Login() {
  const isMobile = useMediaQuery({ maxWidth: DEVICE_BREAKPOINTS.MD });

  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
        <h1>food explorer</h1>
      </LogoContainer>

      <CardContainer>
        {
          !isMobile && (
            <h2>Faça login</h2>
          )
        }

        <InputContainer>
          <label htmlFor="email">Email</label>
          <Input
            label={"Email"}
            inputId={"email"}
            placeholder={"Seu email"}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="password">Senha</label>
          <Input
            label={"Senha"}
            inputId={"password"}
            type={"password"}
            placeholder={"Sua senha"}
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