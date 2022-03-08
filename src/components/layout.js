import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"

const Layout = ({ children }) => {

  return (
    <div>
      <div>
        <Header />
        <main>{children}</main>
      </div>
      <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
