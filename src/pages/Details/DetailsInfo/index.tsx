import { ArrowLeft, CalendarBlank, ChatCircle, GithubLogo, Link } from "phosphor-react";
import { InfoList, InfoContainer, DetailsInfoContainer } from "./styles";


export function  DetailsInfo() {
  return (
    <DetailsInfoContainer>
      <InfoContainer>
        <div>
          <a href="">
            <ArrowLeft size={20} />  
            VOLTAR
          </a>
          <a href="https://github.com/fabiobatoni">
            VER NO GITHUB
            <Link size={20} />
          </a>
        </div>

        <h1>JavaScript data types and data structures</h1>

        <InfoList>
        <ul>
          <li>
            <GithubLogo size={20} />
            fabiobatoni
          </li>
          <li>
            <CalendarBlank size={20} />
            Há 1 dia
          </li>
          <li>
            <ChatCircle size={20} />
            5 comentários
          </li>
        </ul>
      </InfoList>
      </InfoContainer>
    </DetailsInfoContainer>
  )
}