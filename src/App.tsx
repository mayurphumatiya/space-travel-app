import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import "./styles/App.css"

function App() {
  return (
    <div className='home'>
     {/* <Navbar /> */}
     <Homepage />
    </div>
  );
}

export default App;
