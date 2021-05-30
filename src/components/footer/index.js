import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        © {new Date().getFullYear()}, Vlastimil Skupien
      </div>
    </footer>
  )
}

export default Footer
