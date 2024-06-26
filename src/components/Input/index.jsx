import { Container } from "./styles";

export function Input({ icon: Icon, label, inputId, ...rest }) {
  return (
    <Container>
      { Icon && <Icon/> }
      <label className="sr-only" htmlFor={ inputId }> { label }</label>
      <input 
        {...rest} 
        placeholder={label}
        id={ inputId } 
      />
    </Container>
  );
}