import React from 'react'

class Tab extends React.Component {
  render() {
    return (
      <div className='tab-menu'>
        <div className='hstack gap-3 gap-md-5'>
          <a href='#home'>
            <i className='bi bi-bookmark-heart fs-1'></i>
          </a>
          <a href='#mempelai'>
            <i className='bi bi-hearts fs-1'></i>
          </a>
          <a href='#tanggal'>
            <i className='bi bi-calendar-heart fs-1'></i>
          </a>
          <a href='#galeri'>
            <i className='bi bi-image fs-1'></i>
          </a>
          <a href='#ucapan'>
            <i className='bi bi-chat-heart fs-1'></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Tab
