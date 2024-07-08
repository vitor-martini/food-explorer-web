import { Container, Header, Main } from "./styles";
import { Footer } from "../Footer";
import { IconButton } from "../IconButton";
import { Close } from "../../icons/Close";
import { Search } from "../../icons/Search";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Menu({ isOpen, toggleMenu }) {
  const { user, logOut } = useAuth();

  return (
    <Container
      $isOpen={isOpen}
    >
      <Header>
        <IconButton
          icon={Close}
          onClick={toggleMenu}
        />
       <h1>Menu</h1>
      </Header>
      <Main>
        <Input
          icon={Search}
          label={"Busque por pratos ou ingredients"}
          inputId={"search"}
          placeholder={"Busque por pratos ou ingredients"}
          width={"100%"}
        />

        <ul>
          {
            user.is_admin && (
              <li><Link to="/new">Novo prato</Link></li>
            )
          }
          {
            !user.is_admin && (
              <li><Link to="/favorites">Meus favoritos</Link></li>
            )
          }
          <li onClick={logOut}>Sair</li>
        </ul>
      </Main>

      <Footer/>
    </Container>
  );
}