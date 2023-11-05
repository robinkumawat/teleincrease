import React from 'react'
import './header.css'
function Header() {
  return (
    <header>
        <div className="logo">
            <a href=""> <img src="/src/assets/pr.png" alt="" /></a>
           
        </div>
        <ul>
            <li>Sign in </li>
            <li>Sign up</li>
            <li>Blog</li>

        </ul>
    </header>
  )
}

export default Header