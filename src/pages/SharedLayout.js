import Wrapper from '../assets/wrappers/SharedLayout'
import { Outlet } from 'react-router-dom'
import { Navbar, SmallSidebar } from '../components'
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
      </main>
      <div>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="dashboard-page">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  )
}

export default SharedLayout
