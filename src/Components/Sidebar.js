import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Sidebar() {
    return (

       <>

        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <Button variant="dark" className="navbar-toggler bg-dark position-absolute d-md-none collapsed mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </Button>
        </header>

        <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block sidebar collapse ">
                <div className="position-sticky pt-3">
                    <h3 className="fw-bold text-center text-light"> <i className='bx bxs-dashboard'></i> APRODITE</h3>
                    <ul className="nav flex-column mt-5">
                        <li>
                            <NavLink exact activeClassName="" className="nav-link text-white fs-4 " to="/schadule">
                                 <i className='me-3 bx bxs-calendar'></i> 
                                 Schadule
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="" className="nav-link text-white fs-4" to="/trainer"> 
                                <i className='me-3 bx bxs-user'></i>
                                Trainer
                             </NavLink>
                        </li>
                    </ul>
                </div>
        </nav>
        
       </>

    );
}


export default Sidebar;