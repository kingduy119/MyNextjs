export const InputUsername = (props) => <input
    type="text"
    name="uname"
    id="uname"
    className="form-control"
    placeholder="Enter Username"
    required
/>;

export const InputPassword = (props) => <input 
    type="password"
    name="pwd"
    id="pwd"
    className="form-control"
    placeholder="Enter Password"
    required
/>;

export const InputUsernameValidate = (props) => (
    <div className="form-group">
        <label htmlFor="uname">Username</label>
        <InputUsername />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
    </div>);
export const InputPasswordValidate = (props) => (
    <div className="form-group">
        <label htmlFor="pwd">Password</label>
        <InputPassword />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
    </div>);


export const ButtonSubmit = (props) => <button
    type="submit"
    className="btn btn-primary"
>Submit</button>

export const ButtonClose = (props) => <button
    type="button"
    className="close"
    data-dismiss="modal"
>&times;</button>

export const ButtonCloseModal = (props) =>  <button
    type="button"
    className="btn btn-danger"
    data-dismiss="modal"
>Close</button>



