import React, { useState , useEffect } from "react";
import "./sidebar.css";
import axios from "axios"
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [catagorys , setCatagorys] = useState([])
  const url ="http://localhost:4000/api/categories"

  useEffect(() => {
     const getCatagories = async () => {
        const res = await axios.get(url)
        console.log("response" , res.data)
        setCatagorys(res.data)
     }
     getCatagories()
  }, [])
  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://images.pexels.com/photos/1874726/pexels-photo-1874726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="image"
          alt="images"
        />
        <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarList">
           {catagorys.map((item) => {
              return (
                <Link to={`/?cat=${item.name}`} className="link" key={item._id}>
                 <li className="sidebarListItem">{item.name}</li>
                </Link>
              )
           })}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Follow US</span>
        <div className="sidebarSocail">
          <i class="topIcon fa-brands fa-square-facebook"></i>
          <i class="topIcon fa-brands fa-pinterest"></i>
          <i class="topIcon fa-brands fa-twitter"></i>
          <i class="topIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
