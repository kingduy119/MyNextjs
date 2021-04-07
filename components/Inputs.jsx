// #Novalidate
export const InputUsername = (props) => (
    <input
        type="text"
        name="uname"
        id="uname"
        className={`form-control ${props.className || props.class}`}
        placeholder="Enter Username"
        required
    />);

export const InputPassword = (props) => (
    <input
        type="password"
        name="pwd"
        id="pwd"
        className={`form-control ${props.className || props.class}`}
        placeholder="Enter Password"
        required
    />);

// #Validate
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