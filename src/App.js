import React from 'react';
import './App.css';
// Other Import
import { Route, BrowserRouter } from 'react-router-dom';

// Import my component
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route path="/dialogs"
            render={() => <Dialogs store={props.store} />} />

          <Route path="/profile" render={() => <Profile
            profilePage={props.state.profilePage}
            updateNewPostText={props.updateNewPostText}
            dispatch={props.dispatch}
          />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
