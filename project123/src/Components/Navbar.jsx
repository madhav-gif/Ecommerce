import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-orange-600 text-white shadow-md">

      {/* Logo */}
      <h1 className="text-2xl font-bold">Sigma</h1>

      {/* Menu */}
      <ul className="flex gap-6 text-lg">
        <li><a className="hover:text-gray-200" href="#">Bubu</a></li>
        <li><a className="hover:text-gray-200" href="#">Dudu</a></li>
        <li><a className="hover:text-gray-200" href="#">Motu</a></li>
        <li><a className="hover:text-gray-200" href="#">Patlu</a></li>
      </ul>

    </nav>
  )
}

export default Navbar
