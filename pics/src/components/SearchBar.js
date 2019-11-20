import React from "react";

class SearchBar extends React.Component {
  // Alternate event handler
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  // Possible way to solve the issue with state of
  // undefined when calling onFormSubmit
  // constructor() {
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }

  // Using arrow functions automatically binds this
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            ></input>
            {/* Can also use this syntax */}
            {/* <input type="text" onChange={this.onInputChange}></input> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
