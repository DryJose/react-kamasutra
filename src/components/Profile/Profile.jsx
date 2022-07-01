import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo.jsx/ProfileInfo";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} 
      newPostText={props.profilePage.newPostText}
      updateNewPostText={props.updateNEwPostText}
      addPost={props.addPost} />
    </div>
  );
};

export default Profile;
