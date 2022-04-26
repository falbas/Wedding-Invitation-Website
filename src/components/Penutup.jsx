import React from 'react'

class Penutup extends React.Component {
  render() {
    return (
      <div className={`penutup-section ${this.props.className}`}>
        <div className='text-center mb-3'>
          <img
            src={this.props.data.brideImage1}
            className='img-fluid px-5'
            alt='Bride Home'
          />
        </div>
        <p className='px-md-7 text-center mb-3'>
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>
        <p className='text-center mb-3'>
          Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
        </p>
        <p className='font-parisienne text-primary fw-bold fs-1 text-center mb-3'>
          Wassalamu'alaikum Wr. Wb.
        </p>
        <p className='text-center mb-3'>Jazakumullahu Khairan</p>
        <p className='font-parisienne text-primary fw-bold fs-1 text-center mb-3'>
          {`${this.props.data.manFirstName} & ${this.props.data.womanFirstName}`}
        </p>
      </div>
    )
  }
}

export default Penutup
