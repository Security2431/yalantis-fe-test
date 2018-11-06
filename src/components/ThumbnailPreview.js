import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Thumbnail from './Thumbnail'
import styles, { Container, Row, Col as ColDefault } from '../decorators/styles'

const positionTexts = [
  {
    index: 0,
    text: "up"
  },
  {
    index: 1,
    text: "right"
  },
  {
    index: 2,
    text: "down"
  },
  {
    index: 3,
    text: "left"
  },
]

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

const Label = styled.label`
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  margin-bottom: 0;
  padding-left: 10px;
  padding-right: 10px;
  font: 400 16px/18px sans-serif;
  color: #333;
  letter-spacing: .8px;

  @media only screen and (min-width: 992px) {
    & {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 1rem;
`
const FormControlInput = styled.input`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  border-top: none;
  border-left: none;
  border-bottom: 2px solid #666;
  border-right: none;
  border-radius: 0;
  box-shadow: none;
  font: 400 16px/18px "Lato",sans-serif;
  color: #666;
  letter-spacing: .8px;

  @media only screen and (min-width: 768px) {
    & {
      margin: 0 11px 0 7px;
    }
  }
`
const FormControlSelect = styled.select`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  border-top: none;
  border-left: none;
  border-bottom: 2px solid #666;
  border-right: none;
  border-radius: 0;
  box-shadow: none;
  font: 400 16px/18px "Lato",sans-serif;
  color: #666;
  letter-spacing: .8px;

  @media only screen and (min-width: 768px) {
    & {
      margin: 0 11px 0 7px;
    }
  }
`


const SubmitButton = styled.input`
  margin-top: 20px;
  padding: 8px 20px;
  width: 100%;
  border: 4px solid #0078ff;
  border-radius: 0;
  background-color: transparent
  font: 400 18px/30px sans-serif;
  color: #0078ff;
  transition: all .3s ease-out;
  &:not(:disabled) {
    cursor: pointer;
  }

  &:active,
  &:hover {
    background-color: #0078ff;
    color: #fff
  }

`

class ThumbnailPreview extends Component {

  constructor(props) {
    super(props)
    const { thumbnails, match } = props

    const data = this.getDataById(thumbnails, match.params.id)

    this.data = data

    this.state = {
      isChangedForm: false,
      src: data.src,
      title: data.title,
      position: data.position,
      error: data.error ? true : false
    }
  }

  static propTypes = {
    thumbnails: PropTypes.array.isRequired
  }

  render() {
    const content = this.getContent()

    return (
      <ThumbnailSection>
        <Container>
          <Row>
            { content }
          </Row>
        </Container>
      </ThumbnailSection>
    )
  }

  getContent = () => {
    const { src, title, position, error } = this.state

    const content = 
      <>
        <ColDefault><h2> { title } </h2></ColDefault>
        { 
          !error &&
            <>
              <Col>
                <Thumbnail
                  src = { src }
                  title = { title }
                  position = { position }
                />
              </Col>
              <Col>
                <form onSubmit={ this.handleSubmit }>
                  <fieldset>
                    <FormGroup>
                      <Label htmlFor="title">Title: </Label>
                      <FormControlInput id="title" type="text" defaultValue={ title } onChange={this.handleTitleChange} />
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="position">Position: </Label>
                      <FormControlSelect id="position" defaultValue={ position } onChange={this.handlePositionChange}>
                        { 
                          positionTexts.map((item, index) => 
                            <option key={index} value={item.index}>{item.text}</option>
                          )
                        }
                      </FormControlSelect>
                    </FormGroup>
                  </fieldset>

                  <SubmitButton type="submit" value="Save"/>
                </form>
              </Col>
            </>
        }
      </>

    return content
    
  }

  getDataById = (thumbnails, routerId) => {
    const error = { 
      title: "Image not found",
      error: true
    }
    const thumb = thumbnails.filter( (item, index) => {
      const id = item.id

      return (id === routerId) ? item : null
    })[0]


    return (thumb !== undefined) ? thumb : error
  }

  handleTitleChange = (ev) => {
    ev && ev.preventDefault && ev.preventDefault()
    this.updateTitle(ev.target.value)
  }

  handlePositionChange = (ev) => {
    const value = parseInt(ev.target.value)

    this.setState({
      position: value
    })
  }

  handleSubmit = (ev) => {
    ev && ev.preventDefault && ev.preventDefault()
    console.log(ev)
    alert('submited')
  }

  updateTitle = title =>
    this.setState({
      title: title
    })
}

export default styles(ThumbnailPreview)