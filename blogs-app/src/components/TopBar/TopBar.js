import React, { useContext } from "react";
import "./topBar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import {AiFillFacebook , AiFillInstagram} from "react-icons/ai"
import {FaPinterestSquare} from "react-icons/fa"

const TopBar = () => {
  const {user , dispatch} = useContext(Context)
  const PF = "http://localhost:4000/images/"
  const handleLogOuT =  () => {
    dispatch ({type:"LOGOUT"}) ; 
  }
  return (
    <div className="top">
      <div className="top-Left">
          <AiFillFacebook color="#2E2E2E" style={{width:"30px" , height:"30px"}}/>
          <AiFillInstagram color="#2E2E2E" style={{width:"30px" , height:"30px"}}/>
          <FaPinterestSquare color="#2E2E2E" style={{width:"30px" , height:"30px"}}/>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <Link to={"/"} style={{textDecoration:"none" , color:"#2e2e2e"}}>
           <li className="top-listItem">Home</li>
          </Link>
          <li className="top-listItem">About</li>
          <li className="top-listItem">Contact</li>
          <Link to={"/write"} style={{textDecoration:"none" , color:"#2e2e2e"}}>
           <li className="top-listItem">Wirite</li>
          </Link>
          <li className="top-listItem" onClick={handleLogOuT}>{user && "LogOut"}</li>
        </ul>
      </div>
      <div className="top-Right">
        {
          user ? (
          <Link to={"/settings"} style={{textDecoration:"none" , color:"#2e2e2e"}}>
          <img
            src={PF + user.profilePic}
            alt="imageve"
            className="topImage"
          />
          </Link>
          ) :
          <ul  className="top-list">
          <Link to={'/register'} className="link">
          <li  className="top-listItem">
              Register
          </li>
          </Link>
          <Link to={'/login'} className="link"> 
          <li  className="top-listItem">
              Login
          </li>
          </Link>
        </ul>
        }

      </div>
    </div>
  );
};

export default TopBar;
