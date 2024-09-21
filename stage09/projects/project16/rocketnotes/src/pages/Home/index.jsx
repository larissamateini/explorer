import { FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from "react-router-dom";

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText text="Todos" active />
        </li>
        <li>
          <ButtonText text="Frontend"/>
        </li>
        <li>
          <ButtonText text="Node"/>
        </li>
        <li>
          <ButtonText text="React"/>
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React Modal', 
            tags: [
              { id: '1', name: 'React' }
            ]
          }} />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}