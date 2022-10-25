import React from "react";
import Post from "../post/Post";
import "./posts.css";

const posts = ({posts}) => {
  return (
    <div className="posts">
      {posts.map((item) => {
         return (
          <div key={item._id}>
             <Post
                imageUrl=
                  "https://images.pexels.com/photos/2087508/pexels-photo-2087508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"   
                title={item.title} 
                description={item.description}
                date={item.createdAt}
                post={item}
              />
          </div>
         )
      })}
     
  
    </div>
  );
};

export default posts;
