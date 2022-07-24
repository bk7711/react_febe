import React from "react";
import "./Feed.css";
const Feed = () => {
  return (
    <div className="feed">
      <div className="myComment">
        <form className="commentForm">
          <label>
            Updates:
            <input type="textarea" name="Updates" className="inputText" />
          </label>
          <input type="submit" value="Post" className="btn post-btn" />
        </form>
      </div>
    </div>
  );
};

export default Feed;
