import { FaCode } from 'react-icons/fa'
import { Projects } from '../projects'
import { NavLink } from 'react-router-dom'

const NavLinks = ({ toggleSidebar }) => {
  const projectsList = Object.keys(Projects)
  return (
    <div className="nav-links">
      {projectsList.map((project, index) => {
        return (
          <NavLink
            to={`/projects/${project}`}
            key={index}
            onClick={toggleSidebar}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <span className='icon'><FaCode /></span>
            {project}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
