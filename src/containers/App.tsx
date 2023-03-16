import React from 'react'
import { Route } from 'react-router-dom'
import SignIn from 'src/components/SignIn'

function App() {
  return <Route exact path="/" component={SignIn} />
}

export default App
