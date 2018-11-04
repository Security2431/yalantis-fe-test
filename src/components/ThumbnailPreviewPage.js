import React from 'react'
import PropTypes from 'prop-types'

import ThumbnailPreview from './ThumbnailPreview'

const ThumbnailPreviewPage = ( props ) => (
  <ThumbnailPreview { ...props } />
)

ThumbnailPreviewPage.propTypes = {
  thumbnails: PropTypes.array.isRequired
}

export default ThumbnailPreviewPage