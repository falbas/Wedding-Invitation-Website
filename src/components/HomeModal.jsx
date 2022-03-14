import React from 'react'
import { Modal } from 'react-bootstrap'
import ModalImg from '../assets/images/modal-img.png'

class HomeModal extends React.Component {
  state = {
    show: true,
  }

  render() {
    return (
      <>
        <Modal
          show={this.state.show}
          fullscreen={true}
          onHide={() => this.setState({ show: false })}
        >
          <div className='modal-section'>
            <div className='vstack align-items-center text-center text-secondary'>
              <div className='col-12'>
                <img
                  src={ModalImg}
                  className='img-fluid mt-5'
                  style={{ width: '300px' }}
                  alt=''
                />
              </div>
              <h1 className='text-primary font-parisienne fw-bold'>
                Taki & Mitsuha
              </h1>
              <p>Kepada Bapak/Ibu/Saudara/i</p>
              <h2>Nama Saudara</h2>
              <p>Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.</p>
              <button
                type='button'
                className='btn btn-primary btn-sm rounded-pill mt-3'
                onClick={() => this.setState({ show: false })}
              >
                <i className='bi bi-book mx-1'></i> Buka Undangan
              </button>
            </div>
          </div>
        </Modal>
      </>
    )
  }
}

export default HomeModal
