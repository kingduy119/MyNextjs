import React from 'react';
import { connect } from "react-redux";
import { Alerts } from "../components/Systems";
import { ModalFormSignUp } from "../components/Modals";
import { DIALOG_REGISTER, showDialog } from "../lib/redux/actions/systems";

class IndexPage extends React.Component {
    render() {
        return  <>
            <h2>Index Page</h2>
            <Alerts />

            <button
                type="button" 
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#modalRegistation"
            >Show Modal</button>
            <ModalFormSignUp />  
        </>;
    }
}

const mapDispatchToProps = (dispatch) => ({
    onShowRegisterDialog: () => dispatch(showDialog(DIALOG_REGISTER, <RegisterDialog />)),
})

export default connect(null, mapDispatchToProps)(IndexPage);
