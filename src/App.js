import React from 'react';
import './App.css';
import Header from '../src/Components/Header'
import BatchCard from './Components/BatchCard';
import Home from './Pages/Home';
import BatchDetails from './Pages/BatchDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <BatchCard></BatchCard> */}
      {/* <Home></Home> */}
      <BatchDetails></BatchDetails>
    </div>
  );
}

export default App;
