import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();


    return ( 
        <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      <li className="nav-item">
        <Link to="/">
         Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/about">
         About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio">
         Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">
         Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/resume">
          Resume
          </Link>
        </li>
      
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    )
};
 
export default Navbar;