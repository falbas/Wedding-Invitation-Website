import React from 'react'
import { Modal } from 'react-bootstrap'

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
                  src={this.props.data.coverImage}
                  className='img-fluid mt-5'
                  style={{ width: '300px' }}
                  alt=''
                />
              </div>
              <h1 className='text-primary font-parisienne fw-bold'>
                {`${this.props.data.manFirstName} & ${this.props.data.womanFirstName}`}
              </h1>
              <p>Kepada Bapak/Ibu/Saudara/i</p>
              <h2>{this.props.invGuest && this.props.invGuest.nama}</h2>
              <p>Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.</p>

              <button
                type='button'
                className='btn btn-primary btn-sm rounded-pill mt-3'
                onClick={() => this.setState({ show: false })}
              >
                <i className='bi bi-book mx-1'></i> Buka Undangan
              </button>
              <div className='w-100 fixed-bottom text-end opacity-50 px-md-3'>
                <a href='http://www.freepik.com' className='link-primary'>
                  Designed by BiZkettE1 / Freepik
                </a>
              </div>
            </div>
          </div>
        </Modal>
      </>
    )
  }
}

export default HomeModal
