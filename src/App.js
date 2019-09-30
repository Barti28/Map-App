import React, {useState} from 'react';
import './App.css';
import BroadcastChannel from 'broadcast-channel';
function App() {
  const [Image, setImage] = useState('');

  const channel = new BroadcastChannel('map-location');

  function onClickImage(value){
    channel.postMessage(value);
    setImage(value);
  }
  channel.onmessage = msg =>{
    setImage(msg);
  }

  return (
    
    <div className="App">
      
      
        <p>Test Brodcast Chanel {Image}</p>
        <button onClick={()=>{onClickImage('./img/Location_1.png')} }>Show Location 1</button>
        <button onClick={()=>{onClickImage('./img/Location_2.png')} } >Show Location 2</button>

        <img src={Image}  alt="logo" />
    </div>
  );
}

export default App;
