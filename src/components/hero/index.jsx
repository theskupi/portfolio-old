import React from 'react'
import { Row, Col, UncontrolledPopover, Button } from 'reactstrap'
import Lottie from 'react-lottie'
import * as animationData from '../../assets/animations/hero-animation.json'
import { HeroWrap } from './style'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Hero = () => {
  return (
    <HeroWrap>
      <Row>
        <Col md="6" className="d-flex flex-column align-items-start justify-content-center">
          {/* <h1 id="">Hello there!</h1> */}
          <Button id="easter">Hello there!</Button>
          <UncontrolledPopover
            trigger="focus"
            placement="right"
            target="easter"
          >
            <img
              src="https://media1.giphy.com/media/8JTFsZmnTR1Rs1JFVP/giphy.gif?cid=790b76114887d1e73d0491d5a4a5b00ece25124cc36c0db2&rid=giphy.gif&ct=g"
              alt=""
            />
          </UncontrolledPopover>
          <h2>Welcome to my portfolio.</h2>
        </Col>
        <Col md="6">
          <Lottie options={defaultOptions} height={600} width={600} />
        </Col>
      </Row>
    </HeroWrap>
  )
}

export default Hero
