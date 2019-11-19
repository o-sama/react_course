import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     //     // Only time to do direct assignment to state
  //     this.state = { lat: null, errorMessage: "" };
  //   }

  // Can also initialize state this way
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // Must be defined, React requirement
  render() {
    if (this.state.errorMessage !== "") {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (this.state.lat !== null) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <div>Loading</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
