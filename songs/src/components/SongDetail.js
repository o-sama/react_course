import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  if (props.song !== null) {
    return (
      <div>
        <h3>Details for:</h3>
        <p>
          {props.song.title}
          <br />
          Duration: {props.song.duration}
        </p>
      </div>
    );
  }
  return <div>Select a song</div>;
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
