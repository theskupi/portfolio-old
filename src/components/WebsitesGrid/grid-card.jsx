import React from 'react';
import { WebsitesGridCard } from './styles';

const GridCard = ({ pageData }) => {
  return (
    <WebsitesGridCard>
      <h4>
        <a target="_blank" rel="noreferrer" href={pageData.url}>
          {pageData.name}
        </a>
      </h4>
    </WebsitesGridCard>
  );
};

export default GridCard;
