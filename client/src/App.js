import React, { Component } from 'react'
import styled from 'tachyons-components'

const Wrapper = styled('div')`
b
bg-blue
flex
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
      user: ''
    }
  }

  componentDidMount () {
    this.setState({
      user: 'Dru'
    })
  }

  render () {
    return (
      <Wrapper>
        Hello {this.state.user ? `${this.state.user}` : 'World'}!
      </Wrapper>
    )
  }
}

export default App
