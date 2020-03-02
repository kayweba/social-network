import sidebarPicture from '../img/user.png';


let initialState = {
  friends: [
    { id: 1, name: "Andrew", picture: sidebarPicture },
    { id: 2, name: "Sasha", picture: sidebarPicture },
    { id: 3, name: "Alexey", picture: sidebarPicture },
  ]
}


const sidebarReducer = (state = initialState, action) => {


  return state;
}

export default sidebarReducer;