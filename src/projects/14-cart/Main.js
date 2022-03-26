import { useGlobalContext } from './context'
// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

const Main = () => {
  const { isLoading } = useGlobalContext()
  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default Main
