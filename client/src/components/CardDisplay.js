import React, { Component } from 'react'
import styled from 'styled-components'
import tc from 'tachyons-components'
import StatLine from './StatLine'

const PhotoContainer = tc('div')`
center
pt3
`
const Photo = styled('div')`
background-color: lightblue;
background-position: 50% 50%; 
background-repeat: no-repeat;
background-size: cover;
border-radius: 128px;
height: 128px;
margin: auto;
width: 128px;
`

class CardDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className='bg-white-30 br3 link mh2 mv2-m mv1 near-black tc w-80 w-third-l'>
        <PhotoContainer>
          <Photo style={{ backgroundImage: `url(${this.props.image})` }} />
        </PhotoContainer>
        <h2 className='fw2'><small className='black-50'>{this.props.jersey_number}</small> <b>{this.props.name}</b></h2>
        <div className='bg-black br3 flex items-center justify-center'>
          <StatLine stat='PTS' value={this.props.pts} first />
          <StatLine stat='AST' value={this.props.ast} />
          <StatLine stat='FG%' value={this.props.field_goals} />
          <StatLine stat='FT%' value={this.props.free_throws} />
        </div>
      </div>
    )
  }
}

export default CardDisplay
