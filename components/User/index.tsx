import UserInterface from '../../interfaces/User'
import { Container, Avatar, Info  } from './styles'

export default function User({ user }: UserInterface) {
  return (
    <Container>
      <Avatar src={user.avatar}></Avatar>
      <Info>
        <a>{user.name}</a>
        <span>{user.username}</span>
      </Info>
    </Container>
  )
}
