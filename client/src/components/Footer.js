import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='text-light'>
      <footer className="py-4 bg-dark">
    <ul className="nav justify-content-center border-top border-bottom pt-3 pb-3 mb-3">
      <li className="nav-item"><Link href="/" className="nav-link px-2 text-light">Home</Link></li>
      <li className="nav-item"><Link href="/" className="nav-link px-2 text-light">Features</Link></li>
      <li className="nav-item"><Link href="/" className="nav-link px-2 text-light">Pricing</Link></li>
      <li className="nav-item"><Link href="/" className="nav-link px-2 text-light">FAQs</Link></li>
      <li className="nav-item"><Link href="/" className="nav-link px-2 text-light">About</Link></li>
    </ul>
    <p className="text-center text-light">© 2022 GoFood, Inc</p>
  </footer>
    </div>
  )
}
