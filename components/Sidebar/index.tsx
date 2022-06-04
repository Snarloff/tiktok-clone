import { Container, MenuItem, HomeIcon, PeopleIcon, Following, FollowingHeader, InfoContainer, Links } from './styles'
import User from '../User'

export default function Sidebar() {
  return (
    <Container>
      <MenuItem active>
        <HomeIcon src="images/homeIcon.svg"></HomeIcon>
        <span>Para você</span>
      </MenuItem>

      <MenuItem>
        <PeopleIcon src="images/peopleIcon.svg">
        </PeopleIcon>
        <span>Seguindo</span>
      </MenuItem>

      <Following>
        <FollowingHeader>Suas principais contas</FollowingHeader>
        <User user={{
          name: 'Alok',
          username: 'alok',
          avatar: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9a7e0af6aaa89fdbf5edfe5694108902~c5_100x100.jpeg?x-expires=1653156000&x-signature=%2B5eeK7vYPnMLS4sX9c2%2B7AIEgQY%3D'
        }}></User>
      </Following>

      <InfoContainer>
        <Links margin>
          <a>Início</a>
          <a>Sobre</a>
          <a>Sala de imprensa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Ajuda</a>
          <a>Segurança</a>
        </Links>
        <Links>
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin>
          <a>©️ 2020 TikTok</a>
        </Links>
      </InfoContainer>

    </Container>
  )
}