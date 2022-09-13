import React from 'react';

const NavBar = () => {



    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">Band Manager</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/band">Bands</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/tour">Shows</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/band/new">New Band</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/tour/new">New Show</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;