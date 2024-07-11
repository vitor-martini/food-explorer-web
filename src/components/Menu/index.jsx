import { Container, Header, Main } from "./styles";
import { Footer } from "../Footer";
import { IconButton } from "../IconButton";
import { Close } from "../../icons/Close";
import { Search } from "../../icons/Search";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Menu({ isOpen, toggleMenu }) {
  const { user, logOut } = useAuth();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    if(event.key === "Enter" && search) {
      navigate(`/search?name=${search}`);
      toggleMenu();
    }
  }

  function handleLogOut() {
    logOut();
    navigate("/");
  }

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
          onKeyPress={handleSearch}
          onChange={e => setSearch(e.target.value)}
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
          <li onClick={handleLogOut}>Sair</li>
        </ul>
      </Main>

      <Footer/>
    </Container>
  );
}