import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ imageUrl, title, description, date, post }) => {
  const PF ="http://localhost:4000/images/"
  return (
    <div className="post">
      {post.photo && <img src={PF + post.photo} className="postImg" alt="images" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postTitle" style={{ width: "100%" }}>
              {c.name}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} style={{textDecoration:"none"}}>
      
          <span className="postTitle" style={{ width: "100%" }}>
            {title}
          </span>
        </Link>
   
        <hr />
        <span className="postDate">{new Date(date).toDateString()}</span>
        <p className="postDesc">{description} </p>
      </div>
    </div>
  );
};

export default Post;
