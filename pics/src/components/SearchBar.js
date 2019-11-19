import React from "react";

class SearchBar extends React.Component {
  // Alternate event handler
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
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
