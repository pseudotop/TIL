import React from 'react'

export default function Spinner(props) {
  return (
    <div className="spinner ui active dimmer">
      <div className="ui big text loader">
        Loading...
        <h2>{props.message}</h2>
      </div>
    </div>
  )
}

Spinner.defaultProps = {
  message: 'This is default value'
}
