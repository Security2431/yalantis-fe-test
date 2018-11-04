import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import ThumbnailsPage from './ThumbnailsPage'
import ThumbnailPreviewPage from './ThumbnailPreviewPage'

import { thumbnails } from '../jsonList.json'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={() => <ThumbnailsPage thumbnails = { thumbnails } />} />
      <Route path="/single-thumb/:id" component = { (props) => <ThumbnailPreviewPage {...props} thumbnails = { thumbnails } /> } />
      <Redirect to="/" />
    </Switch>
  </Router>
)

export default App
