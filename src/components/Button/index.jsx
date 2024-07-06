import { Container } from "./styles";

export function Button({ title, bgColor, width, padding, icon: Icon, ...rest  }) {
  return (
    <Container 
      $bgColor={bgColor} 
      $width={width}
      $padding={padding}
      { ...rest }
    >
      { Icon && <Icon />  }
      { title }
    </Container>
  );
}