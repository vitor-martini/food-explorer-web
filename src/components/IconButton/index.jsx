import { Container } from "./styles";

export function IconButton({ icon: Icon, ...rest }) {
  return (
    <Container className="icon-button" {...rest}>
      <Icon/>
    </Container>
  );
}