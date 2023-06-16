import React from "react";
import { reduxForm, Field } from "redu x-form";
import { required } from "../../../redux/utils/validators/validators";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(value.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements} </div>
    </div>
  );
};

let  AddNewPostForm = (props) => {
  return(
          <form onSubmit={props.handleSubmit}>
        <div>
          <Field name={newPostText} component="textarea" 
          validate={ [required, maxLength15, minLength2]}/>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
  )
}

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default MyPosts;
