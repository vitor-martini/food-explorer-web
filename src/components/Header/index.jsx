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

export function Header() {
  const isMobile = useMediaQuery({ maxWidth: DEVICE_BREAKPOINTS.MD });
  const { user, logOut } = useAuth();
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
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
            <Logo>
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
            <Logo>
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
              label={"Busque por pratos ou ingredients"}
              inputId={"search"}
              phTextAlign={"center"}
              maxWidth={"600px"}
            />

            {
              user.is_admin ? (<Button
                title="Novo prato"
              />) : 
              
              (<Button
                icon={Receipt}
                title={`Pedidos (${cart.order.length})`}
              />) 
            }
      
            <IconButton
              icon={Out}
              onClick={logOut}
            />
          </Container>
        )
      }
    </>
  );
}