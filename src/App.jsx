import React from 'react'

//import components
import HomeModal from './components/HomeModal'
import TabMenu from './components/TabMenu'
import Home from './components/Home'
import Mempelai from './components/Mempelai'
import TimeDate from './components/TimeDate'
import Galeri from './components/Galeri'
import Doa from './components/Doa'
import Ucapan from './components/Ucapan'

class App extends React.Component {
  render() {
    return (
      <>
        <HomeModal />
        <TabMenu />
        <Home />
        <Mempelai />
        <TimeDate />
        <Galeri />
        <Doa />
        <Ucapan />
      </>
    )
  }
}

export default App
