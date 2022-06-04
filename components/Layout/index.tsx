import { Container, SidebarContainer, ContentContainer } from './styles'
import Header from '../Header'
import Sidebar from '../Sidebar'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header></Header>
      <Container>
        <SidebarContainer>
          <Sidebar></Sidebar>
        </SidebarContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    </>
  )
} 