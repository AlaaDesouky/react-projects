import Wrapper from '../assets/wrappers/SharedLayout'
import { Outlet } from 'react-router-dom'
import { Navbar, SmallSidebar, BigSidebar } from '../components'
import { useState } from 'react'

const SharedLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <BigSidebar showSidebar={showSidebar} />
        <div>
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout
