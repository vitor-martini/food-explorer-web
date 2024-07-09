import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function BackButton({ ...rest  }) {
  const navigate = useNavigate();

  return (
    <Container 
      { ...rest }
      onClick={() => navigate(-1)}
    >
      {
       "< Voltar" 
      }
    </Container>
  );
}


//           onClick={() => navigate(-1)}
//           bgColor={"transparent"}
//           padding={"0px"}