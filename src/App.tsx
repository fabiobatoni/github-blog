import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { PostsProviders } from "./contexts/PostsContext";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PostsProviders>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostsProviders>
  </ThemeProvider>
  )
}

