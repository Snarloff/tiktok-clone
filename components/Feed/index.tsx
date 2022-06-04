import { Container } from './styles'
import PostCard from '../Posts'
import PostInterface from '../../interfaces/Post'

export default function Feed({ posts }: PostInterface) {

  return (
    <Container>
      {posts.map((post, index) => ( 
        <PostCard key={index} post={post}></PostCard>
      ))}
    </Container>
  ) 
}