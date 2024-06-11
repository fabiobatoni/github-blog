import { Header } from "../../components/Header";
import { DetailsInfo } from "./DetailsInfo";
import { DetailsContainer } from "./styles";

export function Details() {
  return(
    <>
      <Header />
      <DetailsContainer>
        <DetailsInfo />
      </DetailsContainer>
    </>
  )
}