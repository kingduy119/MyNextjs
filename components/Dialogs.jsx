import { connect } from "react-redux";

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

const ButtonRegister = (props) => <button
    className="btn btn-primary"
    onClick={props.onClick}
>Register</button>

const ButtonCloseModal = (props) =>  <button
    type="button"
    className="btn btn-danger"
    data-dismiss="modal"
>Close</button>

const FormSignUpValidate = (props) => {
    return (<form className="was-validated">
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

const FormSignInValidate = (props) => {
    return (<form className="was-validated">
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
    </form>)
}

const Register = (props) => (
    <div className="modal-dialog">
       <div className="modal-content">
            <div className="modal-header">
                <h4>Register</h4>
            </div>
            <div className="modal-body">
               <FormSignUpValidate />
            </div>
            <div className="modal-footer">
                <ButtonCloseModal />
                <ButtonRegister onClick={() => alert("Register") } />
            </div>
       </div>
    </div>
)
const RegisterDialog = connect()(Register);



export { RegisterDialog };
