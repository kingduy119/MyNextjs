import Link from 'next/link';

const classes = {
    slidebar: `
        nav
        nav-pills
        flex-column
        dashboard__slidebar
    `,
}

const routes = [
    { text: 'Component', href: '/' },
    { text: '404 Page', href: '/404' },
    { text: '500 Page', href: '/500' },
]

const SlidebarItem = ({ text, href, active }) => (
    <li class="nav-item">
        <Link href={href} >
            <a
                href="#"
                className={`nav-link ${ active ? 'active' : '' }`}
            >{ text }</a>
        </Link>
    </li>
)

const Slidebar = ({ pathname }) => {
    console.log(`pathname: ${pathname}`);
    return(
        <ul className={classes.slidebar}>
            {routes.map(item => (
                <SlidebarItem
                    href={item.href}
                    text={ item.text}
                    active={pathname == item.href}
                />
            ))}
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">pathname: { pathname }</a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                <a class="dropdown-item" href="#">Link 3</a>
                </div>
            </li>
        </ul>
    )
}


export default Slidebar;

