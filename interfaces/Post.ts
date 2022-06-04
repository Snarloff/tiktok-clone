// export default interface Post {
//   posts: [{
//     author: {
//       username: string;
//       name: string;
//       avatar: string;
//     },
//     description: string;
//     tags: [
//       {
//         title: string
//       }
//     ];
//     title: string;
//     songName: string;
//     videoUrl: string;
//   }]
// }

export default interface Post {
  posts: [{
    id: number,
    author: { id: number, avatar: string, name: string, username: string },
    description: string,
    tags: [{ title: string }, { title: string }],
    songName: string, 
    videoUrl: string, 
    likes: number, 
    comments: number, 
    replies: number
  }]
}