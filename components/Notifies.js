// import React, { useState } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { Alert, Button } from "react-bootstrap";
// import { popNotify } from "../lib/store/notification";

// function Notify(props) {
//     const [show, setShow] = useState(true);
//     return (
//         <Alert
//             show={show}
//             variant={props.variant}
//             onClose={props.onClose}
//             dismissible
//         >
//             <Alert.Heading>{props.title}</Alert.Heading>
//             {props.content}
//         </Alert>
//     )
// }

// Notify.defaultProps = {
//     variant: "primary",
//     title: "Notification",
// }

// function Notification(props) {
//     return (
//         props.notifies.map((item, index) => (
//             <Notify
//                 title={item.title}
//                 content={item.content}
//                 onClose={() => props.onClose(index)}
//             />
//         ))
//     );
// }

// const mapStateToProps = (state) => ({
//     notifies: state.notifies,
// })

// const mapDipatchToProps = (dispatch) => ({
//     onClose: (key) => {
//         dispatch(popNotify(key));
//     }
// });

// export default connect(mapStateToProps, mapDipatchToProps)(Notification);