import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog}>
          <NavLink to="/dialogs/1">Andrew</NavLink>
        </div>
        <div className={style.dialog + ' ' + style.active}>
          <NavLink to="/dialogs/2">Dmitriy</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/3">Valera</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/4">Nastya</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/5">Viktor</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/6">Sasha</NavLink>
        </div>

      </div>
      <div className={style.messages}>
        <div className={style.message}>Hi</div>
        <div className={style.message}>Hi hi hi</div>
        <div className={style.message}>How is your it-kamasutra?</div>
      </div>
    </div>
  );
}

export default Dialogs;