import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Header, Footer } from '../index'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import './layout.scss'

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutWrapper>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <main className="flex-shrink-0">{children}</main>
      </Container>
      <Footer />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
