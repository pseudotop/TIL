import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import ErrorDisplay from './ErrorDisplay';

// const App = () => {
  
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     error => console.error(error)
//   )

//   return (
//     <div>
//       <SeasonDisplay />
//     </div>
//   );
// };

class App extends Component {
  
  // constructor (props) {
  //   super(props);
  state = {
    lat: null, // 아직모른다. but 값이 할당된다.
    lng: null,
    errorMessage: "",
  };
  // }

  renderContent() {
    // 사용자 거부함
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <ErrorDisplay message={this.state.errorMessage}>
          <Spinner message="어디에 계십니까?"/>
        </ErrorDisplay>
      )
    }
    // 사용자 허용함
    if (!this.state.errorMessage && this.state.lat) {
      return (<SeasonDisplay latitude={this.state.lat}/>)
    }
    // 허용 여부 기다리는중
    return (<Spinner message="어디에 계십니까?" />)
  }

  render () {
    return (
      <div style={{ border: 'solid red 1px' }}>
        {this.renderContent()}
      </div>
    )
  }
  
  componentDidMount() {
    console.log('컴포넌트 마운트');
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ 
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      error => {
        console.error(error);
        this.setState({
          errorMessage: error.message,
        });
      },
    );
  }

  componentDidUpdate() {
    console.log('컴포넌트 UPDATE & RE-RENDERED');
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));