import { Container } from "./styles";

export function Input({ icon: Icon, label, inputId, phTextAlign, ...rest }) {
  return (
    <Container phTextAlign={phTextAlign}>
      { Icon && <Icon/> }
      <label className="sr-only" htmlFor={ inputId }> { label }</label>
      <input 
        {...rest} 
        id={ inputId } 
      />
    </Container>
  );
}