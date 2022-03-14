import React from 'react'
import BrideImg3 from '../assets/images/bride-img3.png'

class Penutup extends React.Component {
  render() {
    return (
      <div className='penutup-section'>
        <div className='vstack align-items-center text-center gap-3'>
          <div className='col-8 col-md-6'>
            <img src={BrideImg3} className='img-fluid m-3' alt='Bride Home' />
          </div>
          <div className='col-11 col-md-8'>
            <p className=''>
              Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
              Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
              <br />
              Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
            </p>
          </div>
          <p className='font-parisienne text-primary fw-bold fs-1'>
            Wassalamu'alaikum Wr. Wb.
          </p>
          <p className=''>Jazakumullahu Khairan</p>
          <p className='font-parisienne text-primary fw-bold fs-1'>
            Taki & Mitsuha
          </p>
        </div>
      </div>
    )
  }
}

export default Penutup