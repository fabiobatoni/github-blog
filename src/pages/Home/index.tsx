import { useCallback, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { PostCard } from "./PostCard";
import { ProfileInfo } from "./ProfileInfo";
import { HomeContainer, HomeContent, ListSection, SearchSection } from "./styles";
import { api } from "../../lib/axios";

export interface Posts {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

export function Home() {

  const [posts, setPosts] = useState<Posts[]>([])

  const fetchPosts = useCallback(async () => {
    const response = await api.get('search/issues', {
      params: {
        q: 'repo:fabiobatoni/blog-fabiobatonidev',
      },
    })

    const mappedPosts = response.data.items.map((item: Posts) => ({
      id: item.id,
      title: item.title,
      body: item.body,
      created_at: item.created_at,
    }));

    setPosts(mappedPosts)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])


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