import React from "react";
import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
        <Field
          component="textarea"
          name="newMessageBody"
          placeholder="Ender your message"
        />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </form>
    );
  }
  
  export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm) 