

// #Novalidate
export const InputValidate = (props) => {
    return (
        <div className="form-group">
            <input  {...props}
                className={`
                    form-control
                    ${props.feedback.length > 0 ? "is-invalid" : "is-valid"}
                `}
            />
            <div className="invalid-feedback">{props.feedback}</div>
        </div>
    );
}

export const InputUsername = (props) => (
    <input
        type="text"
        name="uname"
        id="uname"
        className={`form-control ${props.className || props.class || ''} is-valid`}
        placeholder="Enter Username"
        required
        onChange={props.onChange}
    />);

export const InputPassword = (props) => (
    <input
        type="password"
        name="pwd"
        id="pwd"
        className={`form-control ${props.className || props.class}`}
        placeholder="Enter Password"
        required
        onChange={props.onChange}
    />);

// #Validate
export const InputUsernameValidate = (props) => (
<input
    {...props}
    type="text"
    name="uname"
    id="uname"
    placeholder="Enter Username"
    required
    className={`
        form-control 
        ${props.isValid ? "is-valid" : "is-invalid"}
    `}
/>);

export const InputPasswordValidate = (props) => (
<input
    {...props}
    type="password"
    name="pwd"
    id="pwd"
    placeholder="Enter Password"
    required
    className={`
        form-control 
        ${props.isValid ? "is-valid" : "is-invalid"}
    `}
/>);

export const InputFirstName = (props) => (
<input
    {...props}
    type="text"
    name="firstname"
    id="firstname"
    placeholder="First Name"
    className="form-control"
/>);

export const InputLastName = (props) => (
<input
    {...props}
    type="text"
    name="lastname"
    id="lastname"
    placeholder="Last Name"
    className="form-control"
/>);



