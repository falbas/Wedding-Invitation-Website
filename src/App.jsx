import React from 'react'

//import components
import HomeModal from './components/HomeModal'
import Home from './components/Home'
import TabMenu from './components/TabMenu'

class App extends React.Component {
  render() {
    return (
      <>
        <HomeModal />
        <TabMenu />
        <Home />
      </>
    )
  }
}

export default App
