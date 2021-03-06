import Wrapper from '../assets/wrappers/Navbar'
import { useState } from 'react'
import { FaAlignLeft, FaExternalLinkAlt, FaInfo, FaCaretDown, FaGithub } from 'react-icons/fa'
import Logo from './Logo'

const Navbar = ({ toggleSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" type='button' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
        </div>
        <div className="btn-container">
          <button className='btn' type='button' onClick={() => setShowDropdown(!showDropdown)}>
            <FaInfo /> Contact me <FaCaretDown />
          </button>
          <div className={showDropdown ? 'dropdown show-dropdown' : 'dropdown'}>
            <button className="dropdown-btn">
              <a target='_blank' rel='noreferrer' className=" dropdown-btn" href='https://www.adesouky.me/'>
                <FaExternalLinkAlt /> Portfolio
              </a>
            </button>
            <button className="dropdown-btn">
              <a href="https://github.com/AlaaDesouky" target='_blank' rel='noreferrer' className=" dropdown-btn">
                <FaGithub /> Github
              </a>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
