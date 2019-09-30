import React from 'react';
import Map from './Map';
import Locations from './Locations';
import {Switch, Route} from 'react-router-dom';

const Main = () => {
    return (
        <div>
            {/* <Switch>
                <Route exact path='/' component={Locations}/>
                <Route path='/map' component={Map}/>
                <Route path='/locations' component={Locations}/>        
            </Switch> */}
        </div>
    )
}

export default Main
