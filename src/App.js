import Home from './components/homepage';
import Login from './components/login';
import Profile from './components/profile';
import Add from './components/friendrequest';
import Message from './components/message';
import { auth }  from './firebase';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';

import React, { useEffect, useState } from 'react'
import {
    Route,
    Switch,
    useHistory,
} from 'react-router-dom'
import './App.css'
import { BrowserRouter , useHistory } from 'react-router-dom';

const App = () => {
    const [user, setUser] = useState('')
    const history = useHistory();

    useEffect (() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user){
                setUser(user)

            } else {
                setUser(null)
                history.replace('/login');
            }
        })
        return () => unsubscribe;
    }, [])

    return (
        <div className="App">
          <BrowserRouter>
           <Switch>
                {/* <Route exact path="/">
                    <Home user={ user }/>
                </Route> */}
               
                <Route path={"/login"} >
                    <Login user={ user }/>
                </Route>
                { user && 
          <Route exact path="/home" component={Home} />
        }
                <Route path="/home" >
                    <Home user={ user }/>
                </Route>
                <Route path={"/profile"} >
                    <Profile user={ user }/>
                </Route>
                <Route path={"/addfriend"} >
                    <Add user={ user }/>
                </Route>
                <Route path={"/message"} >
                    <Message user={ user }/>
                </Route>

            </Switch>
          </BrowserRouter>
        </div>
    )
}

export default App;
