import * as React from 'react'
import { About, Hero, Layout, Seo } from '../components/index'

const Index = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default Index
