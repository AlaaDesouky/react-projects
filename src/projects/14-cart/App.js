import React from 'react'
import { AppProvider } from './context'
import Main from './Main'


import Wrapper from './AppWrapper'

function App() {

  return (
    <AppProvider>
      <Wrapper>
        <Main />
      </Wrapper>
    </AppProvider>
  )
}

export default App
