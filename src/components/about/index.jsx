import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  padding: 12rem 0;
`;

const About = () => {
  return (
    <AboutWrapper>
      <Row>
        <Col md="6">
          <StaticImage src="../../assets/images/person.svg" alt="Code thinking" placeholder="tracedSVG" />
        </Col>
        <Col md="6">
          <h3>About me</h3>
          <p>
            Hi again from Brno! My name is Vlastimil Skupien and I'd like to be a React developer. I'm creating websites for more than 2 years and by doing this
            portfolio I want to prove myself, that I can reach higher{' '}
            <span role="img" aria-label="rocket">
              🚀
            </span>
            .
          </p>
          <p>
            Right now I'm working in <a href="https://www.notino.cz/">Notino</a> as part of UX team, where we build our own Design system which I sadly cannot
            show you yet.
          </p>
          <p>
            If you want to know more about me, you can find me on{' '}
            <a href="https://cz.linkedin.com/in/vlastimil-skupien-187284158">
              Linked
              <FaLinkedin />
            </a>{' '}
            or you can always text me via <Link to="./contact">contact</Link> page.
          </p>
        </Col>
      </Row>
    </AboutWrapper>
  );
};

export default About;
