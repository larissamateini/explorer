import { Container, Content, Links } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText text="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, iusto dolores blanditiis soluta fugit tempore cupiditate quo minima provident. Commodi ut eos expedita? Labore temporibus ad fugiat sed cupiditate ex. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo possimus natus ipsam impedit quam corporis rerum, ullam maiores sequi debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat libero quo earum obcaecati tenetur enim ipsum, ea nemo, itaque deleniti sunt culpa repudiandae, quidem maiores. Quas beatae necessitatibus facere modi!</p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Tags">
            <Tag name="express" />
            <Tag name="nodejs" />
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>

    </Container>
  )
}