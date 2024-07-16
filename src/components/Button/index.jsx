import { Container } from "./styles";

export function Button({ 
    title, 
    bgColor, 
    color, 
    width, 
    padding, 
    borderRadius, 
    icon: Icon, 
    ...rest  
  }) {
  return (
    <Container 
      $bgColor={bgColor} 
      $color={color} 
      $width={width}
      $padding={padding}
      $borderRadius={borderRadius}
      { ...rest }
    >
      { Icon && <Icon />  }
      { title }
    </Container>
  );
}