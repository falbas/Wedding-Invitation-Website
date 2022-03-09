import React from 'react'

//import components
import HomeModal from './components/HomeModal'
import TabMenu from './components/TabMenu'
import Home from './components/Home'
import Mempelai from './components/Mempelai'
class App extends React.Component {
  render() {
    return (
      <>
        <HomeModal />
        <TabMenu />
        <Home />
        <Mempelai />
      </>
    )
  }
}

export default App
