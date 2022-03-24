import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import Wrapper from './AppWrapper'
import { AppProvider } from './context'

function App() {
  return (
    <AppProvider>
      <Wrapper>
        <Navbar />
        <Hero />
        <Sidebar />
        <Submenu />
      </Wrapper>
    </AppProvider>
  )
}

export default App
