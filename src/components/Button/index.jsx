import { Container } from "./styles";

export function Button({ title, bgColor, icon: Icon  }) {
  return (
    <Container bgColor={bgColor}>
      { Icon && <Icon />  }
      { title }
    </Container>
  );
}