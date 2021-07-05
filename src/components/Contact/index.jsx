import React from 'react';
import { Col, Row } from 'reactstrap';
import ContactForm from './ContactForm';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/animations/contact-animation.json';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Contact = () => (
  <Row>
    <Col md="6" className="d-flex flex-column justify-content-center">
      <ContactForm />
    </Col>
    <Col md="6">
      <Lottie options={defaultOptions} height={600} width={600} />
    </Col>
  </Row>
);

export default Contact;
