import logo from './logo.svg';
import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import firebase, { firestore, auth } from './firebase';


function App() {
  const [input, setInput] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [sentcode, setSentCode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifeir('sign-in-button', {

    });

  }, []);

  const sendConfirmCode = async () => {
    setLoading(true);
    const appVerifier = window.recaptchaVerifier;
    console.log(appVerifier);
    try {
      window.confirmationResult = await auth.signInWithPhoneNumber(`+976 ${input}`, appVerifier);
      serSentCode(true);
    } catch(e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  
  const login = async () => {
    try {
      const user = await window.confirmationResult.confirm(confirmCode);
      console.log(user);
    } catch(e) {
      console.log(e);
      alert("buruu baina")
    }
  }




  return (
    <div className="App">
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)} 
        placeholder="utasnii dugaar"></input>
      <div id="sign-in-button"></div>
      {!sentcode && <button}
    </div>
  )
}

export default App;
