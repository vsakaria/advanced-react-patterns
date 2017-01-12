import React from 'react'

const MenuItem = ({ children, onClick, link }) => (
  <p>
    <a href={ link } style={{ cursor: 'pointer' }} onClick={ onClick }>
      { children }
    </a>
  </p>
)

export default MenuItem
