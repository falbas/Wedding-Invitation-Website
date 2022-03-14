import React from 'react'
import { useParams } from 'react-router-dom'
import { getData, getGuest } from './data'

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

function App() {
  let params = useParams()
  let invGuest = getGuest(params.guest)

  return (
    <>
      <HomeModal data={getData()} invGuest={invGuest} />
      {invGuest ? (
        <>
          <TabMenu />
          <Home data={getData()} />
          <Mempelai data={getData()} />
          <TimeDate data={getData()} />
          <Galeri data={getData()} />
          <Doa />
          <Ucapan data={getData()} invGuest={invGuest} />
          <Penutup data={getData()} />
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default App
