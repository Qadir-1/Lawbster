import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import SecondScreen from './Screens/SecondScreen'
import ThirdScreen from './Screens/ThirdScreen'

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/second' element={<SecondScreen /> } />
        <Route path='/third' element={<ThirdScreen />} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App