import React from 'react'
import styled from 'tachyons-components'

const DefinitionList = styled('dl')`
b--white-10
f6
list
mv2
pa2
ph3
`

const StatLine = props => {
  return (
    <DefinitionList className={props.first ? 'b--none' : 'bl'}>
      <dt className='b white-50'>{props.stat}</dt>
      <dd className='ma0 pa0 white'>{props.value}</dd>
    </DefinitionList>
  )
}

export default StatLine
