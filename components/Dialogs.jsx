import { connect } from "react-redux";
import { 
    InputUsername, InputUsernameValidate,
    InputPassword, InputPasswordValidate,
} from "./Inputs";
import {
    ButtonClose, ButtonSubmit, ButtonCloseModal
} from "./Buttons";


const FormSignUp = (props) => {
    return (
    <form>
        <div className="form-group">
            <label htmlFor="uname">Username</label>
            <InputUsername />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group">
            <labe htmlFor="pwd">Password</labe>
            <InputPassword />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
        </div>
    </form>);
}

export const FormSignInValidate = connect()(props => { return (
    <form className="needs-validation" novalidate>
        <InputUsernameValidate />
        <InputPasswordValidate />
    </form>);
})

export const ModalFormSignUp = connect()((props) => {
    return (
    <div className="modal fade" id={props.id}>
        <div className="modal-dialog">
            <form className="was-validated">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Register</h4>
                        <ButtonClose />
                    </div>
                    <div className="modal-body">
                        <InputUsernameValidate />
                        <InputPasswordValidate />
                    </div>
                    <div className="modal-footer">
                        <ButtonCloseModal/>
                        <ButtonSubmit />
                    </div>
                </div>
            </form>
        </div>
    </div>);
});

export const ModalFormSignIn = (props) => { return (
    <div className="modal fade">
        <div className="modal-dialog">
            <form className="needs-validation" novalidate>
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Sign Up</h4>
                    <ButtonClose />
                </div>
                <div className="modal-body">
                    <InputUsernameValidate />
                    <InputPasswordValidate />
                </div>
                <div className="modal-footer">
                    <ButtonCloseModal />
                </div>
            </div>
            </form>
        </div>
    </div>);
}

