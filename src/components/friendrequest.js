import "../styles/friendrequest.scss";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";

function Homepage() {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="row">
          <a className="btn-large col">
            <i className="material-icons">layers</i>
          </a>
        </div>

        <div className="row box">
          <div className="red">Hello</div>
        </div>

        <div className="row flex">
          <a className="btn-large col hariu">
            <i className="material-icons">message</i>
          </a>
          <a className="btn-large col">
            <i className="material-icons">gps_not_fixed</i>
          </a>
          <a className="btn-large col">
            <i className="material-icons">account_circle</i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
