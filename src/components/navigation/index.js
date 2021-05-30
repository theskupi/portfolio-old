import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      <Link to="/webpages/">Webpages</Link>
      <Link to="/playground/">Playground</Link>
      <Link to="/contact/">Contact</Link>
    </div>
  )
}

export default Navigation
