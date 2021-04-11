import React from "react";
import { connect } from "react-redux";

import { ModalFormSignUp } from "../components/Modals";
import { FormLogin } from "../components/Forms";

const ButtonSignUp = (props) => 
    <a
        data-toggle="modal"
        data-target="#modalRegistation"
        className="my-btn my-white text-center my-link"
    >Sign up</a>;

const ButtnForget = (props) => 
    <a
        className="my-btn my-white text-center"
    >Forget password</a>;

class LoginPage extends React.Component {

    render() {

        return <>
            <div className="container my-dp-container" style={{
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
                        <ButtonSignUp />
                        <ModalFormSignUp id="modalRegistation" />
                    </div>
                    <div className="col-sm-6">
                        <ButtnForget />
                    </div>
                </div>
            </div>
        </>;
    }
}

export default connect()(LoginPage);

