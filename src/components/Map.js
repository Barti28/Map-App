import React,{useState} from 'react';
import BrodcastChannel from 'broadcast-channel';

const Map = () => {
    const [Img, setImg] = useState('logo192.png');
    let channel = new BrodcastChannel('map-location');
    channel.onmessage = msg =>{
        console.log('onmessge'+msg);
        //setImg(msg);
    }
    return (
        <div>
            <img src={Img} alt='Location'/>
        </div>
    )
}

export default Map
