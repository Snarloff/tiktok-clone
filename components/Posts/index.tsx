import { Container, Header, PersonContainer, Avatar, Info, Author, Description, 
  Content, Tag, Song, VideoContainer, Video, Action, ActionsContainer, PlayerIcon, Actions, ButtonContainer } from './styles'
import Button from '../Button'
import { useRef, useState } from 'react'

interface Post {
  post: {
    author: { id: number, avatar: string, name: string, username: string },
    description: string,
    tags: [{ title: string }, { title: string }],
    songName: string, 
    videoUrl: string, 
    likes: number, 
    comments: number, 
    replies: number
  }
}

export default function PostCard({ post }: Post) {

  const videoRef = useRef<HTMLVideoElement>()
  const [running, setRunning] = useState(false)

  const toggleAction = () => {
    if (videoRef?.current != null) {
      if (!running) videoRef.current.play()
      else videoRef.current.pause()
      setRunning(!running)
    }
  }

  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar src={post?.author?.avatar}></Avatar>
          <Info>
            <Author>
              {post?.author?.username}
              <span>{post?.author?.name}</span>
            </Author>
            <Description>
              <span>{post?.description}</span>
              {post?.tags.map((tag, index) => (
                <Tag key={index}>{tag?.title}</Tag>
              ))}
            </Description>
          </Info>
        </PersonContainer>
        <ButtonContainer>
          <Button fontSize={14} outlined>Seguir</Button>
        </ButtonContainer>
      </Header>
      
      <Content>
        <Song>
          <img src="/images/songIcon.svg" alt="Música" />
          <a>{post?.songName}</a>
        </Song>
        <VideoContainer>
          <Video ref={videoRef} src={post?.videoUrl} webkit-playsline="" loop={true} preload="metadata"></Video>
          <ActionsContainer onClick={toggleAction}>
            <PlayerIcon src={ running ? "images/pauseIcon.svg" : "images/playIcon.svg" }></PlayerIcon>
          </ActionsContainer>
        </VideoContainer>
      </Content>

      <Actions>
        <Action>
          <img src="images/heartIcon.svg" />
          <a>{post?.likes}</a>
        </Action>
 
        <Action>
          <img src="images/bubbleIcon.svg" />
          <a>{post?.comments}</a>
        </Action>
 
        <Action>
          <img src="images/arrowIcon.svg" />
          <a>{post?.replies}</a>
        </Action>
 
      </Actions>

    </Container>
  )
}