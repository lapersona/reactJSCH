import logo from '../resources/cielo-logo.png';
import '../styles/style.blue.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header className="nav-holder">
        <div className="navbar navbar-light bg-white navbar-expand-lg py-0" id="navbar">
          <div className="container py-3 py-lg-0 px-lg-0">
            <Link to="/"><a className="navbar-brand" href="/">
              <img className=" d-md-inline-block" src={logo} alt="Cielo logo"></img></a></Link>
            <button className="navbar-toggler text-primary border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navigationCollapse" aria-controls="navigationCollapse" aria-expanded="false" aria-label="Toggle navigation"><span className="sr-only">Toggle navigation</span><i className="fas fa-align-justify"></i></button>
            <div className="collapse navbar-collapse" id="navigationCollapse">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <Link className="btn btn-outline-light btn-sm" to="/">
                <li className="nav-item dropdown"><a className="nav-link" id="hpDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" href=" ">HOME</a>
                </li>
                </Link>
                <Link className="btn btn-outline-light btn-sm" to="/about">
                <li className="nav-item menu-large"><a className="nav-link" aria-expanded="false" href=" ">QUIENES SOMOS</a>
                </li>
                </Link>
                <Link className="btn btn-outline-light btn-sm" to="/mantyhabilit">
                <li className="nav-item dropdown menu-large"><a className="nav-link" role="button" aria-expanded="false" href=" ">MANTENIMIENTO Y HABILITACIONES</a>
                </li>
                </Link>
                <Link className="btn btn-outline-light btn-sm" to="/ventas">
                <li className="nav-item dropdown"><a className="nav-link" id="contactMegamenu" role="button" data-bs-toggle="dropdown" aria-expanded="false" href=" ">VENTAS AVIONICA</a>
                </li>
                </Link>
                <Link className="btn btn-outline-light btn-sm" to="/cirrus">
                <li className="nav-item dropdown"><a className="nav-link" id="contactMegamenu" role="button" data-bs-toggle="dropdown" aria-expanded="false" href=" ">CIRRUS AIRCRAFT</a>
                </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
}

export default NavBar;

