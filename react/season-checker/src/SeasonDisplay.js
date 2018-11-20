import React from 'react';
import './SeasonDisplay.css';

const SeasonDisplay = (props) => {
  const season = getSeason(new Date().getMonth(), props.latitude);
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon ${iconName} huge upper-left`}></i>
      <h1>{text}</h1>
      <i className={`icon ${iconName} huge bottom-right`}></i>
    </div>
  )
}

const getSeason = (month, latitude) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
}

const seasonConfig = {
  summer: {
    text: '뻘뻘뻘',
    iconName: 'sun',
  },
  winter: {
    text: '덜덜덜',
    iconName: 'snowflake',
  },
};

export default SeasonDisplay;