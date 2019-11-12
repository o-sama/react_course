import React from "react";
import ReactDOM from "react-dom";
// faker.js is nice for fake stuff to use for development purposes
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

// semantic-ui.com is nice for styling.

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Hal"
          avatar={faker.image.avatar()}
          commentText={faker.random.words()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sal"
          avatar={faker.image.avatar()}
          commentText={faker.random.words()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Pal"
          avatar={faker.image.avatar()}
          commentText={faker.random.words()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
