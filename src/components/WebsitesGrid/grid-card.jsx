import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { WebsitesGridCard } from './styles';

const GridCard = ({ pageData }) => {
  return (
    <WebsitesGridCard>
      <a target="_blank" rel="noreferrer" href={pageData.url}>
        <StaticImage src="../../assets/images/screens/ahome.png" alt={`website-${pageData.name}`} placeholder="blurred" />
        <span>{pageData.name}</span>
      </a>
    </WebsitesGridCard>
  );
};

export default GridCard;
