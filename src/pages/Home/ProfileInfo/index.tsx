import { Buildings, GithubLogo, Link, Users } from "phosphor-react";
import { InfoContacts, InfoContainer, ProfileInfoContainer } from "./styles";

export function  ProfileInfo() {
  return (
    <ProfileInfoContainer>
      <img src="https://avatars.githubusercontent.com/u/57717982?v=4" alt="" />
      <InfoContainer>
        <div>
          <h1>Fabio Batoni</h1>
          <a href="https://github.com/fabiobatoni">
            GITHUB
            <Link size={20} />
          </a>
        </div>

        <p>Front-End Developer 👨‍💻 Javascript | React | NodeJS</p>

        <InfoContacts>
        <ul>
          <li>
            <GithubLogo size={20} />
            fabiobatoni
          </li>
          <li>
            <Buildings size={20} />
            empresa
          </li>
          <li>
            <Users size={20} />
            seguidores
          </li>
        </ul>
      </InfoContacts>
      </InfoContainer>
    </ProfileInfoContainer>
  )
}