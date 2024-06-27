import { MobileContainer, Container, Logo, Title, MenuWrapper, Notification } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Search } from "../../icons/Search";
import { Receipt } from "../../icons/Receipt";
import { Out } from "../../icons/Out";
import { Menu } from "../../icons/Menu";
import logo from "../../assets/logo.svg";
import { useMediaQuery } from "react-responsive";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export function Header() {
  const isMobile = useMediaQuery({ maxWidth: DEVICE_BREAKPOINTS.MD });

  return (
    <>
      {
        isMobile ? (
          <MobileContainer>
            <IconButton
              icon={Menu}
            />
            <Logo>
              <img src={logo} alt="Logo" />
              <Title>
                <h1>food explorer</h1>
                <small>admin</small>
              </Title>
            </Logo>
            <MenuWrapper>
              <IconButton
                icon={Receipt}
              />
              <Notification>1</Notification>
            </MenuWrapper>
          </MobileContainer>
        ) : (
          <Container>
            <Logo>
              <img src={logo} alt="Logo" />
              <Title>
                <h1>food explorer</h1>
                <small>admin</small>
              </Title>
            </Logo>
  
            <Input
              icon={Search}
              label={"Busque por pratos ou ingredients"}
              inputId={"search"}
              phTextAlign={"center"}
            />

            <Button
              icon={Receipt}
              title="Pedidos (0)"
            />
      
            <IconButton
              icon={Out}
            />
          </Container>
        )
      }
    </>
  );
}