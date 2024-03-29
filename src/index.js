import { ReactDOM } from "react";
import React from 'react'
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, { addPost, subscribe, updateNewPostText } from "./redux/state";
import App from "./App";


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

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

