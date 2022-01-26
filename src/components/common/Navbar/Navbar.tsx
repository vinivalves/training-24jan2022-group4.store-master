import React from 'react'
import CartToggle from 'src/components/cart/CartToggle'

import HelloBar from '../HelloBar'
import BlueBar from '../BlueBar'
import Navlinks from '../Navlinks'
import SearchInput from '../SearchInput'

function Navbar() {
  return (
    <header>
      <HelloBar />
      <BlueBar />
      <div className="flex flex-col sm:flex-row justify-between items-center bg-primary-400">
        <Navlinks />
        <SearchInput />
        <CartToggle />
      </div>
    </header>
  )
}

export default Navbar