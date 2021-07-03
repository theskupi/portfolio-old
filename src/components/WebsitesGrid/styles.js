import styled from 'styled-components';

export const WebsitesGridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
`;

export const WebsitesGridCard = styled.div`
  border: 1px solid black;
  padding: 1rem;
`;
