import React from 'react'
import Jadwal from '../assets/images/jadwal.png'

class TimeDate extends React.Component {
  render() {
    return (
      <div className='jadwal-section' id='tanggal'>
        <div className='vstack align-items-center text-center gap-3'>
          <div className='col-8 col-md-6'>
            <img src={Jadwal} className='img-fluid' alt='' />
          </div>
          <div className='col-11 col-md-6 shadow rounded p-3'>
            <div className='vstack align-items-center'>
              <h1 className='font-parisienne fw-bold text-primary'>
                Akad Nikah
              </h1>
              <h3 className='fw-bold fst-italic'>Minggu, 05 May 2022</h3>
              <p className='fst-italic'>Pukul 08.00 WIB s/d selesai</p>
              <p className='fst-italic'>
                Alamat: <b>GOR Olahraga Sunter</b>
              </p>
              <p className='fst-italic mt-3'>
                Jl. Taman Tirta Sunter 1 No.9, RT.8/RW.14, Sunter Jaya, Kec. Tj.
                Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14360
              </p>
            </div>
          </div>
          <div className='col-11 col-md-6 shadow rounded p-3'>
            <div className='vstack align-items-center'>
              <h1 className='font-parisienne fw-bold text-primary'>Resepsi</h1>
              <h3 className='fw-bold fst-italic'>Minggu, 05 May 2022</h3>
              <p className='fst-italic'>Pukul 08.00 WIB s/d selesai</p>
              <p className='fst-italic'>
                Alamat: <b>GOR Olahraga Sunter</b>
              </p>
              <p className='fst-italic mt-3'>
                Jl. Taman Tirta Sunter 1 No.9, RT.8/RW.14, Sunter Jaya, Kec. Tj.
                Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14360
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TimeDate
