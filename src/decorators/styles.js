import React, { Component as ReactComponent } from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto

    @media (min-width: 576px) {
      & {
        max-width:540px
      }
    }

    @media (min-width: 768px) {
      & {
        max-width:720px
      }
    }

    @media (min-width: 960px) {
      & {
        max-width:900px
      }
    }

    @media (min-width: 1200px) {
      & {
        max-width:1156px
      }
    }
  `

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px
  `

export const Col = styled.div`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
`

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {

  render() {
    return <OriginalComponent {...this.props} {...this.state} />
  }
}