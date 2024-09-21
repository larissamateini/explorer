import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça login</h2>
        <Input 
          type="text"
          placeholder="E-mail"
          icon={FiMail}
        />
        <Input 
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />
        <Button 
          title="Entrar"
        />

        <Link to="register">
          Criar conta
        </Link>

      </Form>

      <Background/>
    </Container>
  );
}