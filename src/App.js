import { Link } from 'react-router-dom'
import RoutesHandler from './RoutesHandler';

function App() {
  return (
    <div className='container'>
      {/* <Link to='/'><h3>Project List</h3></Link> */}
      <RoutesHandler />
    </div>
  );
}

export default App;
