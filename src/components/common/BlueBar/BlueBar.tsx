import { Link } from 'gatsby'
import React from 'react'

function BlueBar() {
  return (
    <>
      <nav
        aria-label="secondary"
        className="bg-royalblue-dark text-white flex items-center text-sm min-h-0 h-12 box-border justify-between pl-4 pr-4"
      >
        <div>
          <Link className="mr-6" to="/">
            Shop
          </Link>
          <Link className="ml-6 mr-6" to="/about">
            About us
          </Link>
        </div>
        <div>
          <a href="https://vtex.com" className="text-right ml-6 mr-6">
            visit vtex.com
          </a>
        </div>
      </nav>
    </>
  )
}

export default BlueBar