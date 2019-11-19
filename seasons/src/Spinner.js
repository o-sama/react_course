import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

//best to specify default props this way
Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
