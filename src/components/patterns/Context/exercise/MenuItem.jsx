import React from 'react'

const MenuItem = ({ children, link }, { toggleMenu }) => (
  <p>
    <a href={ link } style={{ cursor: 'pointer' }} onClick={ () => toggleMenu() }>
      { children }
    </a>
  </p>
)

MenuItem.contextTypes = {
  toggleMenu: React.PropTypes.func.isRequired
}

export default MenuItem
