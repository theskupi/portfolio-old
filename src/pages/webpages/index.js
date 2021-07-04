import * as React from 'react';
import { Seo, Layout, WebsitesGrid, PageHeader } from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import { FaWordpressSimple, FaHtml5, FaSass, FaOpencart, FaPhp } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import styled from 'styled-components';

const BadgesWrap = styled.div`
  font-size: 1.3rem;
  span {
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }
`;

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
      <BadgesWrap>
        <span className="badge bg-secondary">
          <FaHtml5 className="me-1" /> HTML
        </span>
        <span className="badge bg-secondary">
          <FaSass className="me-1" /> Sass
        </span>
        <span className="badge bg-secondary">
          <SiJavascript className="me-1" /> JavaScript
        </span>
        <span className="badge bg-secondary">
          <FaPhp className="me-1" /> PHP
        </span>
        <span className="badge bg-secondary">
          <FaWordpressSimple className="me-1" /> Wordpress
        </span>
        <span className="badge bg-secondary">
          <FaOpencart className="me-1" /> Opencart
        </span>
      </BadgesWrap>
    </PageHeader>
    <WebsitesGrid />
  </Layout>
);

export default Webpages;
