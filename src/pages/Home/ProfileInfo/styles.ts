import styled from "styled-components";

export const ProfileInfoContainer = styled.div`
  max-width: 864px;
  width: 100%;
  height: 212px;
  display: flex;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  gap: 2rem;


  img {
    border-radius: 8px;

    width: 9.25rem;
    height: 9.25rem;
  }

   @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
    gap: 1rem;

    img {
      width: 6rem;
      height: 6rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    
    img {
      width: 5rem;
      height: 5rem;
    }
  }
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
        margin-left: 0.2rem;
      }

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`;

export const InfoContacts = styled.div`
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