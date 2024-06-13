import { Header } from "../../components/Header";
import { PostCard } from "./PostCard";
import { ProfileInfo } from "./ProfileInfo";
import { HomeContainer, HomeContent, ListSection, SearchSection } from "./styles";
import { PostsContext } from "../../contexts/PostsContext";
import { useContextSelector } from "use-context-selector";


export interface Posts {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
}

export function Home() {

  const fetchPosts = useContextSelector(PostsContext, (context) => {
    return context.fetchPosts
  })

  const posts = useContextSelector(PostsContext, (context) => {
    return context.posts
  })

  console.log(posts)


  return(
    <>
      <Header />
      <HomeContainer>
        <ProfileInfo />
        <HomeContent>
        <SearchSection>
          <div>
            <span>Publicações</span>
            <small>
              { posts.length } publicações
            </small>
          </div>
          <input
            type="text"
            placeholder="Busque o conteúdo e pressione [Enter]"
            onKeyDown={(e) =>
              e.key === 'Enter' && fetchPosts(e.currentTarget.value)
            }
            onBlur={(e) => fetchPosts(e.currentTarget.value)}
          />
        </SearchSection>
        <ListSection>
          {posts &&
            posts.map(post => (
              <PostCard
                key={post.id}
                post={post}
              ></PostCard>
            ))}
        </ListSection>
      </HomeContent>
      </HomeContainer>
    </>
  )
}