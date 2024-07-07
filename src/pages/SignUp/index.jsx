import { Container, LogoContainer, CardContainer, InputContainer } from "./styles";
import Logo from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/toast"; 
import { useTheme } from "styled-components";

export function SignUp() {
  const { addToast } = useToast(); 
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: DEVICE_BREAKPOINTS.MD });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSigUp() {
    if(!name || !email || !password || !email.includes("@")) {
      addToast("Preencha todos os campos!", theme.COLORS.TOMATO_100);
      return;
    }
    
    try {
      await api.post("/users", { name, email, password });
      addToast("Cadastro efetuado com sucesso!", theme.COLORS.MINT_100, theme.COLORS.DARK_100);
      navigate("/");
    } catch (error) {
      if(error.response) {
        addToast(error.response.data.message, theme.COLORS.TOMATO_100);
      } else {
        addToast("Não foi possível cadastrar.", theme.COLORS.TOMATO_100);
      }
    }
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
            <h2>Crie sua conta</h2>
          )
        }
        <InputContainer>
          <label htmlFor="name">Seu nome</label>
          <Input
            label={"Seu nome"}
            inputId={"name"}
            placeholder={"Fulano de Tal"}
            onChange={e => setName(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="email">Email</label>
          <Input
            label={"Email"}
            inputId={"email"}
            placeholder={"exemplo@email.com"}
            type={"email"}
            onChange={e => setEmail(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="password">Senha</label>
          <Input
            label={"Senha"}
            inputId={"password"}
            placeholder={"No mínimo 6 caracteres"}
            type={"password"}
            onChange={e => setPassword(e.target.value)}
          />
        </InputContainer>

      <Button
        title={"Criar conta"}
        width={"100%"}
        onClick={handleSigUp}
      />

      <Link to="/">Já tenho uma conta</Link>
      </CardContainer>
    </Container>
  );
}