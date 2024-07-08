import { useState } from "react";
import { Container, Dish, Options } from "./styles";
import DishPlaceholder from "../../assets/dish.png";
import { Heart } from "../../icons/Heart";
import { FullHeart } from "../../icons/FullHeart";
import { Pencil } from "../../icons/Pencil";
import { Quantity } from "../Quantity";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { useMediaQuery } from "react-responsive";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Card({ dishData }) {
  const [isFavorite, setIsFavorite] = useState(!!dishData.favorite_id);
  const isMobile = useMediaQuery({ maxWidth: DEVICE_BREAKPOINTS.MD });
  const photo = dishData.photo ? `${api.defaults.baseURL}/uploads/${dishData.photo}` : DishPlaceholder;
  const { user } = useAuth();
  const navigate = useNavigate();

  function setIcon() {
    if(user.is_admin) {
      return Pencil;
    }

    if(isFavorite) {
      return FullHeart;
    }

    return Heart;
  }

  async function handleAction() {
    if(user.is_admin) {
      navigate("/new");
      return;
    }

    if(isFavorite) {
      await api.delete("/favorites", {
        data: {
          dish_id: dishData.id
        }
      });
    } else {
      await api.post("/favorites", { dish_id: dishData.id } );
    }

    setIsFavorite(!isFavorite);
  }

  return (
    <Container>
      <Dish>
        <img src={photo} alt="Prato" />
        <IconButton
          icon={setIcon()}
          onClick={handleAction}
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
