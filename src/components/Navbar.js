import React from 'react'
// import PropTypes from 'prop-types'
export default function Navbar(props) {
    
  return (
    <nav className={`navbar  navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid  ">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link  active"aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==="light"? "dark":"light"}`}>
  <input className="form-check-input" onClick={props.toggleMood}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.darkmode}</label>
</div>
    </div>
  </div>
</nav>
  )
}

// Navbar.propTypes={
//     title:PropTypes.string.isRequired,
//     btn:PropTypes.string
// }
// Navbar.defaultProps={
//     title:'set title here',
//     btn:'search'
// }