import React, { Component } from 'react'
import Card from './components/Card'
import styled from 'tachyons-components'

const Wrapper = styled('div')`
bg-blue
flex
flex-wrap
items-center
justify-center
min-vh-100
pa4
sans-serif
white
`

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      players: [],
      player: ''
    }
  }

  componentDidMount () {
    fetch('/api/players')
      .then(results => results.json())
      .then(res => {
        this.setState({
          players: res
        })
      })
      .catch(error => console.log(error))
  }

  render () {
    return (
      <Wrapper>
          {this.state.players.map(player => {
            return <Card key={player.id} jersey_number={player.jersey_number} name={player.name} image={player.image} />
          })}
      </Wrapper>
    )
  }
}

export default App
