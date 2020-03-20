import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validatros';

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} key={m.id} />);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) return <Redirect to={"/login"} />;
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        <div>
          {messagesElements}
        </div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder="Enter your message" />
      </div>
      <div>
        <button>Send Message</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs;