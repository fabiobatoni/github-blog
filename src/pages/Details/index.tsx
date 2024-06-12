import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { DetailsInfo } from "./DetailsInfo";
import { DetailsContainer, DetailsContent } from "./styles";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";


export interface DetailsProps {
  title: string
  login: string
  html_url: string
  body: string
  created_at: string
  comments: number
}

export function Details() {

  const [ details, setDetails ] = useState<DetailsProps>({
    title: '',
    login: '',
    html_url: '',
    body: '',
    created_at: '',
    comments: 0
  })

  const { id } = useParams()

  async function getDetailsPost() {
    const response = await api.get(`repos/fabiobatoni/blog-fabiobatonidev/issues/${id}`)
    const data = response.data;

    setDetails({
      title: data.title,
      login: data.user.login,
      html_url: data.html_url,
      body: data.body,
      created_at: data.created_at,
      comments: data.comments,
    });
  }

  useEffect(() => {
    getDetailsPost()
  }, []);

  return(
    <>
      <Header />
      <DetailsContainer>
        <DetailsInfo postDetails={details}/>

        <DetailsContent>
          <div>
            { details.body }
          </div>
        </DetailsContent>

      </DetailsContainer>
    </>
  )
}