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

const NewsContentLinkItem = (props) => (
    <a 
        id={props._id}
        href={`#post#${props._id}`}
        className="block round hv-black-grey"
    >
        <img 
            className="circle mg-r4 mg-t4 left"
            src={props.by.avatarUrl}
            style={{ width: '20px', height: '20px' }}
        />
        <div style={{marginLeft: "25px"}}>
            <div
                className="over-hidden pd-4"
                style={{ width: "280px", maxHeight: "80px"}}
            >
                <h3>{props.by.displayName}</h3>
                <p>Have feel <b>LIKE</b> your post</p>
            </div>
            <i>{props.createAt}</i>
        </div>
    </a>
)
function News(props) {
    let { notifications } = props;
    let newsNotif = notifications.filter(notif => notif.state == "new");

    return (
        <li className="inav-item idrdown" >
            <a
                className="inav-link idrdown-btn"
                onClick={(e) => {
                    e.preventDefault();
                    let tag = document.getElementById("idrdownNews");
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
                id="idrdownNews" 
                className="idrdown-content card round medium"
            >
                <div className="pd-8 bor-b">
                    <h1>Notifications</h1>
                </div>
                <div className="over-scroll-y" style={{maxHeight: "800px"}}>
                    {notifications && notifications.length > 0 &&
                        notifications.map(notif => (
                            <NewsContentLinkItem {...notif} />
                        ))
                    }
                </div>
            </div>
        </li>
    )
}


function NavItemUser(props) {
    return (
        <li className="inav-item right idrdown">
            <a className="inav-link idrdown-btn"
                style={{ padding: '6.5px' }}
                onClick={(e) => {
                    e.preventDefault();
                    let tag = document.getElementById("idrdrownUser");
                    tag.classList.toggle("show");
                }}
            >
                <img
                    className="circle idrdown-icon"
                    src={ props.avatarUrl || "/assets/avatar.jpg"}
                    style={{ maxWidth: '24x', maxHeight: '24px' }}
                />
            </a>
            <div 
                id="idrdrownUser"
                className="idrdown-content card round medium pd-8"
                style={{ transform: 'translate(-48px)' }}
            >
                <a href="/v1/signout">Logout</a>
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