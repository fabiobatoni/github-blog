import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Posts } from "..";
import { PostCardContainer } from "./styles";

interface PostCard {
  post: Posts
}

export function PostCard ({ post }: PostCard) {

  const { title, created_at, body, number } = post
  const formattedDate = formatDistanceToNow(new Date(created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostCardContainer to={`details/${number}`}>
      <header>
        <h1>{ title }</h1>
        <span>{ formattedDate }</span>
      </header>
      <main>
        <p>{ body }</p>
      </main>
    </PostCardContainer>
  )
}