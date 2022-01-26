import React from 'react'
import Login from 'src/components/auth/Login'
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
      <header className="flex flex-col sm:flex-row justify-between items-center bg-whitesmoke">        
      <Navlinks />
      <SearchInput />
      <Login />
      <CartToggle />
      </header>

    </header>
  )
}

export default Navbar