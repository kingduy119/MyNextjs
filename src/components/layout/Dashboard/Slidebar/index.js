import Link from 'next/link';

const routes = [
    { text: 'Component', href: '/' },
    { text: '404 Page', href: '/404' },
    { text: '500 Page', href: '/500' },
]

const SlidebarItem = ({ text, href, active }) => (
    <li class="nav-item">
        <Link href={href} >
            <a className={`nav-link ${ active ? 'active' : '' }`}
            >{ text }</a>
        </Link>
    </li>
)

const Slidebar = ({ pathname }) => {
    return(
        <ul className="nav nav-pills flex-column">
            {routes.map(item => (
                <SlidebarItem
                    href={item.href}
                    text={ item.text}
                    active={pathname == item.href}
                />
            ))}
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">pathname</a>
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

