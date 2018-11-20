import React from 'react'

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

const SeasonDisplay = (props) => {
  const season = getSeason(new Date().getMonth(), props.latitude);
  const { text, iconName } = seasonConfig[season];
  return (
    <div>
      <i className={`icon ${iconName}`}></i>
      <h1>{text}</h1>
    </div>
  )
}

export default SeasonDisplay;