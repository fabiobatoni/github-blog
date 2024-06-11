import styled from "styled-components";

export const DetailsInfoContainer = styled.div`
  max-width: 864px;
  width: 100%;
  height: 212px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  gap: 2rem;
`;

export const InfoContainer = styled.div`
  p {
    margin-top: 2rem;
    color: ${(props) => props.theme['base-text']};
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      font-size: 0.80rem;
      color: ${(props) => props.theme['blue']};
      text-decoration: none;

      svg {
        padding-top: 0.4rem;
        margin-left: 0.2rem;
      }
    }
  }

  h1 {
    margin-top: 2rem;
    font-size: 2rem;
    color: ${(props) => props.theme['base-title']};
  }
`;

export const InfoList = styled.div`
  ul {
    margin-top: 2rem;
    display: flex;
    gap: 3rem;
    list-style-type: none;

    color: ${(props) => props.theme['base-subtitle']};

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;