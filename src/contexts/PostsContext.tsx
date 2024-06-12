import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Posts {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
}

interface PostContextType {
  posts: Posts[]
  fetchPosts: (query?: string) => Promise<void>
}

interface PostsProvidersProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostContextType)

export function PostsProviders({ children }: PostsProvidersProps) {
  const [posts, setPosts] = useState<Posts[]>([])

  async function fetchPosts() {

    const response = await api.get('search/issues', {
      params: {
        q: 'repo:fabiobatoni/blog-fabiobatonidev',
      },
    })

    const mappedPosts = response.data.items.map((item: Posts) => ({
      id: item.id,
      number: item.number,
      title: item.title,
      body: item.body,
      created_at: item.created_at,
    }));

    setPosts(mappedPosts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostsContext.Provider
      value={{
        posts,
        fetchPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
