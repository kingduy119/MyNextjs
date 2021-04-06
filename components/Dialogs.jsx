import { connect } from "react-redux";

// #Novalidate
const InputUsername = (props) => <input
    type="text"
    name="uname"
    id="uname"
    className="form-control"
    placeholder="Enter Username"
    required
/>;
const InputPassword = (props) => <input 
    type="password"
    name="pwd"
    id="pwd"
    className="form-control"
    placeholder="Enter Password"
    required
/>


// #Validate
const InputUsernameValidate = (props) => (
    <div className="form-group">
        <label htmlFor="uname">Username</label>
        <InputUsername />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
    </div>);
const InputPasswordValidate = (props) => (
    <div className="form-group">
        <label htmlFor="pwd">Password</label>
        <InputPassword />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
    </div>);


const ButtonSubmit = (props) => <button
    type="submit"
    className="btn btn-primary"
>Submit</button>

const ButtonClose = (props) => <button
    type="button"
    className="close"
    data-dismiss="modal"
>&times;</button>

const ButtonCloseModal = (props) =>  <button
    type="button"
    className="btn btn-danger"
    data-dismiss="modal"
>Close</button>

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
    <div className="modal fade" id="modalRegistation">
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

