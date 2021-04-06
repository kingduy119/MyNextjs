import React from 'react';
import { connect } from "react-redux";
import { ModalSystem, NotificationsSystem } from "../components/Systems";
import { RegisterDialog } from "../components/Dialogs";
import { DIALOG_REGISTER, showDialog } from "../lib/redux/actions/systems";

class IndexPage extends React.Component {
    render() {
        return  <>
            <h2>Index Page</h2>
            <NotificationsSystem />
            
            <ModalSystem />
            
            <button
                type="button" 
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#modalGlobal"
                onClick={this.props.onShowRegisterDialog}
            >Show Modal</button>

        </>;
    }
}

const mapDispatchToProps = (dispatch) => ({
    onShowRegisterDialog: () => dispatch(showDialog(DIALOG_REGISTER, <RegisterDialog />)),
})

export default connect(null, mapDispatchToProps)(IndexPage);
// export default IndexPage;
