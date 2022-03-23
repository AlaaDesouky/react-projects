import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className='logo' />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <Link to={url}>
                {icon}
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
