import { useContext } from "react";
import { Header } from "../../components/Header";
import { PostCard } from "./PostCard";
import { ProfileInfo } from "./ProfileInfo";
import { HomeContainer, HomeContent, ListSection, SearchSection } from "./styles";
import { PostsContext } from "../../contexts/PostsContext";

export interface Posts {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
}

export function Home() {

  const { posts } = useContext(PostsContext);

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
            placeholder="Busque o conteúdo"
          />
        </SearchSection>
        <ListSection>
          {posts &&
            posts.map((post) => (
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