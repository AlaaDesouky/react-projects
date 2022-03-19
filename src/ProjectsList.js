import { Link } from "react-router-dom"
import { Projects } from './projects'


const ProjectsList = () => {
  const projectList = Object.keys(Projects)

  return (
    <div className="container">
      <ul>
        {projectList.map((project, index) => {
          return (
            <li key={index}>
              <Link to={`/projects/${project}`}>{project}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProjectsList
