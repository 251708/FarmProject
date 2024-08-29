import React from 'react';
import Navbar from './components/Navbar';
import TextContainer from './components/TextContainer';
import WorkerList from './components/WorkerList';
//import { initializeFirebase } from './firebase';

function fw() {
  initializeFirebase();

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Navbar />
      <TextContainer />
      <WorkerList />
      <div id="farmerLocation"></div>
    </div>
  );
}

export default fw;
