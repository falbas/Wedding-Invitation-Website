import React from 'react'
import '../App.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: props.data.date,
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
      <div className={`home-section ${this.props.className}`} id='home'>
        <h1 className='text-center mb-3'>THE WEDDING OF</h1>
        <div className='text-center mb-3'>
          <img src={this.props.data.brideImage1} className='img-fluid' alt='' />
        </div>
        <h1 className='font-parisienne text-primary fw-bold text-center mb-3'>
          {`${this.props.data.manFirstName} & ${this.props.data.womanFirstName}`}
        </h1>
        <p className='text-center mb-3'>
          Kami berharap Anda menjadi bagian dari hari istimewa kami!
        </p>
        <div className='text-center d-flex justify-content-center'>
          <div className='col-12 col-md-8'>
            <div className='row gap-2 gap-md-3 text-secondary g-0 mx-2'>
              <div className='col bg-primary rounded'>
                <p className='fs-3'>{this.state.day}</p>
                <p>Hari</p>
              </div>
              <div className='col bg-primary rounded'>
                <p className='fs-3'>{this.state.hour}</p>
                <p>Jam</p>
              </div>
              <div className='col bg-primary rounded'>
                <p className='fs-3'>{this.state.minute}</p>
                <p>Menit</p>
              </div>
              <div className='col bg-primary rounded'>
                <p className='fs-3'>{this.state.second}</p>
                <p>Detik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
