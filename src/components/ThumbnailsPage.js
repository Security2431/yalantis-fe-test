import React from 'react'
import { createGlobalStyle } from 'styled-components'
import ThumbnailList from './ThumbnailList'

import '../App.css'

const GlobalStyled = createGlobalStyle`
  *, :after, :before {
    box-sizing: border-box;
  }
`

const ThumbnailsPage = (props) => (
  <>
    <GlobalStyled />
    <ThumbnailList thumbnails={ props.thumbnails } />
  </>
)

export default ThumbnailsPage

