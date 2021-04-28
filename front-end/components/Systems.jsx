import { connect } from "react-redux";
import { popNotification } from "../lib/redux/actions/systems"

/**
 * Alert: connect(mapStateToProps, mapDispatchToProps)(component)
 */
export const Alerts = connect(
    (state) => ({
        alerts: state.alerts
    }),
    (dispatch) => ({
        onClose: (index) => dispatch(popNotification(index))
    })
)((props) => {
    const listAlert = props.alerts.map((alert, index) => (
        <div key={index} className={`alert ${alert.type}`}>
            <button
                type="button"
                className="close"
                data-dismiss="alert"
                onClick={() => props.onClose(index)}
            >&times;</button>
            {alert.body}
        </div>
    ));
    return(
        <div className="my_dp-container" id="notifcationSystem" style={{zIndex: -1}}>
            <div className="my_dp-b-r" style={{ padding: "20px", maxWidth: "300px" }}>
                {listAlert}
            </div>
        </div>
    );
});


