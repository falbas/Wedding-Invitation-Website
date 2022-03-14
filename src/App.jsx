import React from 'react'
import { getData } from './data'

//import components
import HomeModal from './components/HomeModal'
import TabMenu from './components/TabMenu'
import Home from './components/Home'
import Mempelai from './components/Mempelai'
import TimeDate from './components/TimeDate'
import Galeri from './components/Galeri'
import Doa from './components/Doa'
import Ucapan from './components/Ucapan'
import Penutup from './components/Penutup'

class App extends React.Component {
  render() {
    return (
      <>
        <HomeModal data={getData()} />
        <TabMenu />
        <Home data={getData()} />
        <Mempelai data={getData()} />
        <TimeDate data={getData()} />
        <Galeri data={getData()} />
        <Doa />
        <Ucapan data={getData()} />
        <Penutup data={getData()} />
      </>
    )
  }
}

export default App
