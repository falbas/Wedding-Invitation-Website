import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

class Galeri extends React.Component {
  constructor() {
    super()
    this.container = React.createRef()
    this.state = {
      galeri: [
        'https://diazpermana.files.wordpress.com/2016/12/thumb-1920-731745.png',
        'https://assets.pikiran-rakyat.com/crop/70x46:630x418/x/photo/2021/12/17/29280060.jpg',
        'https://ilmupedia.co.id/uploads/article/media_upload/21359/kimi_no_nawa_cover_cr.jpeg',
        'https://p4.wallpaperbetter.com/wallpaper/94/797/206/kimi-no-na-wa-comet-makoto-shinkai-starry-night-wallpaper-preview.jpg',
        'https://nawalakarsa.id/wp-content/uploads/2019/07/kimino-750x422.jpeg',
        'https://obs.line-scdn.net/0haxy9ww33PldEQCjB3udBAHwWMiZ3JiReZiEkOWATYjNvbH1TeCVtNGYTaHs6IilVZHVzODIXYDVvdX8Heg/w644',
      ],
    }
  }

  componentDidMount() {
    this.container.current.getElement().scrollTo(0, Math.random() * 5000)
  }

  render() {
    return (
      <div className='galeri-section' id='galeri'>
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
