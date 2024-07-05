import { Container } from "./styles";

export function Input({ icon: Icon, label, inputId, phTextAlign, maxWidth, ...rest }) {
  return (
    <Container 
      $phTextAlign={phTextAlign}
      $maxWidth={maxWidth}
    >
      { Icon && <Icon/> }
      <label className="sr-only" htmlFor={ inputId }> { label }</label>
      <input 
        {...rest} 
        id={ inputId } 
      />
    </Container>
  );
}