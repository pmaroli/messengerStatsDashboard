import React, { } from 'react';

const StatisticsCard = (props) => {

  const spinnerDisplay = props.stat !== '' ? 'd-none' : '';

  return (
    <div className="col-12 col-md px-2 mb-2 mb-md-3 no-pointer">

      <div className="card fill shadow-sm text-primary">
        <div className="card-body">

          <div className={`spinner-border ${spinnerDisplay}`} role="status">
            <span className="sr-only">Loading...</span>
          </div>

          <h1 className={`card-title`}>{props.stat}</h1>
          <p className="card-text">{props.description}</p>

        </div>

        <i className="material-icons card-icon">{props.icon}</i>
      </div>

    </div>
  );
}

export default StatisticsCard;
