import React from "react";
import { connect } from "react-redux";
import { popNotification } from "../store/actions/notification";

const Alert = (props) => 
    <div className={`alert ${props.type}`}> 
        <button
            type="button"
            className="close" 
            data-dismiss="alert"
            onClick={props.onClose}
        >&times;</button>
        {props.children}
    </div>;
    
function NotificationSystem(props) {
    const { notifications, onClose } = props;

    return (
        <div className="m_dp-container" id="notifcationSystem">
            <div
                className="m_dp-b-r"
                style={{ padding: "20px" }}
            >
                {notifications.length > 0 &&
                 notifications.map((notif, index) => (
                    <Alert type={notif.type} onClose={() => onClose(index)}>
                        {notif.body}
                    </Alert>
                ))}

                {/* <Alert
                    type="alert-success"
                >
                    <strong>Success!</strong> Alert #ModalSystem
                </Alert>

                <div className="alert alert-warning alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Warning!</strong>
                </div> */}
            </div>
        </div>
    );
}
NotificationSystem.defaultProps = {
    notifications: []
}

const mapStateToProps = (state, ownProps) => ({
    notifications: state.notifications
});
const mapDispatchToProps = (dispatch) => ({
    onClose: (index) => { dispatch(popNotification(index)); },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationSystem);
// export default NotificationSystem;

