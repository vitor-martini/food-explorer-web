import { Container, LogoContainer, CardContainer, InputContainer } from "./styles";
import Logo from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { useMediaQuery } from "react-responsive";

export function SignUp() {
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
            <h2>Crie sua conta</h2>
          )
        }
        <InputContainer>
          <label htmlFor="name">Seu nome</label>
          <Input
            label={"Seu nome"}
            inputId={"name"}
            placeholder={"Fulano de Tal"}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="email">Email</label>
          <Input
            label={"Email"}
            inputId={"email"}
            placeholder={"exemplo@email.com"}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="password">Senha</label>
          <Input
            label={"Senha"}
            inputId={"password"}
            placeholder={"No mínimo 6 caracteres"}
            type={"password"}
          />
        </InputContainer>

      <Button
        title={"Criar conta"}
        width={"100%"}
      />

      <a href="#">Já tenho uma conta</a>
      </CardContainer>
    </Container>
  );
}