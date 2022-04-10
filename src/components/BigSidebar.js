import Wrapper from '../assets/wrappers/BigSidebar'
import { NavLinks, Logo } from '.'
const BigSidebar = ({ showSidebar }) => {
  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
        <div className="content">
          <header>
            <h3 className="logo-text">Projects list</h3>
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
