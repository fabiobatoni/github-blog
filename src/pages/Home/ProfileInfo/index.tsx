import { Buildings, GithubLogo, Link, Users } from "phosphor-react";
import { InfoContacts, InfoContainer, ProfileInfoContainer } from "./styles";
import { api } from "../../../lib/axios";
import { useEffect, useState } from "react";

interface ProfileUser {
  name: string;
  login: string;
  html_url: string;
  avatar_url: string;
  bio: string;
  company?: string;
  followers: string;
}

export function  ProfileInfo() {

  const [ profile, setProfile ] = useState<ProfileUser>({
    name: '',
    login: '',
    html_url: '',
    avatar_url: '',
    bio: '',
    company: '',
    followers: ''
  })

  async function getProfileInfo() {
    const response = await api.get('users/fabiobatoni')

    setProfile(response.data);
  }

  useEffect(() => {
    getProfileInfo()
  }, []);

  return (
    <ProfileInfoContainer>
      <img src={ profile.avatar_url } alt="" />
      <InfoContainer>
        <div>
          <h1>{ profile.name }</h1>
          <a href={ profile.html_url }>
            GITHUB
            <Link size={20} />
          </a>
        </div>

        <p>{ profile.bio }</p>

        <InfoContacts>
        <ul>
          <li>
            <GithubLogo size={20} />
            { profile.login }
          </li>
          {
            profile.company != null ? 
              <li>
                <Buildings size={20} />
                empresa
              </li>
            : 
              <>
              </>
          }
          <li>
            <Users size={20} />
            { profile.followers }
          </li>
        </ul>
      </InfoContacts>
      </InfoContainer>
    </ProfileInfoContainer>
  )
}