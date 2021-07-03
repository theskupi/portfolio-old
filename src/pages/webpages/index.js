import * as React from 'react';
import { Seo, Layout, WebsitesGrid } from '../../components/index';

const Webpages = () => (
  <Layout>
    <Seo title="Webpages" />
    <h2>Webpages</h2>
    <p>
      Websites down below are showcase of projects I worked on during my time in{' '}
      <a target="_blank" rel="noreferrer" href="https://startujemeweby.cz/en/">
        STARTUJME WEBY
      </a>{' '}
      company. They were coded on the basis of custom design and are customizable from Wordpress or OpenCart CMS. 
    </p>
    <WebsitesGrid />
  </Layout>
);

export default Webpages;
