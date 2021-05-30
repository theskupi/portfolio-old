import * as React from "react"
import { Link } from "gatsby"
import { Seo, Layout } from "../../components/index"

const Webpages = () => (
  <Layout>
    <Seo title="Webpages" />
    <h1>Hi from the Webpages</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Webpages
