import Wrapper from '../assets/wrappers/SharedLayout'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <h4>layout</h4>
      </main>
      <div>
        <Navbar />
        <div className="dashboard-page">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  )
}

export default SharedLayout
