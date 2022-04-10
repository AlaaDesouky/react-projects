import Wrapper from '../assets/wrappers/Landing'
import img from '../assets/images/landing.svg'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const Landing = () => {
  return (
    <Wrapper>
      <div className="page">
        <div className="content">
          <h1>
            <span>Various</span> ReactJS projects
          </h1>
          <p>
            A playground to showcase multiple ReactJS projects with different functionality and features applied. Either personal or based on projects made by various authors;
          </p>
          <button className="btn cta-btn" type='button'>
            <FaLongArrowAltLeft /> Take a tour
          </button>
        </div>
        <img src={img} alt="landing" className='img main-img' />
      </div>
    </Wrapper>
  )
}



export default Landing
