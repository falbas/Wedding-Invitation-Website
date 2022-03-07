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
          <div className='modalBackground'>
            <div className='row text-center'>
              <div className='col-12'>
                <img src={ModalImg} alt='profileWedding' />
                <p className='fontName'>Taki & Mitsuha</p>
              </div>
              <div className='col-12'>
                <span className='normalFont'>Kepada Bapak/Ibu/Saudara/i</span>
                <br />
                <b className='semiHead'>Nama Saudara</b>
                <p className='normalFont p-2'>
                  Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.
                </p>
                <button
                  className='btn btn-primary btn-sm'
                  type='button'
                  onClick={() => this.setState({ show: false })}
                >
                  <i className='bi bi-book mx-1'></i> Buka Undangan
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </>
    )
  }
}

export default HomeModal
