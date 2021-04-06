import { connect } from "react-redux";
import { popNotification } from "../lib/redux/actions/systems"
import { RegisterDialog } from "./Dialogs";

/**
 * #Modal system
 */
function Modal(props) {
    return (
        <div className={`modal ${props.className || ''}`} id="modalGlobal">
            {/* {props.dialog} */}
            <RegisterDialog />
        </div>
    )
}
const mapStateToModal = (state) => ({
    dialog: state.modals.dialog,
})
const ModalSystem = connect(mapStateToModal)(Modal)

/**
 * #Notification system
 */
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

function Notifications(props) {
    const { notifications, onClose } = props;

    return (
        <div className="m_dp-container" id="notifcationSystem"
            style={{zIndex: -1}}
        >
            <div
                className="m_dp-b-r"
                style={{ padding: "20px", maxWidth: "300px" }}
            >
                {notifications.length > 0 &&
                 notifications.map((notif, index) => (
                    <Alert type={notif.type} onClose={() => onClose(index)}>
                        {notif.body}
                    </Alert>
                ))}
            </div>
        </div>
    );
}
Notifications.defaultProps = {
    notifications: []
}

const mapStateToNotifications = (state, ownProps) => ({
    notifications: state.notifications
});
const mapDispatchToNotifications = (dispatch) => ({
    onClose: (index) => { dispatch(popNotification(index)); },
});

const NotificationsSystem = connect(
    mapStateToNotifications, 
    mapDispatchToNotifications
)(Notifications);

export { ModalSystem, NotificationsSystem }

