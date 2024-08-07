import { useState } from "react";
import { Container, Photo, Options } from "./styles";
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
import { useCart } from "../../hooks/cart";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/toast"; 

export function Card({ dishData }) {
  const { addToast, toastTypes } = useToast(); 
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(!!dishData.favorite_id);
  const isMobile = useMediaQuery({ maxWidth: DEVICE_BREAKPOINTS.MD });
  const photo = dishData.photo ? `${api.defaults.baseURL}/uploads/${dishData.photo}` : DishPlaceholder;
  const { user } = useAuth();
  const { addToCart } = useCart();
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
      navigate(`/edit/${dishData.id}`);
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

  function handleQuantity(quantity) {
    setQuantity(quantity);
    dishData.quantity = quantity;
  }

  function handleInclude() {    
    if(!dishData.quantity) {
      dishData.quantity = 1;
    }
    addToCart(dishData);  
    addToast("Incluído sucesso!", toastTypes.SUCCESS);
    setQuantity(1);
  }

  return (
    <Container>
      <Photo>
        <img 
          src={photo} 
          alt={`Foto do prato ${dishData.name}`}
          onClick={() => navigate(`/dish/${dishData.id}`)}
        />
        <IconButton
          icon={setIcon()}
          onClick={handleAction}
        />
      </Photo>
      <h1
        onClick={() => navigate(`/dish/${dishData.id}`)}
      >
        {dishData.name}
      </h1>
      {
        !isMobile && (
          <p>{ dishData.description }</p>
        )
      }
      <h2>R$ {dishData.price.toString().replace(".", ",")}</h2>
      {
        !user.is_admin && (
          <Options>
            <Quantity
              quantity={quantity}
              setQuantity={handleQuantity}  
            />
            <Button
              title={"incluir"}
              width={isMobile ? "100%" : "auto"}
              padding={isMobile ? "0.4rem 2.4rem" : "1.2rem 2.4rem"}
              onClick={handleInclude}
            />
          </Options>
        )
      }
    </Container>
  );
}
