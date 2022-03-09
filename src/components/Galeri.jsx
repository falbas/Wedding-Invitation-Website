import React from 'react'
import Galeri1 from '../assets/images/galeri/galeri1.png'
import Galeri2 from '../assets/images/galeri/galeri2.png'
import Galeri3 from '../assets/images/galeri/galeri3.png'
import ScrollContainer from 'react-indiana-drag-scroll'

class Galeri extends React.Component {
  constructor() {
    super()
    this.container = React.createRef()
  }

  componentDidMount() {
    this.container.current.getElement().scrollTo(0, Math.random() * 5000)
  }

  render() {
    return (
      <div className='galeri-section'>
        <div className='col-12 col-md-10'>
          <div
            id='galeriCarousel'
            className='carousel slide'
            data-bs-ride='carousel'
          >
            <div>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <img src={Galeri1} alt='Galeri1' />
                </div>
                <div className='carousel-item'>
                  <img src={Galeri2} alt='Galeri2' />
                </div>
                <div className='carousel-item'>
                  <img src={Galeri3} alt='Galeri3' />
                </div>
                <div className='carousel-item'>
                  <img src={Galeri1} alt='Galeri1' />
                </div>
                <div className='carousel-item'>
                  <img src={Galeri2} alt='Galeri2' />
                </div>
                <div className='carousel-item'>
                  <img src={Galeri3} alt='Galeri3' />
                </div>
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#galeriCarousel'
              data-bs-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#galeriCarousel'
              data-bs-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
          <div className='w-100'></div>
          <ScrollContainer className='galeri-button' ref={this.container}>
            <button
              type='button'
              data-bs-target='#galeriCarousel'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
              style={{ backgroundImage: `url(${Galeri1})` }}
            ></button>
            <button
              type='button'
              data-bs-target='#galeriCarousel'
              data-bs-slide-to='1'
              aria-label='Slide 2'
              style={{ backgroundImage: `url(${Galeri2})` }}
            ></button>
            <button
              type='button'
              data-bs-target='#galeriCarousel'
              data-bs-slide-to='2'
              aria-label='Slide 3'
              style={{ backgroundImage: `url(${Galeri3})` }}
            ></button>
            <button
              type='button'
              data-bs-target='#galeriCarousel'
              data-bs-slide-to='3'
              aria-label='Slide 4'
              style={{ backgroundImage: `url(${Galeri1})` }}
            ></button>
            <button
              type='button'
              data-bs-target='#galeriCarousel'
              data-bs-slide-to='4'
              aria-label='Slide 5'
              style={{ backgroundImage: `url(${Galeri2})` }}
            ></button>
            <button
              type='button'
              data-bs-target='#galeriCarousel'
              data-bs-slide-to='5'
              aria-label='Slide 6'
              style={{ backgroundImage: `url(${Galeri3})` }}
            ></button>
          </ScrollContainer>
        </div>
      </div>
    )
  }
}

export default Galeri
