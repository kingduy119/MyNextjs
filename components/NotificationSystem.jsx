import { connect } from "react-redux";
import { popNotification } from "../store/actions/notification";

const Alert = (props) => 
    <div className={`alert ${props.type}`}> 
        <button
            type="button"
            className="close" 
            data-dismiss="alert"
            onClick={onClose}
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
                {/* {notifications.map(notif => (
                    <Alert type={notif.type}>
                        {notif.body}
                    </Alert>
                ))} */}

                <Alert
                    type="alert-success"
                    onClose={() => onClose(notif)}
                >
                    <strong>Success!</strong> Alert #ModalSystem
                </Alert>

                <div className="alert alert-warning alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Warning!</strong>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    notifications: state.notifications
});
const mapDispatchToProps = (dispatch) => ({
    onClose: (notif) => {dispatch(popNotification(notif))}
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationSystem);

