import React from 'react'

class Ucapan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ucapan: props.data.invitations,
    }
  }

  render() {
    return (
      <div className='ucapan-section' id='ucapan'>
        <div className='vstack align-items-center'>
          <h1 className='font-parisienne fw-bold text-primary'>
            Ucapkan Sesuatu
          </h1>
          <p className='mb-3'>Berikan Ucapan & Doa Restu</p>
          <div className='col-11 col-md-8'>
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
              <select className='form-select form-select-sm'>
                <option defaultValue>Konfirmasi Kehadiran</option>
                <option value='1'>Hadir</option>
                <option value='2'>Akan Hadir</option>
                <option value='2'>Tidak Hadir</option>
              </select>
            </div>
            <div className='mb-5'>
              <button className='btn btn-primary2 btn-sm' type='button'>
                Kirim Ucapan
              </button>
            </div>
            <div className='mb-3 overflow-auto' style={{ height: '250px' }}>
              {this.state.ucapan.map((ucapan, index) => (
                <div key={index} className='border-bottom mb-1'>
                  <small>
                    <b>{ucapan.nama}</b>
                  </small>
                  <br />
                  <small>{ucapan.pesan}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Ucapan
