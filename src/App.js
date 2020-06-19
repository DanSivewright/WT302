import React from 'react'

// Package Imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DashPage } from './components/dash/DashPage'
import { ScanPage } from './components/scan/ScanPage'

export const App = () => {
  return (
    <Router>
      <Switch>
        <div className='App'>
          <Route exact path='/' component={DashPage} />
          <Route exact path='/scan' component={ScanPage} />
        </div>
      </Switch>
    </Router>
  )
}

export default App
