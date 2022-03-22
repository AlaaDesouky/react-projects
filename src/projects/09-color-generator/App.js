import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
import Wrapper from './AppWrapper'

function App() {
  const [color, setColor] = useState('')
  const [isError, setIsError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setIsError(true)
      setColor('')
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsError(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [isError])

  return (
    <Wrapper>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          {isError && <p className='error'>Please enter a valid color</p>}
          <input type="text" name={color} value={color} onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${isError && 'error'}`}
            autoFocus={true}
          />
          <button className='btn' type='submit'>submit</button>
        </form>
      </section>
      <section className="colors">
        {list.length > 0 && list.map((color, index) => {
          let fontColor = list[(list.length - 1) - index].rgb

          return <SingleColor key={index} {...color} hexColor={color.hex} fontColor={fontColor.join(',')} />
        })}
      </section>
    </Wrapper>
  )
}

export default App
