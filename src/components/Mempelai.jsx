import React from 'react'
import BrideImg2 from '../assets/images/bride-img2.png'
import BismillahImg from '../assets/images/bismillah.png'

class Mempelai extends React.Component {
  render() {
    return (
      <div className='mempelai-section' id='mempelai'>
        <div className='vstack align-items-center text-center gap-3'>
          <img src={BismillahImg} className='img-fluid' alt='' />
          <h1 className='font-parisienne fw-bold text-primary'>
            Assalamu'alaikum Wr. Wb.
          </h1>
          <p className='col-8'>
            Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
            serta kerabat sekalian untuk menghadiri acara pernikahan kami:
          </p>
          <div className='col-8 col-md-4'>
            <img src={BrideImg2} className='img-fluid' alt='' />
          </div>
          <div>
            <p className='font-parisienne fw-bold text-primary fs-1'>Taki</p>
            <p className=''>Putra dari Bapak Taka & ibu Tiki</p>
            <p className='font-parisienne fw-bold text-primary fs-1'>&</p>
            <p className='font-parisienne fw-bold text-primary fs-1'>Mitsuha</p>
            <p className=''>Putra dari Bapak Mitshu & ibu wa</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Mempelai
