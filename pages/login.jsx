import React from "react";
import { connect } from "react-redux";

import { ModalFormSignUp } from "../components/Dialogs";
import { FormLogin } from "../components/Forms";

class LoginPage extends React.Component {

    render() {
        let btnSignup = <a
            data-toggle="modal"
            data-target="#modalRegistation"
            className="my_btn my_white text-center"
        >Sign up</a>;

        let btnForget = <a
            className="my_btn my_white text-center"
        >Forget password</a>;

        return <>
            <div className="container my_dp-container" style={{
                borderRadius: "5px 5px 0 0",
                backgroundColor: "#f2f2f2",
            }}>
               <FormLogin />
            </div>
            
            <div className="container" style={{
                borderRadius: "0 0 4px 4px",
                backgroundColor: "#666"
            }}>
                <div className="row">
                    <div className="col-sm-6">
                        {btnSignup}
                    </div>
                    <div className="col-sm-6">
                        {btnForget}
                    </div>
                </div>
            </div>
            <ModalFormSignUp id="modalRegistation" />
        </>;
    }
}

export default connect()(LoginPage);

