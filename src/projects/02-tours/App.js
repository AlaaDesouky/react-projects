import React, { useState, useEffect } from 'react'
import Wrapper from './AppWrapper'

import Loading from './Loading'
import Tours from './Tours'
import NoTours from './NoTours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setIsLoading(false)
      setTours(tours)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }

  }

  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const displayTours = tours.length === 0 ? <NoTours fetchTours={fetchTours} /> : <Tours tours={tours} removeTour={removeTour} />

  return (
    <Wrapper>
      <main>
        {isLoading ? <Loading /> : displayTours}
      </main>
    </Wrapper>
  )
}

export default App
