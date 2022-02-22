import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs.js'
import AppContext from '../contexts/AppContext';
import reducer from '../reducers'

// console.log({AppContext})

const App = () =>  {
  const initialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  // console.log(state, ' in App.js')
  
  return (
    <AppContext.Provider value={ {state, dispatch} }>
    <div className="container-fluid">
      <EventForm />
      <Events />
      <OperationLogs />
    </div>
    </AppContext.Provider>
  )
}

export default App;
