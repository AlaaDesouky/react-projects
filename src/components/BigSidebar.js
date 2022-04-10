import Wrapper from '../assets/wrappers/BigSidebar'
import NavLinks from './NavLinks'
const BigSidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
        <div className="content">
          <header>
            <h3 className="logo-text">Projects list</h3>
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
