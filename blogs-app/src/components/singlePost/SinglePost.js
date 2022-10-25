import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./singlePost.css";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const url = "http://localhost:4000/api/posts/";
  const [posts, setPosts] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(url + path);
      console.log(res);
      setPosts(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
      
    };
    getPosts();
  }, [path]);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(url + path, {
        data: {
          username: user.username,
        },
      });
      console.log(res);
      window.location.replace("/");
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4000/api/posts/${path}`, {
        username: user.username,
        title,
        description,
      });
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  const PF = "http://localhost:4000/images/";
  console.log(posts.username === user?.username); // true
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {posts.photo && (
          <img src={PF + posts.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {posts.username === user?.username && (
              <div className="singlePostEdit">
                <FiEdit onClick={() => setUpdateMode(true)} className="singlePostIcon"/>
                <BsTrash onClick={handleDelete} className="singlePostIcon"/>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${posts.username}`} className="link">
              <b> {posts.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(posts.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{description}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
