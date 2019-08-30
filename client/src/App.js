import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './css/main.css';

import './components/UserLaughReax'
import UserLaughReax from './components/UserLaughReax';

function App() {

  const [users, setUsers] = useState({});
  const [userColors, setUserColors] = useState({});
  

  useEffect(() => {
    console.log('runningn')
    axios.get('/getLikes').then(res => {
      setUsers(res.data)
      
      // Set up the user colors
      let colors = {}
      for ( let user in res.data ) {
        colors[user] = res.data[user].color;
      }
      setUserColors(colors)
    }).catch(err => {
      console.log(err)
    })
  }, []) // Empty array passed as second arg acts as componentDidMount()


  return (
    <div className="container">
      <div className="jumbotron bg-transparent my-0 pb-2 pt-5 text-primary">
        <h1 className="display-4">Messenger Statistics Dashboard</h1>
      </div>

      <div className="row">
        {Object.keys(users).map(user => {
          return <UserLaughReax userData={Object.assign({}, { user }, users[user])} userColors={userColors} />
        }) }
      </div>

    </div>
  );
}

export default App;
