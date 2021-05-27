import Home from './components/homepage';
import Login from './components/login';
// import Profile from './components/profile';
import Add from './components/friendrequest';
import Message from './components/message';
import { auth, firestore }  from './firebase';


import React, { useEffect, useState } from 'react'
import {
    Route,
    Switch,
    useHistory,
    BrowserRouter,
} from 'react-router-dom'
import './App.css'


const App = () => {
    const [user, setUser] = useState('')
    const history = useHistory();

    useEffect (() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user){
                setUser(user);
                history.push('/home');



            } else {
                setUser(null)
                history.replace('/login');

            }
        })
        return () => unsubscribe;
    }, [])

    return (
        <div className="App">

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
                {/* <Route path={"/profile"} >
                    <Profile user={ user }/>
                </Route> */}
                <Route path={"/addfriend"} >
                    <Add user={ user }/>
                </Route>
                <Route path={"/message"} >
                    <Message user={ user }/>
                </Route>

            </Switch>
     
        </div>
    )
}

export default App;
