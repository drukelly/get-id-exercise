import React from 'react'
import styled from 'styled-components'

const Player = styled('div')`
`

const PhotoContainer = styled('div')`
text-align: center;
`

const Photo = styled('div')`
background-color: beige;
background-position: 50% 50%; 
background-repeat: no-repeat;
background-size: cover;
border-radius: 80px;
height: 80px;
width: 80px;
`

const Card = props => {
  return (
    <Player>
      <PhotoContainer>
        <Photo style={{ backgroundImage: `url(${props.image})` }} />
      </PhotoContainer>
      <h3>#{props.jersey_number} <b>{props.name}</b></h3>
    </Player>
  )
}

export default Card
