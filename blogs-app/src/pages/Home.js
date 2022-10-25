import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import "./home.css";
import Sidebar from "../components/sideBar/Sidebar";
import Posts from "../components/posts/Posts";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/api/posts" + search);
      console.log(res.data);
      setPosts(res.data);
    };
    fetchData();
  }, [search]);

  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </React.Fragment>
  );
};

export default Home;
