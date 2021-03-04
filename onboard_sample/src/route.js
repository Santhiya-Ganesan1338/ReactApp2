import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Signup from './signup';
import Signin from './signin';
function Routes() {
    return (
        <div >
            <BrowserRouter>
                <div>
                    <Switch>
            
                            <Route exact path="/" component={Signin} />
                            <Route path="/Signup" component={Signup} />

                    </Switch>
                </div>
            </BrowserRouter>

        </div >
    );
}



export default Routes;