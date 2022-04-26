import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

class Galeri extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
    this.state = {
      galeri: props.data.galleries,
    }
  }

  componentDidMount() {
    this.container.current.getElement().scrollTo(0, Math.random() * 5000)
  }

  render() {
    return (
      <div className={`bg-dark ${this.props.className}`} id='galeri'>
        <div className='vstack'>
          <div
            id='galeriCarousel'
            className='carousel slide'
            data-bs-ride='carousel'
          >
            <div>
              <div className='carousel-inner'>
                {this.state.galeri.map((galeri, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index ? '' : 'active'}`}
                  >
                    <img src={galeri} alt='' />
                  </div>
                ))}
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
          <ScrollContainer className='galeri-button' ref={this.container}>
            {this.state.galeri.map((galeri, index) => (
              <button
                key={index}
                type='button'
                data-bs-target='#galeriCarousel'
                data-bs-slide-to={index}
                aria-label={`Slide ${index + 1}`}
                style={{
                  backgroundImage: `url(${galeri})`,
                }}
              ></button>
            ))}
          </ScrollContainer>
        </div>
      </div>
    )
  }
}

export default Galeri
