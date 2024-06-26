import { Container } from "./styles";

export function Button({ title, bgColor, icon: Icon, ...rest  }) {
  return (
    <Container bgColor={bgColor} { ...rest }>
      { Icon && <Icon />  }
      { title }
    </Container>
  );
}