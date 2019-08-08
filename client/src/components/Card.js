import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tc from 'tachyons-components'

const PhotoContainer = tc('div')`
pt3
`
const Photo = styled('div')`
background-color: lightblue;
background-position: 50% 50%; 
background-repeat: no-repeat;
background-size: cover;
border-radius: 64px;
height: 64px;
margin: auto;
width: 64px;
`

const Card = props => {
  return (
    <Link to={`/player/${props.id}`} className=' bg-black-10 br3 hover-bg-white-30 link ma2 near-black pa2 tc w-80 w-25-l'>
      <PhotoContainer>
        <Photo style={{ backgroundImage: `url(${props.image})` }} />
      </PhotoContainer>
      <h3 className='fw2'><small className='black-50'>{props.jersey_number}</small> <b>{props.name}</b></h3>
    </Link>
  )
}

export default Card
