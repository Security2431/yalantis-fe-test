import React, { Component } from 'react'
import ThumbnailList from './components/ThumbnailList'
import { createGlobalStyle } from 'styled-components'

import { thumbnails } from './jsonList.json'

import './App.css'

const GlobalStyled = createGlobalStyle`
  *, :after, :before {
    box-sizing: border-box;
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyled />
        <ThumbnailList thumbnails={ thumbnails } />
      </div>
    )
  }
}

export default App
