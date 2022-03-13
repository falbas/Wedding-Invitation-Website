import React from 'react'
import BrideImg3 from '../assets/images/bride-img3.png'

class Penutup extends React.Component {
  render() {
    return (
      <div className='penutup-section'>
        <div className='w-75 text-center'>
          <img src={BrideImg3} className='img-fluid m-3' alt='Bride Home' />
        </div>
        <div className='col-12 col-md-8 mb-3'>
          <p className='normalFont text-center'>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
            <br />
            Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
          </p>
        </div>
        <p className='semiHead2'>Wassalamu'alaikum Wr. Wb.</p>
        <p className='normalFont text-center'>Jazakumullahu Khairan</p>
        <p className='semiHead2'>Taki & Mitsuha</p>
      </div>
    )
  }
}

export default Penutup
