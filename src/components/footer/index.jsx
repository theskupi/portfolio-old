import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
// @ts-ignore
import footerSvg from '../../assets/images/footer.svg'

const FooterWrapper = styled.footer`
  margin-top: auto;
  padding: 14rem 0px 4rem;
  background-image: url(${footerSvg});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Container className="text-center">
        <strong>© {new Date().getFullYear()}, Vlastimil Skupien</strong>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
