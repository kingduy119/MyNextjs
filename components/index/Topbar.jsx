import React from "react";
import { connect } from "react-redux";

function Friends(props) {
    let { notifications } = props;
    let newsNotif = notifications.filter(notif => notif.state == "new");

    return (
        <li className="inav-item idrdown" id="navitemFriends">
            <a className="inav-link idrdown-btn">
                <i className="fa fa-user" />
                {newsNotif && newsNotif.length > 0 &&
                    <span
                        className="badge circle small bg-red"
                        style={{ padding: '0px 4px' }}
                    >{newsNotif.length}</span>
                }
            </a>
            <div className="idrdown-content card">
                <a>link</a>
                <a>link</a>
            </div>
        </li>
    )
}

function News(props) {
    let { notifications } = props;
    let newsNotif = notifications.filter(notif => notif.state == "new");

    return (
        <li className="inav-item idrdown" >
            <a
                className="inav-link idrdown-btn"
                onClick={(e) => {
                    e.preventDefault();
                    let tag = document.getElementById("idrNews");
                    tag.classList.toggle("show");
                }}
            >
                <i className="idrdown-icon fa fa-bell" />
                {newsNotif && newsNotif.length > 0 &&
                    <span
                        className="idrdown-badge badge circle small bg-red"
                        style={{ padding: '0px 4px' }}
                    >{newsNotif.length}</span>
                }
            </a>
            <div
                id="idrNews" 
                className="idrdown-content card round medium pd-8"
            >
                <h4>Title</h4>
                <p>Content</p>
                {notifications && notifications.length > 0 &&
                    notifications.map(notif => (
                        <a 
                            href={`#${notif._id}/`}
                            className="block round hv-black-grey"
                        >
                            <h4>ID: {notif._id}</h4>
                            <h5>State: {notif.state}</h5>
                            <p>Comment: {notif.comment}</p>
                        </a>
                    ))
                }
            </div>
        </li>
    )
}

function NavItemUser(props) {
    let [show, setShow] = React.useState(false);

    return (
        <li className="inav-item right idrdown" id="navitemUser"
            onClick={(e) => {e.preventDefault(); setShow(!show)}}
        >
            <a className="inav-link idrdown-btn"
                style={{ padding: '6.5px' }}
            >
                <img
                    className="circle"
                    src={ props.avatarUrl || "/assets/avatar.jpg"}
                    style={{ maxWidth: '24x', maxHeight: '24px' }}
                />
            </a>
            <div className={`idrdown-content card medium ${show ? "show" : ""}`}
                style={{ transform: 'translate(-48px)' }}
                onMouseLeave={(e) => {e.preventDefault(); setShow(false)}}
            >
                <a onClick={props.onLogoutClick}>Logout</a>
                <a onClick={props.onSettingClick}>Setting</a>
            </div>
        </li>
    )
}
NavItemUser.defaultProps = {
    onLogoutClick: () => { console.log("NavItemUser.onLogoutClick") },
    onSettingClick: () => { console.log("NavItemUser.onSettingClick") }
}

class Topnav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDrContentUser: false,
        }

        this.setShow = this.setShow.bind(this);
    }
    componentDidMount() {
        console.log("Topnav: DidMount");
    }
    componentWillUnmount() {
        console.log("Topnav: componentWillUnmount");
    }

    setShow() {
        this.setState({showDrContentUser: !this.state.showDrContentUser})
    }

    render() {
        let { user } = this.props;
        let { friends, news } = this.props.topbar;

        return (
            <div className="top card">
                <div className="content" style={{ width: '600px' }}>
                    <ul className="inav xlarge">
                        <li className="inav-item">
                            <a className="inav-link">
                                <i className="fa fa-home" />
                            </a>
                        </li>

                        <Friends {...friends} />

                        <News {...news} />

                        {user && <NavItemUser {...user} /> }

                    </ul>
                </div> {/* End Nav Container */}
            </div>
        )
    }
}

function mapStateToProp(state) {
    return { topbar: state.topbar };
}
// function Topnav(props) {
    
// }
// Topnav.componentDidMount = () => {
//     console.log("Topnav: DidMount");
// }

export default connect(mapStateToProp, null)(Topnav);