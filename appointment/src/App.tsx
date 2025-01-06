import React from 'react'
import AppointmentResponse from './AppointmentResponse'

const App = () => {
  return (
    <>
    <h1>Incoming Appointmenet</h1>
    <p>From : Yllart Ferizi</p>
    <p>Date : 2021-09-01</p>
    <AppointmentResponse onSubmit={console.log}></AppointmentResponse>
    </>
  )
}

export default App