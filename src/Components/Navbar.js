import React,{useEffect} from "react";
import {Link , useLocation} from 'react-router-dom';
import PropTypes from "prop-types";



const Navbar = (props) => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)

  },[location])
    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-dark bg-${props.backgroundColor}`} >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/"?"active":""}`} onClick={()=>{props.setColor("success")}}aria-current="page" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/business"?"active":""}`} onClick={()=>{props.setColor("warning")}}to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/entertainment"?"active":""}`}onClick={()=>{props.setColor("primary")}} to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/general"?"active":""}`}onClick={()=>{props.setColor("danger")}} to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/health"?"active":""}`}onClick={()=>{props.setColor("info")}} to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/science"?"active":""}`}onClick={()=>{props.setColor("dark")}} to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/sports"?"active":""}`}onClick={()=>{props.setColor("secondary")}} to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/technology"?"active":""}`}onClick={()=>{props.setColor("primary")}} to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  
}
Navbar.defaultProps = {
  backgroundColor: "primary"
};
Navbar.propTypes = {
  backgroundColor: PropTypes.string
};


export default Navbar;
