import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Nastys' },
    { id: 4, name: 'Valera' },
    { id: 5, name: 'Sasha' },
    { id: 6, name: 'Volodya' }
  ];
  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
    { id: 6, message: 'Yo' },
  ];

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />);


  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {
          dialogsElements
        }
      </div>
      <div className={style.messages}>
        {
          messagesElements
        }
      </div>
    </div>
  );
}

export default Dialogs;