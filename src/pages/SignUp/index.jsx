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

export function SignUp() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: DEVICE_BREAKPOINTS.MD });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSigUp() {
    if(!name || !email || !password || !email.includes("@")) {
      alert("Preencha todos os campos!");
      return;
    }
    
    try {
      await api.post("/users", { name, email, password });
      alert("Cadastro efetuado com sucesso!");
      navigate("/");
    } catch (error) {
      if(error.response) {
        console.log(error);
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.");
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