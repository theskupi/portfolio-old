import React from 'react';
import { Row, Col } from 'reactstrap';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/animations/hero-animation.json';
import { HeroWrap } from './style';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Hero = () => {
  return (
    <HeroWrap>
      <Row>
        <Col md="6" className="d-flex flex-column align-items-start justify-content-center">
          <h1>Hello there!</h1>
          <h2>Welcome to my portfolio.</h2>
        </Col>
        <Col md="6">
          <Lottie options={defaultOptions} height={600} width={600} />
        </Col>
      </Row>
    </HeroWrap>
  );
};

export default Hero;
