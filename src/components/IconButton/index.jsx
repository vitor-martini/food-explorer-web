import { Container } from "./styles";

export function IconButton({ icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      <Icon/>
    </Container>
  );
}