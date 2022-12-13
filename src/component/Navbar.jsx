import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <a class="h1 text-dark fs-4" href="#">
                      CORAL
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Address</a>
                            </li>
                            
                        </ul>
                        <div className='buttons'>
                            <a href='' className='btn m-2 btn-outline-dark'>
                               <i className="fa fa-sign-in"></i> Login
                            </a>
                        </div>
                        <div className='buttons'>
                            <a href='' className='btn m-2 btn-outline-dark'>
                               <i className="fa fa-sign-in"></i> Cart
                            </a>
                        </div>
                        </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;