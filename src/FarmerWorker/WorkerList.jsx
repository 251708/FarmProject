import React, { useState } from 'react';
import WorkerItem from './WorkerItem';
import { db } from '../firebase';

const WorkerList = () => {
  const [workers, setWorkers] = useState([]);

  const fetchAvailableWorkers = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const farmerLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        db.collection('workers').get()
          .then((querySnapshot) => {
            const workersData = [];
            querySnapshot.forEach((doc) => {
              const worker = doc.data();
              const workerLocation = worker.location.split(',').map(parseFloat);
              const distance = getDistanceFromLatLonInKm(
                farmerLocation.lat,
                farmerLocation.lng,
                workerLocation[0],
                workerLocation[1]
              );
              workersData.push({ ...worker, distance });
            });
            setWorkers(workersData);
          })
          .catch((error) => {
            console.error('Error fetching workers:', error);
          });
      }, (error) => {
        console.error('Error fetching current location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; 
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; 
    return d;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  return (
    <div className="main-container">
      <div id="workerList" className="workerlist">
        {workers.map((worker, index) => (
          <WorkerItem key={index} worker={worker} />
        ))}
      </div>
    </div>
  );
};

export default WorkerList;
