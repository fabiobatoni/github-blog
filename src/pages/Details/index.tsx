import { Header } from "../../components/Header";
import { DetailsInfo } from "./DetailsInfo";
import { DetailsContainer, DetailsContent } from "./styles";

export function Details() {
  return(
    <>
      <Header />
      <DetailsContainer>
        <DetailsInfo />

        <DetailsContent>
          <div>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

          </div>
        </DetailsContent>

      </DetailsContainer>
    </>
  )
}