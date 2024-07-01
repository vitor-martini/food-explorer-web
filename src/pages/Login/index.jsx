import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, LogoContainer, CardContainer, InputContainer } from "./styles";
import Logo from "../../assets/logo.svg";
import { useMediaQuery } from "react-responsive";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Login() {
  const isMobile = useMediaQuery({ maxWidth: DEVICE_BREAKPOINTS.MD });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useAuth();

  async function handleLogIn() {
    if(!email || !password) {
      alert("Preencha todos os campos!");
      return;
    }
    await logIn({ email, password });
  }

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
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="password">Senha</label>
          <Input
            label={"Senha"}
            inputId={"password"}
            type={"password"}
            placeholder={"Sua senha"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>

        <Button
          title={"Entrar"}
          width={"100%"}
          onClick={handleLogIn}
        />

        <Link to="/signup">Criar uma conta</Link>
      </CardContainer>
    </Container>
  );
}