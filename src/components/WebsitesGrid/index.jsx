import React from 'react';
import websitesJSON from '../../data/websites.json';
import GridCard from './grid-card';
import { WebsitesGridWrap } from './styles';

const WebsitesGrid = () => (
  <WebsitesGridWrap>
    {websitesJSON.map((site) => (
      <GridCard pageData={site} key={site.id} />
    ))}
  </WebsitesGridWrap>
);

export default WebsitesGrid;
