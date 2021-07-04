import * as React from 'react';
import { Seo, Layout, WebsitesGrid, PageHeader } from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import { FaWordpressSimple, FaHtml5, FaSass, FaOpencart } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const Webpages = () => (
  <Layout>
    <Seo title="Webpages" />
    <PageHeader heading="Webpages" image={<StaticImage src="../../assets/images/coder.svg" alt="Coder" placeholder="tracedSVG" />}>
      <p>
        Websites down below are showcase of some projects I worked on during my time in{' '}
        <a target="_blank" rel="noreferrer" href="https://startujemeweby.cz/en/">
          STARTUJEME WEBY
        </a>{' '}
        company. They were coded on the basis of custom design and they are customizable from Wordpress or OpenCart CMS.
      </p>
      <div>
        <span className="badge bg-secondary me-1">
          <FaHtml5 /> HTML
        </span>
        <span className="badge bg-secondary me-1">
          <FaSass /> Sass
        </span>
        <span className="badge bg-secondary me-1">
          <SiJavascript /> JavaScript
        </span>
        <span className="badge bg-secondary me-1">
          <FaWordpressSimple /> Wordpress
        </span>
        <span className="badge bg-secondary me-1">
          <FaOpencart /> Opencart
        </span>
      </div>
    </PageHeader>
    <WebsitesGrid />
  </Layout>
);

export default Webpages;
