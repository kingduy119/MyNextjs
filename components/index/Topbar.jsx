import React from "react";
import { connect } from "react-redux";

// function Topbar(props) {
//     let { profile, news } = props.topnav;
//     let { user } = props;
// }

function Friends(props) {
    let { notifications } = props;
    return (
        <li className="inav__item idrdown" id="topbarFriends">
            <a className="inav__link idrdown__btn">
                <i className="fa fa-user" />
                {notifications && notifications.length > 0 &&
                    <span
                        className="badge circle small bg-red"
                    // style={{ padding: '0px 4px' }}
                    >{notifications.length}</span>
                }
            </a>
            <div className="idrdown__content card">
                <a>link</a>
                <a>link</a>
            </div>
        </li>
    )
}

function News(props) {
    let { notifications } = props;
    return (
        <li className="inav__item idrdown" id="topbarNew">
            <a className="inav__link idrdown__btn">
                <i className="fa fa-bell" />
                {notifications && notifications.length > 0 &&
                    <span
                        className="badge circle small bg-red"
                    // style={{ padding: '0px 4px', transform: 'translate(-4px)' }}
                    >{notifications.length}</span>
                }
            </a>
            <div className="idrdown__content card">
                <a>link</a>
                <a>link</a>
            </div>
        </li>
    )
}

function mapStateToProp(state) {
    return { topbar: state.topbar };
}
function Topnav(props) {
    let { user } = props;
    let { friends, news } = props.topbar;
    return (
        <div className="top card">
            <div className="content" style={{ width: '600px' }}>
                <ul className="inav xlarge">
                    <li className="inav__item">
                        <a className="inav__link">
                            <i className="fa fa-home" />
                        </a>
                    </li>

                    <Friends {...friends} />

                    <News {...news} />

                    {/* User Setting */}
                    {user &&
                        <li className="inav__item right idrdown">
                            <a className="inav__link idrdown__btn"
                                style={{ padding: '6.5px' }}
                            >
                                <img
                                    className="circle"
                                    src={user.avatarUrl || "/assets/avatar.jpg"}
                                    style={{ maxWidth: '24x', maxHeight: '24px' }}
                                />
                            </a>
                            <div className="idrdown__content card"
                                style={{ transform: 'translate(-48px)' }}
                            >
                                <a>Logout</a>
                                <a>Setting</a>
                            </div>
                        </li>
                    }
                    {/* End User Setting*/}
                </ul>
            </div> {/* End Nav Container */}
        </div>
    )
}


export default connect(mapStateToProp, null)(Topnav);