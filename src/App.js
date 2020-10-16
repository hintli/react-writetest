import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Challenges from './components/challenges/Challenges'
import Results from './components/results/Results'
import SpeedCheck from './components/speedcheck/SpeedCheck'

 function App() {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
            <Switch>
                
                <Route exact path='/challenges' component={Challenges}  />
                <Route exact path='/' component={SpeedCheck}  />
                <Route exact path='/results' component={Results}  />
            </Switch>
            </BrowserRouter>
            
        </div>
    )
}


export default App;


