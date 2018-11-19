import React from 'react';
import faker from 'faker';

// CONVENTION : component 이름 === file 이름
const CommentDetail = (props) => {
  // console.log(props);
  return (
    <div className="comment">
        <a href="#" className="avatar">
          <img src={props.avatar} alt="avatar" />
        </a>
        <div className="content">
          <a href="#" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">
              {props.time}
            </span>
          </div>
          <div className="text">{props.body}</div>
        </div>
      </div>
  );
}

export default CommentDetail;