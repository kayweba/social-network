import sidebarPicture from '../img/user.png';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'My first post.', likesCount: 10 },
        { id: 3, message: 'Yo', likesCount: 15 },
        { id: 4, message: 'Yo', likesCount: 15 },
        { id: 5, message: 'Yo', likesCount: 15 },
      ],
      newPostText: 'it-kama.ru'
    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' },
      ],
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Nastys' },
        { id: 4, name: 'Valera' },
        { id: 5, name: 'Sasha' },
        { id: 6, name: 'Volodya' }
      ],

      newMessageBody: "",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Andrew", picture: sidebarPicture },
        { id: 2, name: "Sasha", picture: sidebarPicture },
        { id: 3, name: "Alexey", picture: sidebarPicture },
      ]
    }
  },
  _callsubscriber() { //  УВЕДОМИТЬ ПОДПИСЧИКА
    console.log('State Changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callsubscriber = observer;
  },
  dispatch(action) { // { type: 'ADD-POST'}

    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    sidebarReducer(this._state.sidebar, action);

    this._callsubscriber(this._state);

  }
}


export default store;