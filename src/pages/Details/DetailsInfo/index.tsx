import { ArrowLeft, CalendarBlank, ChatCircle, GithubLogo, Link } from "phosphor-react";
import { InfoList, InfoContainer, DetailsInfoContainer, NavButton } from "./styles";
import { DetailsProps } from "..";

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface DetailsInfoProps {
  postDetails: DetailsProps
}

export function  DetailsInfo({ postDetails }: DetailsInfoProps) {

  const { title, login, created_at, comments, html_url  } = postDetails
  const formattedDate = formatDistanceToNow(new Date(created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <DetailsInfoContainer>
      <InfoContainer>
        <div>
          <NavButton to="/"  type="button">
            <ArrowLeft size={20} />  
            VOLTAR
          </NavButton>
          <a href={ html_url } target="_blank">
            VER NO GITHUB
            <Link size={20} />
          </a>
        </div>

        <h1>{ title }</h1>

        <InfoList>
        <ul>
          <li>
            <GithubLogo size={20} />
            { login }
          </li>
          <li>
            <CalendarBlank size={20} />
            { formattedDate }
          </li>
          <li>
            <ChatCircle size={20} />
            { comments } comentários
          </li>
        </ul>
      </InfoList>
      </InfoContainer>
    </DetailsInfoContainer>
  )
}