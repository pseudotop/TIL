import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author={faker.name.firstName()}
        time={faker.date.recent().toLocaleString()}
        avatar={faker.image.avatar()}
        body={faker.lorem.sentence()}
      />
      {/* <CommentDetail />
      <CommentDetail /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
