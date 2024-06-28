import { Container } from "./styles";

export function Button({ title, bgColor, width, icon: Icon, ...rest  }) {
  return (
    <Container 
      bgColor={bgColor} 
      width={width}
      { ...rest }
    >
      { Icon && <Icon />  }
      { title }
    </Container>
  );
}