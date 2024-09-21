import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/larissamateini.png" 
        alt="Foto do perfil" />
        <div>
          <span>Bem-vindo,</span>
          <strong>Larissa Mateini</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}