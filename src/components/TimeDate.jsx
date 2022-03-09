import React from 'react'
import saveDate from '../assets/images/saveDate.png'

class TimeDate extends React.Component {
  render() {
    return (
      <div className='jadwal-section'>
        <img
          src={saveDate}
          alt='saveDate'
          className='img-fluid'
          style={{ width: '400px' }}
        />
        <div className='my-4 col-11 col-md-6 bg-white shadow rounded'>
          <div className='d-flex flex-column align-items-center mt-2'>
            <p className='semiHead2'>Akad Nikah</p>
            <p className='semiHead3'>Minggu, 05 May 2022</p>
            <div className='text-center mx-2 text-justify'>
              <span className='normalFont'>
                <i>Pukul 08.00 WIB s/d selesai</i>
              </span>
              <br />
              <span className='normalFont'>
                <i>
                  Alamat: <b>GOR Olahraga Sunter</b>
                </i>
              </span>
              <br /> <br />
              <p className='normalFont text-justify word-break text-center'>
                <i>
                  Jl. Taman Tirta Sunter 1 No.9, RT.8/RW.14, Sunter Jaya, Kec.
                  Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14360
                </i>
              </p>
            </div>
          </div>
        </div>
        <div className='my-4 col-11 col-md-6 bg-white shadow rounded'>
          <div className='d-flex flex-column align-items-center mt-2'>
            <p className='semiHead2'>Resepsi</p>
            <p className='semiHead3'>Minggu, 05 May 2022</p>
            <div className='text-center mx-2 text-justify'>
              <span className='normalFont'>
                <i>Pukul 08.00 WIB s/d selesai</i>
              </span>
              <br />
              <span className='normalFont'>
                <i>
                  Alamat: <b>GOR Olahraga Sunter</b>
                </i>
              </span>
              <br /> <br />
              <p className='normalFont text-justify word-break text-center'>
                <i>
                  Jl. Taman Tirta Sunter 1 No.9, RT.8/RW.14, Sunter Jaya, Kec.
                  Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14360
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TimeDate
