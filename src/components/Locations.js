import React, {useState} from 'react'

const Location = (prop) => {
    
    const [Image, setImage] = useState('no-image');

    let channel = new BroadcastChannel('map-location');

    function onClickImage(value){
        channel.postMessage(value);
        setImage(value);
        console.log(Image);
    }
    return (
        <div>
            Location 1 <button onClick={()=> onClickImage('./img/Location_1.png')}>Show</button>
            <hr></hr>
            Location 2 <button onClick={()=> onClickImage('./img/Location_2.png')}>Show</button>
        </div>
    )
}

export default Location
