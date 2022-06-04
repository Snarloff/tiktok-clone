import { Container, Content, LogoContainer, LogoIcon, Logo, OptionsContainer, Icon, Avatar } from './styles'

export default function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="images/logoIcon.svg"></LogoIcon>
          <Logo src="images/logo.svg"></Logo>
        </LogoContainer>

        <OptionsContainer>
          <Icon src="images/uploadIcon.svg"></Icon>
          <Avatar>
            <img src="https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3c04d3e89ecea456341c9bd4613eec69~c5_100x100.jpeg?x-expires=1653156000&x-signature=Swz0IysTPUVSSaJY0B7pTJXl4EA%3D" alt="" />
          </Avatar>
        </OptionsContainer>

      </Content>
    </Container>
  )
}