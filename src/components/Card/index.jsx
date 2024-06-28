import { Container, Dish, Options } from "./styles";
import DishPlaceholder from "../../assets/dish.svg";
import { Heart } from "../../icons/Heart";
import { Quantity } from "../Quantity";
import { Button } from "../Button";
import { IconButton } from "../IconButton";

export function Card() {
  return (
    <Container>
      <Dish>
        <img src={DishPlaceholder} alt="Prato" />
        <IconButton
          icon={Heart}
        />
      </Dish>
      <h1>Torradas de Parma</h1>
      <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
      <h2>R$ 25,97</h2>

      <Options>
        <Quantity/>
        <Button
          title={"incluir"}
        />
      </Options>

    </Container>
  );
}