import React from 'react'

class Tab extends React.Component {
  render() {
    return (
      <div className='tab-menu'>
        <div className='hstack gap-3 gap-md-5'>
          <a href='#section1'>
            <i className='bi bi-apple fs-1'></i>
          </a>
          <a href='#section2'>
            <i className='bi bi-apple fs-1'></i>
          </a>
          <a href='#section3'>
            <i className='bi bi-apple fs-1'></i>
          </a>
          <a href='#section4'>
            <i className='bi bi-apple fs-1'></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Tab
