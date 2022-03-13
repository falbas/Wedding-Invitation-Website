import React from 'react'
import '../App.css'
import BrideImg1 from '../assets/images/bride-img1.png'

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
      <div className='home-section' id='home'>
        <div className='d-flex flex-column align-items-center mb-4'>
          <b className='semiHead h1'>THE WEDDING OF</b>
          <div className='w-75 text-center p-md-5'>
            <img src={BrideImg1} className='img-fluid' alt='Bride Home' />
          </div>
          <p className='fontName2'>Taki & Mitsuha</p>
          <p className='text-center normalFont px-1'>
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
      </div>
    )
  }
}

export default Home
