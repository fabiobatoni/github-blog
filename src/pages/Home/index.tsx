import { Header } from "../../components/Header";
import { ProfileInfo } from "./ProfileInfo";
import { HomeContainer } from "./styles";


export function Home() {
  return(
    <>
      <Header />
      <HomeContainer>
        <ProfileInfo />
      </HomeContainer>
    </>
  )
}