import React, {useEffect, useState} from 'react';
import sampleData from './sampleData.json'
import axios from 'axios';
import './css/main.css';

import './components/UserLaughReax'
import UserLaughReax from './components/UserLaughReax';

function App() {
  // Import data from a json file if offline
  const offline = true;

  const [users, setUsers] = useState({});
  const [userColors, setUserColors] = useState({});

  useEffect(() => {
    if ( offline ) {
      parseData(sampleData)
      return
    }

    axios.get('/getLikes').then(res => {
      console.log(res.data)
      parseData(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, []) // Empty array passed as second arg acts as componentDidMount()

  const parseData = (data) => {
    setUsers(data)

    // Set up the user colors
    let colors = {}
    for (let user in data) {
      colors[user] = data[user].color;
    }
    setUserColors(colors)
  }


  return (
    <div className="container">
      <div className="jumbotron bg-transparent my-0 pb-2 pt-5">
        <h1 className="display-4">Messenger Statistics Dashboard</h1>
      </div>

      <div className="row">
        {Object.keys(users).map(user => {
          return <UserLaughReax key={user} userData={Object.assign({}, { user }, users[user])} userColors={userColors} />
        }) }
      </div>

    </div>
  );
}

export default App;
