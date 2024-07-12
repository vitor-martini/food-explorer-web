import { Container } from "./styles";

export function SelectInput({ label, inputId, items, selectedOption, setSelectedOption, width, padding, ...rest }) {
  return (
    <Container 
      $width={width}
      $padding={padding}
      >
      <label className="sr-only" htmlFor={ inputId }> { label }</label>
      <select 
        id={ inputId } 
        value={ selectedOption }
        onChange={(e) => setSelectedOption(e.target.value)}
        {...rest} 
      >
        {
          items.map((item, index) => (
            <option key={index} value={item.id}>
              { item.name }
            </option>
          ))
        }
      </select>
    </Container>
  );
}