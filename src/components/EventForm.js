import React, { useState, useContext } from 'react'

import { 
  CREATE_EVENT, 
  DELETE_ALL_EVENTS 
} from '../actions'
import AppContext from '../contexts/AppContext'

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody ] = useState('')
  // console.log(state, ' in EventForm.js')

  const addEvent = e => {
    e.preventDefault()
    // console.log({title, body})
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })

    setTitle('')
    setBody('')
  }
  // console.log({state})

  const deleteAllEvents = (e) => {
    e.preventDefault()
    const result = window.confirm('すべてのイベントを本当に削除してもよいですか?')
    if (result) dispatch({ type: DELETE_ALL_EVENTS })
  }

  const unCreatable = title === '' || body === ''
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        
        <div className='form-group'>
          <label htmlFor='formEventBody'>ボディー</label>
          <input className='form-control' id='formEventBody' value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className='btn btn-primary' onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className='btn btn-danger' onClick={deleteAllEvents} disabled={state.length === 0}>すべてのイベントを削除する</button>
      </form>
    </>
  )
}

export default EventForm