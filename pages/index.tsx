import Layout from '../components/Layout'
import Feed from '../components/Feed'
import PostInterface from '../interfaces/Post'
import Suggestions from '../components/Suggestions'

export default function Home({ posts }: PostInterface) {
  
  return <Layout>
    <Feed posts={posts}>

    </Feed>
    <Suggestions></Suggestions>
  </Layout>
}

export async function getServerSideProps() {

  const data = [
    {
      id: 1,
      author: { id: 1, avatar: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9a7e0af6aaa89fdbf5edfe5694108902~c5_100x100.jpeg?x-expires=1653156000&x-signature=%2B5eeK7vYPnMLS4sX9c2%2B7AIEgQY%3D', name: 'Alok', username: 'alok' },
      description: 'Lorem impsum',
      tags: [{ title: '#foryou' }, { title: '#music' }],
      songName: 'Música do vídeo', 
      videoUrl: 'https://v16-webapp.tiktok.com/1dba8f27413b70c0eb1a8436532c4bff/62873c4a/video/tos/useast2a/tos-useast2a-ve-0068c004/7bcd0379a152452d984c664d6ac89416/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=6614&bt=3307&cs=0&ds=3&ft=eXd.6HAzMyq8Z2Mqbwe2Nk5Wol7Gb&mime_type=video_mp4&qs=0&rc=ZWc1NTs2aTQ1O2k0NTczaUBpajN1OzM6ZmU8PDMzNzczM0A0YTJgLjMxNl8xY182NTMxYSMwZTYvcjRnZmZgLS1kMTZzcw%3D%3D&l=2022052000590801018907414826106692', 
      likes: 104, 
      comments: 10, 
      replies: 40
    }
  ]

  return {
    props: {
      posts: data
    }
  }
}