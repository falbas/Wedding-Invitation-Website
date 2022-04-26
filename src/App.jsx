import React from 'react'
import { useParams } from 'react-router-dom'
import { getData, getGuest } from './data'

//import components
import HomeModal from './components/HomeModal'
import TabMenu from './components/TabMenu'
import Home from './components/Home'
import Mempelai from './components/Mempelai'
import Jadwal from './components/Jadwal'
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
      <TabMenu />
      <Home data={getData()} className='pt-7' />
      <Mempelai data={getData()} className='py-7' />
      <Jadwal data={getData()} className='py-7' />
      <Galeri data={getData()} className='py-5' />
      <Doa className='py-7' />
      <Ucapan data={getData()} className='py-7' />
      <Penutup data={getData()} />
    </>
  )
}

export default App
