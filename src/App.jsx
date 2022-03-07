import React from 'react'

//import components
import HomeModal from './components/HomeModal'
import Home from './components/Home'

class App extends React.Component {
  render() {
    return (
      <>
        <HomeModal />
        <Home />
      </>
    )
  }
}

export default App
