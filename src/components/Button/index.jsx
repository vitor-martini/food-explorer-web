import { Container } from "./styles";

export function Button({ title, bgColor, color, width, padding, icon: Icon, ...rest  }) {
  return (
    <Container 
      $bgColor={bgColor} 
      $color={color} 
      $width={width}
      $padding={padding}
      { ...rest }
    >
      { Icon && <Icon />  }
      { title }
    </Container>
  );
}