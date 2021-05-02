

const classes = {
    topnav: `
        dashboard__topnav
        navbar navbar-expand-sm bg-dark navbar-dark
        sticky-top
    `
}

const Topbar = () => {
    return (
        <nav className={classes.topnav}>
            <a class="navbar-brand" href="#">Logo</a>
            
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="#">Bootstrap</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">About me</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Show</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Dropdown link
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Link 1</a>
                        <a class="dropdown-item" href="#">Link 2</a>
                        <a class="dropdown-item" href="#">Link 3</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Topbar;
