import React from 'react'
import { Row, Col, UncontrolledPopover } from 'reactstrap'
import Lottie from 'react-lottie'
import * as animationData from '../../assets/animations/hero-animation.json'
import { StaticImage } from 'gatsby-plugin-image'

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Hero = () => {
  return (
    <div className="hero">
      <Row>
        <Col md="6" className="d-flex flex-column justify-content-center">
          <h1 id="easter">Hello there!</h1>
          <UncontrolledPopover
            trigger="focus"
            placement="right"
            target="easter"
          >
            <StaticImage
              src="../../assets/images/grievous.svg"
              alt="Grievous"
              placeholder="tracedSVG"
            />
            <p>General Kenobi!</p>
          </UncontrolledPopover>
          <h2>Welcome to my portfolio.</h2>
        </Col>
        <Col md="6">
          <Lottie options={defaultOptions} height={600} width={600} />
        </Col>
      </Row>
    </div>
  )
}

export default Hero
