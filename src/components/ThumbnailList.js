import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styles, { Container, Row } from '../decorators/styles'
import Thumbnail from './Thumbnail'

const Thumbnails = styled.section`
  padding: 30px 0;

`
const Col = styled.div`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
      & {
        flex: 0 0 50%;
        max-width: 50%;
      }
    }

    @media (min-width: 768px) {
      & {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
      }
    }

    @media (min-width: 960px) {
      & {
        flex: 0 0 25%;
        max-width: 25%;
      }
    }
  `

class ThumbnailList extends Component {
  static propTypes = {
    thumbnails: PropTypes.array.isRequired
  }

  render() {
    const ThumbnailElements = this.props.thumbnails.map((item) =>
      <Col key={item.id}>
        <Link to={`/single-thumb/${item.id}`}>
          <Thumbnail
            src={item.src}
            title={item.title}
            position={item.position}
            isSmall
          />
        </Link>
      </Col>
    )

    return (
      <Thumbnails>
        <Container>
          <Row>
            {ThumbnailElements}
          </Row>
        </Container>
      </Thumbnails>
    )
  }
}

export default styles(ThumbnailList)
