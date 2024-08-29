import React from 'react';

const WorkerItem = ({ worker }) => {
  return (
    <div className={`worker-container ${worker.availability ? 'available' : 'not-available'}`}>
      <p>Name: {worker.name}</p>
      <p>Email: {worker.email}</p>
      <p>Contact: {worker.Contact}</p>
      <p>Daily Rate: {worker.dailyRate}</p>
      <p>Skills: {worker.skills.join(', ')}</p>
      <p>Work History: {worker.workHistory}</p>
      <p>Distance from Farmer: {worker.distance.toFixed(2)} km</p>
      <p style={{ color: worker.availability ? 'green' : 'red' }}>
        Availability: {worker.availability ? 'Available' : 'Not Available'}
      </p>
    </div>
  );
};

export default WorkerItem;
