import * as React from 'react'
import { About, GithubBox, Hero, Layout, Seo } from '../components/index'

const Index = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
    <GithubBox />
  </Layout>
)

export default Index
