import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root')) 
export let rerenderEntireTree = (state) =>{
  root.render(
    <React.StrictMode>
      <App state={state} 
      addPost={addPost} 
      updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById("root")
  );
}


