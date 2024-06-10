import { Header } from "../../components/Header";
import { PostCard } from "./PostCard";
import { ProfileInfo } from "./ProfileInfo";
import { HomeContainer, HomeContent, ListSection, SearchSection } from "./styles";


export function Home() {
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
              6 publicações
            </small>
          </div>
          <input
            type="text"
            placeholder="Busque o conteúdo"
          />
        </SearchSection>
        <ListSection>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </ListSection>
      </HomeContent>
      </HomeContainer>
    </>
  )
}