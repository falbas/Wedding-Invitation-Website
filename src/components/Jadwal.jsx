import React from 'react'
import Jadwal from '../assets/images/jadwal.png'

class TimeDate extends React.Component {
  render() {
    return (
      <div className={`jadwal-section ${this.props.className}`} id='tanggal'>
        <div className='vstack align-items-center text-center gap-3'>
          <div className='col-8 col-md-6'>
            <img src={Jadwal} className='img-fluid' alt='' />
          </div>
          <div className='col-11 col-md-6 shadow rounded p-3'>
            <div className='vstack align-items-center'>
              <h1 className='font-parisienne fw-bold text-primary'>
                Akad Nikah
              </h1>
              <h3 className='fw-bold fst-italic'>{this.props.data.akadDate}</h3>
              <p className='fst-italic'>
                Pukul {this.props.data.akadTime} WIB s/d selesai
              </p>
              <p className='fst-italic'>
                Alamat: <b>{this.props.data.akadPlace}</b>
              </p>
              <p className='fst-italic mt-3'>{this.props.data.akadAddress}</p>
            </div>
          </div>
          <div className='col-11 col-md-6 shadow rounded p-3'>
            <div className='vstack align-items-center'>
              <h1 className='font-parisienne fw-bold text-primary'>Resepsi</h1>
              <h3 className='fw-bold fst-italic'>
                {this.props.data.resepsiDate}
              </h3>
              <p className='fst-italic'>
                Pukul {this.props.data.resepsiTime} WIB s/d selesai
              </p>
              <p className='fst-italic'>
                Alamat: <b>{this.props.data.resepsiPlace}</b>
              </p>
              <p className='fst-italic mt-3'>
                {this.props.data.resepsiAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TimeDate
