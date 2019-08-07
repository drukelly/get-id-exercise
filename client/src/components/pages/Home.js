import React, { Component } from 'react'
import Card from '../Card'
import styled from 'tachyons-components'

const Wrapper = styled('div')`
bg-blue
flex
flex-wrap
items-center
justify-center
min-vh-100
pv4
sans-serif
w-100
white
`

class Home extends Component {
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
    return(
      <Wrapper>
        {this.state.players.map(player => {
          return <Card key={player.id} id={player.id} jersey_number={player.jersey_number} name={player.name} image={player.image} />
        })}
      </Wrapper>
    )
  }
}

export default Home
