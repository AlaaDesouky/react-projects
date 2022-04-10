import { Routes, Route } from 'react-router-dom'
import { Projects } from './projects'
import SharedLayout from './pages/SharedLayout'
import Error from './pages/Error'
import Landing from './pages/Landing'

const RoutesHandler = () => {
  const projectList = Object.keys(Projects)

  return (
    <Routes>
      <Route
        path='/'
        element={<SharedLayout />}
      >
        <Route index element={<Landing />} />
        {projectList.map((project, index) => {
          return (
            <Route path={`/projects/${project}`} element={Projects[project]()} key={index} />
          )
        })}
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default RoutesHandler
