import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Player from './components/pages/Player'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      players: [],
      player: ''
    }
  }
  render () {
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/player' component={Player} />
      </Router>
    )
  }
}

export default App
