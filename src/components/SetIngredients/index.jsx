import { Button } from "../Button";
import { Container, InputWrapper } from "./styles";
import { Plus } from "../../icons/Plus";
import { Close } from "../../icons/Close";
import { useTheme } from "styled-components";
import { useState } from "react";

export function SetIngredients({ ingredients, setIngredients }) {
  const theme = useTheme();
  const [newIngredient, setNewIngredient] = useState("");

  function handleAddNewIngredientToList() {
    setIngredients([...ingredients, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(index) {
    setIngredients(ingredients.filter((_, i) => i !== index));
  }

  return (
    <Container> 
      
      <InputWrapper>
        <Button 
          icon={Plus}
          bgColor={"transparent"}
          padding={"0.6rem 1.6rem"}
          onClick={handleAddNewIngredientToList}
        >
        </Button>
        <input 
          type="text" 
          placeholder="Adicionar"
          onChange={(e) => setNewIngredient(e.target.value)}
          value={newIngredient}
        />
      </InputWrapper>
      {
        ingredients.length > 0 && (
          ingredients.map((ingredient, index) => (
            <Button 
              key={index} 
              icon={Close}
              title={ingredient}
              bgColor={theme.COLORS.LIGHT_600}
              padding={"0.4rem 1.6rem"}
              onClick={() => handleRemoveIngredient(index)}
            />
          ))
        )
      }
    </Container>
  );
}