import { Container } from "./styles";

export function ButtonText({ text, active = false, ...rest }) {
  return (
    <Container
      type="button"
      $active={active.toString()} 
      {...rest}
    >
      {text}
    </Container>
  );
}