import React, { useState, useEffect } from 'react';
import './ReaxPieChart';
import ReaxPieChart from './ReaxPieChart';
import StatisticsCard from './StatisticsCard';

const UserLaughReax = (props) => {
  const {userData, userColors} = props

  const [chartData, setChartData] = useState([]);
  const [pieText, setPieText] = useState('Reacts Received');
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState('');
  const [reaxGiven, setReaxGiven] = useState('');
  const [reaxReceived, setReaxReceived] = useState('');
  const [totalMsgs, setTotalMsgs] = useState('');

  useEffect(() => {
    if (!userData) { return }

    setChartReceived();
    setName(userData.user)
    setTotalMsgs(userData.sent);
    setReaxGiven(userData.laugh_reax_given);
    setReaxReceived(userData.laugh_reax_received);
  }, [userData])

  const setChartGiven = () => {
    if (!userData) { return }

    const reax_given_dist = userData.laugh_reax_given_dist;
    let temp = []

    for (let user in reax_given_dist) {
      if (reax_given_dist[user] !== 0) {
        temp.push({
          id: user,
          label: user,
          value: reax_given_dist[user],
          color: userColors[user],
        })
      }
    }
    setChartData(temp);
  }

  const setChartReceived = () => {
    if ( !userData ) { return }

    const reax_received_dist = userData.laugh_reax_received_dist;
    let temp = []

    for (let user in reax_received_dist) {
      if ( reax_received_dist[user] !== 0 ) {
        temp.push({
          id: user,
          label: user,
          value: reax_received_dist[user],
          color: userColors[user],
        })
      }
    }
    setChartData(temp);
  }

  const toggleChart = () => {
    if (!userData) { return }

    if ( toggle ) {
      setPieText('Reacts Given');
      setChartGiven();
      setToggle(false);
    } else {
      setPieText('Reacts Received');
      setChartReceived();
      setToggle(true);
    }
  }

  return (
    <div className="col-12 col-lg-6 col-xxl-4 px-2 pb-3">

      <div className="card shadow-sm no-pointer">

        <h2 className="display-name">{name}</h2>

        <div className="row justify-content-center">

          <div className="col-12 col-lg-8 px-sm-4 mb-md-2">

            <div className="pie-root">
              <ReaxPieChart data={chartData} />
              <div className="overlay">
                <div className="inner-text" onClick={() => toggleChart()}>
                  <span className="display-4 inner-text">{pieText}</span><br />
                  <span className="display-4 sub-text">Click to toggle</span>
                </div>
              </div>
            </div>
            
          </div>

          <div className="col stats-col align-middle">
            <StatisticsCard stat={totalMsgs} description="Total Messages Sent" />
            <StatisticsCard stat={reaxReceived} description="Laugh Reacts Received" />
            <StatisticsCard stat={reaxGiven} description="Laugh Reacts Given" />
          </div>

        </div>

      </div>
      
    </div>
  );
}

export default UserLaughReax;
