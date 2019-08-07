import React, { Component } from 'react'
import CardDisplay from '../CardDisplay'
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

class Player extends Component {
  constructor (props) {
    super(props)
    this.state = {
      player: [],
      playerID: window.location.href
    }
  }
  
  componentDidMount () {
    let pointer = this.state.playerID
    let id = pointer.substring(pointer.lastIndexOf('/') + 1)
    fetch(`/api/players/${id}`)
      .then(results => results.json())
      .then(res => {
        this.setState({
          player: res
        })
      })
      .catch(error => console.log(error))
  }

  render () {
    return(
      <Wrapper>
        {this.state.player.map(player => {
          return <CardDisplay key={player.id} id={player.id} jersey_number={player.jersey_number} name={player.name} image={player.image} />
        })}
      </Wrapper>
    )
  }
}

export default Player
