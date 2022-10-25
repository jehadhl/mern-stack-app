import React, { useContext, useState } from "react";
import "./write.css";
import { BsPlusLg } from "react-icons/bs";
import axios from "axios";
import { Context } from "../../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const url = "http://localhost:4000/api/posts";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      console.log(file.name);
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:4000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post(url, newPost);
      window.location.replace("/post/" + res.data._id);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt="sddfasd"
        />
      )}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <BsPlusLg
              style={{
                border: "1px solid #aaa",
                padding: "8px",
                borderRadius: "50px",
              }}
            />
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
