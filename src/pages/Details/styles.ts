import styled from "styled-components";

export const DetailsContainer = styled.div`
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
`;

export const DetailsContent = styled.div`
  max-width: 864px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;