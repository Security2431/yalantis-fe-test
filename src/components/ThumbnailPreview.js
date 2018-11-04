import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Thumbnail from './Thumbnail'
import styles, { Container, Row, Col as ColDefault } from '../decorators/styles'


const ThumbnailSection = styled.section`
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
`

const getThumbnail = (thumb, isEmpty = false) => {
  const emptyThumb = <h2>{ thumb }</h2>
  const content = 
    <Container>
      <Row>
        <ColDefault><h2> { thumb.title } </h2></ColDefault>
        <Col>
          <Thumbnail 
            src = { thumb.src }
            title = { thumb.title }
            position = { thumb.position }
          />
        </Col>
      </Row>
    </Container>

  return <ThumbnailSection>{ isEmpty ? emptyThumb : content }</ThumbnailSection>
}

const searchImageById = (thumbnails, routerId) => {
  const thumb = thumbnails.filter( (item, index) => {
    const id = item.id

    return (id === routerId) ? item : null
  })[0]

  return (thumb !== undefined) ? getThumbnail(thumb) : getThumbnail("Image not found", true)
}

const ThumbnailPreview = ( props ) => (
  <>
    { searchImageById(props.thumbnails, props.match.params.id) }
  </>
)

ThumbnailPreview.propTypes = {
  thumbnails: PropTypes.array.isRequired
}

export default styles(ThumbnailPreview)