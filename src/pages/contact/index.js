import * as React from "react"
import { Link } from "gatsby"
import { Seo, Layout } from "../../components/index"

const Playground = () => (
  <Layout>
    <Seo title="Contact" />
    <h1>Contact</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Playground
