import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          SPA Restaurant
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
          <li>
            <a href="https://github.com/notaddtry/React-restaurant">
              Repository
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
