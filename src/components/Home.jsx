import React from 'react'
import '../App.css'
import BrideHome from '../assets/images/bride-img.png'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      date: 'May 5, 2022 15:37:25',
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    }
  }

  componentDidMount() {
    var countDownDate = new Date(this.state.date).getTime()
    this.timerID = setInterval(() => {
      var now = new Date().getTime()
      var distance = countDownDate - now
      var days = Math.floor(distance / (1000 * 60 * 60 * 24))
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)
      this.setState({
        day: days,
        hour: hours,
        minute: minutes,
        second: seconds,
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div className='home-section'>
        <div className='d-flex flex-column align-items-center mb-4'>
          <b className="semiHead h1">THE WEDDING OF</b>
          <div className='w-75 text-center p-md-5'>
            <img src={BrideHome} className='img-fluid' alt='Bride Home' />
          </div>
          <p className='fontName2'>Taki & Mitsuha</p>
          <p className='text-center'>
            Kami berharap Anda menjadi bagian dari hari istimewa kami!
          </p>
          <div className='text-center'>
            <div className='row'>
              <div className='col'>
                <div className='row timer g-0'>
                  <div className='col-12 fs-3'>{this.state.day}</div>
                  <div className='col-12'>Hari</div>
                </div>
              </div>
              <div className='col'>
                <div className='row timer g-0'>
                  <div className='col-12 fs-3'>{this.state.hour}</div>
                  <div className='col-12'>Jam</div>
                </div>
              </div>
              <div className='col'>
                <div className='row timer g-0'>
                  <div className='col-12 fs-3'>{this.state.minute}</div>
                  <div className='col-12'>Menit</div>
                </div>
              </div>
              <div className='col'>
                <div className='row timer g-0'>
                  <div className='col-12 fs-3'>{this.state.second}</div>
                  <div className='col-12'>Detik</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mid-section">
          <div className="d-flex flex-column align-items-center mb-4">
            <img src="https://wekita.id/wp-content/uploads//2021/07/bismillah.svg" alt="bismillahIcon" />
            <p className="fontName2">Assalamu'alaikum Wr. Wb.</p>
            <div className="w-50">
            <p className="normalFont text-break text-justify text-center">Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami : </p>
            </div>
            <div className="mt-4 mb-4">
              <img src={BrideHome} className='img-fluid' alt='Bride Home' />
            </div>
            <span className='fontName2'>Taki</span>
            <span className="normalFont2">Putra dari Bapak Taka & ibu Tiki</span>
            <br />
            <span className='fontName2'>&</span>
            <span className='fontName2'>Mitsuha</span>
            <p className="normalFont2">Putra dari Bapak Mitshu & ibu wa</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
