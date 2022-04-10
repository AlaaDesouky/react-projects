import { Routes, Route } from 'react-router-dom'
import { Projects } from './projects'
import ProjectsList from './ProjectsList'
import SharedLayout from './pages/SharedLayout'

const RoutesHandler = () => {
  const projectList = Object.keys(Projects)

  return (
    <Routes>
      <Route path='/' element={<ProjectsList />} />
      <Route path='/shared' element={<SharedLayout />} />
      {projectList.map((project, index) => {
        return (
          <Route path={`/projects/${project}`} element={Projects[project]()} key={index} />
        )
      })}

      <Route path='*' element={<ProjectsList />} />
    </Routes>
  )
}

export default RoutesHandler
