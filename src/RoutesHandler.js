import { Routes, Route } from 'react-router-dom'
import { Projects } from './projects'
import ProjectsList from './ProjectsList'

const RoutesHandler = () => {
  const projectList = Object.keys(Projects)

  return (
    <Routes>
      <Route path='/' element={<ProjectsList />} />

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
