import { MobileContainer, Container, Logo, Title, MenuWrapper, Notification } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { Menu } from "../Menu";
import { IconButton } from "../IconButton";
import { Search } from "../../icons/Search";
import { Receipt } from "../../icons/Receipt";
import { Out } from "../../icons/Out";
import { Menu as MenuIcon } from "../../icons/Menu";
import logo from "../../assets/logo.svg";
import { useMediaQuery } from "react-responsive";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { useCart } from "../../hooks/cart";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Header() {
  const isMobile = useMediaQuery({ maxWidth: DEVICE_BREAKPOINTS.MD });
  const { user, logOut } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleLogOut() {
    logOut();
    navigate("/");
  }

  function handleSearch(event) {
    if(event.key == "Enter" && search) {
      navigate(`/search?name=${search}`);
    }
  }

  return (
    <>
      {
        isMobile ? (
          <MobileContainer>
            <IconButton
              onClick={toggleMenu}
              icon={MenuIcon}
            />
            <Menu 
              isOpen={menuOpen}
              toggleMenu={toggleMenu}
            />
            <Logo
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="Logo" />
              <Title>
                <h1>food explorer</h1>
                {
                  user.is_admin && <small>admin</small>
                }
              </Title>
            </Logo>
            {
              !user.is_admin && 
                ( 
                  <MenuWrapper>
                    <IconButton
                      icon={Receipt}
                    /> 
                    <Notification>{cart.order.length}</Notification>
                  </MenuWrapper>
                )
            }
          </MobileContainer>
        ) : (
          <Container>
            <Logo
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="Logo" />
              <Title>
                <h1>food explorer</h1>
                {
                  user.is_admin && <small>admin</small>
                }
              </Title>
            </Logo>
  
            <Input
              icon={Search}
              label={"Busque por pratos ou ingredientes"}
              placeholder={"Busque por pratos ou ingredientes"}
              inputId={"search"}
              phTextAlign={"center"}
              maxWidth={"600px"}
              onKeyPress={handleSearch}
              onChange={e => setSearch(e.target.value)}
            />
            {
              !user.is_admin && 
                ( 
                  <Link to="/favorites">Meus favoritos</Link>
                )
            }
            {
              user.is_admin ? (
                <Button
                  title="Novo prato"
                  onClick={() => navigate("/new")}
                />
              ) : 
              
              (<Button
                icon={Receipt}
                title={`Pedidos (${cart.order.length})`}
              />) 
            }
      
            <IconButton
              icon={Out}
              onClick={handleLogOut}
            />
          </Container>
        )
      }
    </>
  );
}