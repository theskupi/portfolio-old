import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'

const AboutWrapper = styled.section`
  padding: 12rem 0;
`

const About = () => {
  return (
    <AboutWrapper>
      <Row>
        <Col md="6">
          <StaticImage
            src="../../assets/images/code-thinking.svg"
            alt="Code thinking"
            placeholder="tracedSVG"
          />
        </Col>
        <Col md="6">
          <h3>About me</h3>
          <p>
            Hi again from Brno! My name is Vlastimil Skupien and I'd like to be
            a React developer. I'm creating websites for more than 2 years and
            by doing this portfolio I want to prove myself, that I can reach
            higher{' '}
            <span role="img" aria-label="rocket">
              🚀
            </span>
            .
          </p>
        </Col>
      </Row>
    </AboutWrapper>
  )
}

export default About
