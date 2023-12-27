import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/about'}>about</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/product'}>Product</Link>
                    </li>
                   
                </ul>

            </div>
        </div>
    </nav>
</div>
  );
};

export default Navbar;
