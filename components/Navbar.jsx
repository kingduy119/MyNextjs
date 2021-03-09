
// Basic
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            {/* <!-- Brand --> */}
            <a className="navbar-brand" href="#">Home</a>

            {/* <!-- Toggler/collapsibe Button --> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                {/* <!-- Links --> */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>

                    {/* <!-- Dropdown --> */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Templates
                        </a>
                        <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Archittect</a>
                        <a className="dropdown-item" href="#">Portfolio</a>
                        <a className="dropdown-item" href="#">Analys</a>
                        </div>
                    </li>
                </ul>
            </div> {/* End collapse */}
      </nav>
    );
}


export {
    Navbar
}















