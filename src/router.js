import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import App2 from './App2'

function Router (){

    return(
        <BrowserRouter>

            <Switch>
                <Route path="/app" exact component={App} />
                <Route path="/app2" exact component={App2} />
            </Switch>
        
        </BrowserRouter>
    )


}


export default Router