import { useState } from "react";
import { connect } from "react-redux";
import { 
    InputUsernameValidate, InputPasswordValidate,
    InputFirstName, InputLastName,
    InputCheckboxList, InputRadioList, InputSelectList,
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

export const ModalFormSignUp = connect()((props) => {
    let [uname, setUname] = React.useState('');
    let [pwd, setPwd] = React.useState('');

    return (
    <div className="modal fade" id={props.id}>
        <div className="modal-dialog">
            <form>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Register</h4>
                        <ButtonClose />
                    </div>
                    <div className="modal-body">
                        <div className="row form-group">
                            <div className="col"><InputFirstName /></div>
                            <div className="col"><InputLastName /></div>
                        </div>
                        <div className="form-group">
                            <InputUsernameValidate 
                                isValid={uname.length >= 6}
                                onChange={e => setUname(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <InputPasswordValidate 
                                isValid={pwd.length >= 6}
                                onChange={e => setPwd(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <InputCheckboxList 
                                className="form-check-inline"
                                options={["opt1", "opt1", "opt1"]}
                            />
                        </div>

                        <div className="form-group">
                            <InputRadioList 
                                className="form-check-inline"
                                options={["opt1", "opt1", "opt1"]}
                            />
                        </div>
                        <div className="form-group">
                            <InputSelectList options={[1, 2, 3]} />
                        </div>
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

export const ModalFormSignIn = (props) => { 
    let [uname, setUname] = React.useState('');
    let [pwd, setPwd] = React.useState('');

    return (
    <div className="modal fade">
        <div className="modal-dialog">
            <form className="needs-validation" novalidate>
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Sign Up</h4>
                    <ButtonClose />
                </div>
                <div className="modal-body">
                    <InputUsernameValidate 
                        isValid={uname.length > 6}
                        onChange={e => setUname(e.target.value)}
                    />
                    <InputPasswordValidate 
                        isValid={pwd.length > 6}
                        onChange={e => setPwd(e.target.value)}
                    />
                </div>
                <div className="modal-footer">
                    <ButtonCloseModal />
                </div>
            </div>
            </form>
        </div>
    </div>);
}

