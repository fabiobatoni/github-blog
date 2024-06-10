import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  margin-top: -5.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.5rem;
  padding: 1rem 2rem;

  @media (max-width: 680px) {
    padding: 1rem;
  }
`