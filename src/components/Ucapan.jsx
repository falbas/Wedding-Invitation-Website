import React from 'react'

class Ucapan extends React.Component {
  constructor() {
    super()
    this.state = {
      ucapan: [
        {
          id: 1,
          user: 'Nopal',
          openundangan: true,
          konfirmasikehadiran: '',
          pesan:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          id: 2,
          user: 'Aspar',
          openundangan: true,
          konfirmasikehadiran: '',
          pesan: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        },
        {
          id: 3,
          user: 'Rafif',
          openundangan: true,
          konfirmasikehadiran: '',
          pesan: 'Lorem ipsum',
        },
      ],
    }
  }

  render() {
    return (
      <div className='ucapan-section'>
        <p className='semiHead2'>Ucapkan Sesuatu</p>
        <p className='semiHead3'>Berikan Ucapan & Doa Restu</p>
        <div className='col-12 col-md-8'>
          <div className='mb-3'>
            <input type='email' className='form-control' placeholder='Nama' />
          </div>
          <div className='mb-3'>
            <textarea
              className='form-control'
              rows='3'
              placeholder='Ucapan'
            ></textarea>
          </div>
          <div className='dropdown mb-3'>
            <select class='form-select form-select-sm'>
              <option selected>Konfirmasi Kehadiran</option>
              <option value='1'>Hadir</option>
              <option value='2'>Akan Hadir</option>
              <option value='2'>Tidak Hadir</option>
            </select>
          </div>
          <div className='mb-3'>
            <button className='btn btn-primary2 btn-sm' type='button'>
              Kirim Ucapan
            </button>
          </div>
          <div className='mb-3 ucapan'>
            {this.state.ucapan.map((ucapan, index) => (
              <div key={index} className='border-bottom mb-1'>
                <small className='text-secondary'>
                  <b>{ucapan.user}</b>
                </small>
                <br />
                <small>{ucapan.pesan}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Ucapan
