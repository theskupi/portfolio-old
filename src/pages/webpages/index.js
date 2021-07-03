import * as React from 'react';
import { Seo, Layout, WebsitesGrid, PageHeader } from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';

const Webpages = () => (
  <Layout>
    <Seo title="Webpages" />
    <PageHeader heading="Webpages" image={<StaticImage src="../../assets/images/coder.svg" alt="Coder" placeholder="tracedSVG" />}>
      <p>
        Websites down below are showcase of projects I worked on during my time in{' '}
        <a target="_blank" rel="noreferrer" href="https://startujemeweby.cz/en/">
          STARTUJEME WEBY
        </a>{' '}
        company. They were coded on the basis of custom design and they are customizable from Wordpress or OpenCart CMS.
      </p>
    </PageHeader>
    <WebsitesGrid />
  </Layout>
);

export default Webpages;
