import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Form from './Components/Form';

const App = ()=>{
    return( 
        <>
        <Navbar/>
        <Switch>
            <Route exact path='/sign-in' component={Form}/>
         </Switch>
        
        </>
    )
}
export default App;