import React from 'react'
import BismillahImg from '../assets/images/bismillah.png'

class Mempelai extends React.Component {
  render() {
    return (
      <div className={`mempelai-section ${this.props.className}`} id='mempelai'>
        <div className='text-center'>
          <img src={BismillahImg} className='img-fluid' alt='' />
        </div>
        <h1 className='font-parisienne fw-bold text-primary text-center mb-3'>
          Assalamu'alaikum Wr. Wb.
        </h1>
        <p className='px-md-7 text-center mb-3'>
          Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
          serta kerabat sekalian untuk menghadiri acara pernikahan kami:
        </p>
        <div className='text-center mb-3'>
          <img
            src={this.props.data.brideImage2}
            className='img-fluid px-5'
            alt=''
          />
        </div>
        <p className='font-parisienne fw-bold text-primary fs-1 text-center'>
          {this.props.data.manFullName}
        </p>
        <p className='text-center'>
          Putra dari Bapak {this.props.data.manFatherName} & Ibu{' '}
          {this.props.data.manMotherName}
        </p>
        <p className='font-parisienne fw-bold text-primary fs-1 text-center'>
          &
        </p>
        <p className='font-parisienne fw-bold text-primary fs-1 text-center'>
          {this.props.data.womanFullName}
        </p>
        <p className='text-center'>
          Putra dari Bapak {this.props.data.womanFatherName} & Ibu{' '}
          {this.props.data.womanMotherName}
        </p>
      </div>
    )
  }
}

export default Mempelai
