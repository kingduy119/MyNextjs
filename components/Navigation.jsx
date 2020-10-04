import React from "react";
import {
    Navbar, NavbarItem,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "./common";

function TopNav(props) {
    let { user } = props;
    return (
        <Navbar className="topnav">
            <NavbarItem className="topnav-item topnav-item_active" href="#">
                <i className="fa fa-home"></i>
            </NavbarItem>
            <NavbarItem className="topnav-item" href="#">
                <i className="fa fa-user"></i>
            </NavbarItem>
            <NavbarItem className="topnav-item" href="#">
                <i className="fa fa-envelope"></i>
            </NavbarItem>
            <NavbarItem className="topnav-item" href="#">
                <i className="fa fa-globe"></i>
            </NavbarItem>

            <Dropdown className="topnav-dropdown">
                <DropdownToggle className="topnav-dropdown-toggle">
                    <i className="fa fa-bell"></i>
                    <span className="badge red right circle">3</span>
                </DropdownToggle>
                <DropdownMenu className="topnav-dropdown-menu">
                    <DropdownItem className="topnav-dropdown-item" href="#">One new friend request</DropdownItem>
                    <DropdownItem className="topnav-dropdown-item" href="#" >One new friend request</DropdownItem>
                    <DropdownItem className="topnav-dropdown-item" href="#">John Doe posted on your wall</DropdownItem>
                    <DropdownItem className="topnav-dropdown-item" href="#">Jan like your post</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            {user &&
                <Dropdown className="topnav-dropdown topnav-user">
                    <DropdownToggle className="topnav-dropdown-toggle">
                        <img
                            className="topnav-user-avatar"
                            src={user.avatarUrl || "https://www.w3schools.com/w3images/avatar3.png"}
                        />
                    </DropdownToggle>
                    <DropdownMenu className="topnav-dropdown-menu">
                        <DropdownItem className="topnav-dropdown-item" href="/v1/logout">Log out</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            }
        </Navbar>
    );
}

export { TopNav };