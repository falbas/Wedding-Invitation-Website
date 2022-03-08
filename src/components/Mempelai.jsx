import React from 'react'
import BrideImg2 from '../assets/images/bride-img2.png'
import BismillahImg from '../assets/images/bismillah.png'

class Mempelai extends React.Component {
  render() {
    return (
      <div className='mid-section'>
        <div className='d-flex flex-column align-items-center mb-4'>
          <img src={BismillahImg} alt='bismillahIcon' />
          <p className='semiHead2 mt-3'>Assalamu'alaikum Wr. Wb.</p>
          <div className='col-md-8'>
            <p className='normalFont text-center'>
              Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
              serta kerabat sekalian untuk menghadiri acara pernikahan kami:
            </p>
          </div>
          <div className='col-7 col-md-4 text-center p-md-5'>
            <img src={BrideImg2} className='img-fluid' alt='Bride Home' />
          </div>
          <div className='fontName2'>Taki</div>
          <div className='normalFont'>Putra dari Bapak Taka & ibu Tiki</div>
          <div className='fontName2'>&</div>
          <div className='fontName2'>Mitsuha</div>
          <div className='normalFont'>Putra dari Bapak Mitshu & ibu wa</div>
        </div>
      </div>
    )
  }
}

export default Mempelai
