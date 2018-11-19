import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Message from "./Message";
import Segment from "./Segment";

const App = () => {
  return (
    <Fragment>
      <Segment>
        <p>{faker.lorem.paragraph()}</p>
      </Segment>
      <Message header="회원약관 변경" body="약관이 변경되었습니다. 동의하세요" />
      <div className="ui container comments">
        <ApprovalCard>
          <h4>하하</h4>
          <span>허허</span>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author={faker.name.firstName()}
            time={faker.date.recent().toLocaleString()}
            avatar={faker.image.avatar()}
            body={faker.lorem.sentence()}
          />
        </ApprovalCard>
      
      {/* <CommentDetail />
      <CommentDetail /> */}
      </div>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
