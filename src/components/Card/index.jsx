import { Container, Dish, Options } from "./styles";
import DishPlaceholder from "../../assets/dish.png";
import { Heart } from "../../icons/Heart";
import { Quantity } from "../Quantity";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { useMediaQuery } from "react-responsive";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { api } from "../../services/api";

export function Card({ dishData }) {
  const isMobile = useMediaQuery({ maxWidth: DEVICE_BREAKPOINTS.MD });
  const photo = dishData.photo ? `${api.defaults.baseURL}/uploads/${dishData.photo}` : DishPlaceholder;

  return (
    <Container>
      <Dish>
        <img src={photo} alt="Prato" />
        <IconButton
          icon={Heart}
        />
      </Dish>
      <h1>{dishData.name}</h1>
      {
        !isMobile && (
          <p>{ dishData.description }</p>
        )
      }
      <h2>R$ {dishData.price.toString().replace(".", ",")}</h2>
      <Options>
        <Quantity/>
        <Button
          title={"incluir"}
          width={isMobile ? "100%" : "auto"}
          padding={isMobile ? "0.4rem 2.4rem" : "1.2rem 2.4rem"}
        />
      </Options>

    </Container>
  );
}