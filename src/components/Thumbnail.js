import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

const Figure = styled.figure`
  position: relative;
  margin: 0 0 1rem 0;
  background-color: #234325;
  overflow: hidden;
  line-height: 0;

  ${props => props.position === 0 && css`
    ${Figcaption} {
      transform: translate(0, -100%);
    }
  `}

  ${props => props.position === 1 && css`
    ${Figcaption} {
      transform: translate(100%, 0);
    }
  `}
  ${props => props.position === 2 && css`
    ${Figcaption} {
      transform: translate(0, 100%);
    }
  `}
  ${props => props.position === 3 && css`
    ${Figcaption} {
      transform: translate(-100%, 0);
    }
  `}
`

const Img = styled.img`
  max-width: 100%;

  @media (min-width: 576px) {
    & {
      height: 200px;
      object-fit: cover;
    }
  }

`

const Figcaption = styled.figcaption`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #00000070;
  font-size: 22px;
  line-height: 1.4;
  color: #fff;
  letter-spacing: 1.1px;
  transition: transform .3s ease-out;

  ${Figure}:hover & {
    transform: translate(0, 0);
  }

`


export default class Thumbnail extends Component { 
  static propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    position: PropTypes.number
  }

  static defaultProps = {
    position: 0
  }

  render() {
    const props = this.props
    return (
      <Figure position={props.position}>
        <Img src={props.src} alt={props.title} />
        <Figcaption>{props.title}</Figcaption>
      </Figure>
    )
  }
}