import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  
  return (
    <div className={s.item}>
      <img src="https://lapkins.ru/upload/iblock/130/1309222f033fb6928ea065578276ab44.jpg" />
      { props.message } 
      <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  );
};

export default Post;
