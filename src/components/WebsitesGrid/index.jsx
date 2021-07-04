import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import websitesJSON from '../../data/websites.json';
import GridCard from './grid-card';
import { WebsitesContainer } from './styles';

const WebsitesGrid = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "screens" } }) {
        edges {
          node {
            base
            publicURL
          }
        }
      }
    }
  `);

  function findImg(imgName) {
    return edges.find((item) => item.node.base === imgName);
  }

  return (
    <WebsitesContainer>
      {websitesJSON.map((row, index) => {
        return (
          <div className="websitesRow" key={index}>
            {row.map((page) => (
              <GridCard pageData={page} imgUrl={findImg(page.img)} key={page.id} />
            ))}
          </div>
        );
      })}
    </WebsitesContainer>
  );
};

export default WebsitesGrid;
