import React from 'react'
import { Modal } from 'react-bootstrap'

class Kredit extends React.Component {
  state = {
    show: false,
  }

  render() {
    return (
      <div className='text-end fixed-bottom'>
        <button
          type='button'
          className='btn btn-light bg-transparent shadow-none border-0'
          onClick={() => this.setState({ show: true })}
        >
          <i className='bi bi-info-circle fs-3 text-primary'></i>
        </button>
        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>Credit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Design by{' '}
              <a className='link-primary' href='http://www.freepik.com'>
                BiZkettE1 / Freepik
              </a>
            </p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Kredit
