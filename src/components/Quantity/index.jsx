import { Container } from "./styles";
import { Minus } from "../../icons/Minus";
import { Plus } from "../../icons/Plus";
import { Button } from "../Button";

export function Quantity({ quantity, setQuantity }) {
  function handleClick(plus) {
    if(plus) {
      setQuantity(quantity + 1);
      return;
    }

    if(quantity === 1) return;
    setQuantity(quantity - 1);
  }

  return (
    <Container>
      <Button
        icon={ Minus }
        bgColor={"transparent"}
        onClick={() => handleClick(false)}
      />
      { quantity.toString().padStart(2, "0") }
      <Button
        icon={ Plus }
        bgColor={"transparent"}
        onClick={() => handleClick(true)}
      />
    </Container>
  );
}