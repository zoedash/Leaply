import "../styles/profile.scss";
import React, { useState, useEffect} from 'react';
import firebase, { firestore, auth} from '../firebase';
import {Link} from "react-router-dom"
// import M from "materialize-css/dist/js/materialize.min.js";
// import "materialize-css/dist/css/materialize.css";
// import "materialize-css/dist/js/materialize.js";

function Profile({ user }) {
  () => {
    firestore.collection('users').doc(user.id).set({

    }, { merge: true });
  };

  return (
    <div>
      <div className="header grad"></div>
      <div className="avatar">
        <i className="material-icons avatar_icon">person</i>
      </div>
      <div className="gap"></div>
      <div className="row container">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">person_outline</i>
              <input placeholder="John Doe" type="text" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 line">
              <i className="material-icons prefix">date_range</i>
              <input
                type="text"
                className="datepicker"
                placeholder="Birthday"
              ></input>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">phone_iphone</i>
              <input type="text" placeholder="818 123 4567"></input>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">filter_center_focus</i>
              <input type="text" placeholder="Instagram Account"></input>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">mail_outline</i>
              <input type="text" placeholder="Info@aplusdesign.co"></input>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">visibility</i>
              <input type="text" placeholder="Password"></input>
            </div>
          </div>
          <p class="center-align">
            <a class="waves-effect waves-light btn-large grad">Save </a>
          </p>
        </form>
      </div>
    </div>
  );
}
// document.addEventListener("DOMContentLoaded", function() {
//   var elems = document.querySelectorAll(".datepicker");
//   // var instances = M.Datepicker.init(elems);
// });
export default Profile;
