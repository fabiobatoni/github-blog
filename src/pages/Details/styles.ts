import { CircleNotch } from "phosphor-react";
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

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
    gap: 1rem;

    div {
      width: 50%;
    }
  }
  
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1.5em;
  color: #555;
`;

export const LoadingIcon = styled(CircleNotch)`
  font-size: 2em;
  margin-bottom: 0.5em;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;