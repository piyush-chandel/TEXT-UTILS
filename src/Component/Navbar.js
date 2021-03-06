import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <a classNameName="navbar-brand" href="/">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             <a className="nav-link " aria-current="page" href="/">{props.title}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.option}</a>
            </li>


          </ul>
          <div className={`form-check form-switch text-info`}>
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault"> Dark mode</label>
          </div>
          {/* <div className={`form-check form-switch text-info`}>
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode === 'dark' ? 'success' : 'dark'}`} htmlFor="flexSwitchCheckDefault">Green mode</label>
          </div> */}
        </div>
      </div>
    </nav>

  )
}



Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = {
  title: "home",
  option: "about Us"
}

