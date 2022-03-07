import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//import pages
import HomeModal from './components/HomeModal'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeModal />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
