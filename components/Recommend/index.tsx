import { Container, Avatar, Info } from './styles'

interface RecommendInterface {
  recommend: {
    avatar: string;
    title: string;
    views: number;
  }
}

export default function RecommendCard({ recommend }: RecommendInterface) {
  return (
    <Container>
      <Avatar src={recommend.avatar}></Avatar>
      <Info>
        <a>{recommend.title}</a>
        <span>{recommend.views}</span>
      </Info>
    </Container>
  )
}