import styled from 'styled-components';

export const GithubBoxWrap = styled.div`
  padding-bottom: 12rem;
`;

export const GithubCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GithubCard = styled.div`
  padding: 2rem;
  background: #3e3d56;
  border-radius: 2rem;
  width: 19%;
  color: white;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  a {
    color: #fff;
    text-decoration: none;
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
  &:hover {
    box-shadow: 5px 5px #a3a3ff, 10px 10px #d6dfff;
    transform: translate3d(-10px, -10px, 0);
  }
  h4 {
    text-transform: capitalize;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Languages = styled.div`
  margin-top: auto;
  /* .js {
    background: #f1e05a;
  }
  .scss {
    background: #c6538c;
  }
  .css {
    background: #563d7c;
  }
  .html {
    background: #e34c26;
  }
  .php {
    background: #4f5d95;
  } */
`;
