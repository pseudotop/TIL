import React from 'react'
import './ErrorDisplay.css';

export default function ErrorDisplay(props) {
  return (
    <div className="error-display ui active dimmer">
      <i class="window close outline icon big"></i>
      <h2>{props.message}</h2>
    </div>
  )
}
