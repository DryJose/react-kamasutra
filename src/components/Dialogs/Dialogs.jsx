import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map( d => 
    <DialogItem name={d.name} key={d.id} id={d.id} />
  );
  let messagesElements = state.messages.map( m => 
  <Message message={m.message} key={m.id} />
  )
  let newMessageBody = state.newMessageBody;


  let addNewMessage = (value) => {
    props.sendMessage(value.newMessageBody)
  }
  
  if(!props.isAuth) return <Navigate to="/login" />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
        </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  );
};

export default Dialogs;
