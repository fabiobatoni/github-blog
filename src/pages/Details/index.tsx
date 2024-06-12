import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { DetailsInfo } from "./DetailsInfo";
import ReactMarkdown from 'react-markdown'
import { DetailsContainer, DetailsContent, LoadingContainer } from "./styles";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { CircleNotch } from "phosphor-react";


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

  const [loading, setLoading] = useState(true);

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

    setLoading(false);
  }

  useEffect(() => {
    getDetailsPost()
  }, [id]);

  if (loading) {
    return (
      <LoadingContainer>
        <CircleNotch  size={20} />
        <p>Loading...</p>
      </LoadingContainer>
    );
  }

  return(
    <>
      <Header />
      
      <DetailsContainer>
        <DetailsInfo postDetails={details}/>

        <DetailsContent>
          <div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{details.body}</ReactMarkdown>
          </div>
        </DetailsContent>

      </DetailsContainer>
    </>
  )
}