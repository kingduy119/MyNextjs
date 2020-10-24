import React from "react";

// const Form = (props) => <form {...props}>{props.children}</form>

class Form extends React.Component {
    static Input = (props) => <input {...props} className={`form__input ${props.className || ""}`}>{props.children}</input>;
    static Button = (props) => <button {...props} className={`form__btn ${props.className || ""}`}>{props.children}</button>;
    static Link = (props) => <a {...props} className={`form__link ${props.className || ""}`}>{props.children}</a>;

    static Select = (props) => {
        let options = props.list.map(opt => <option value={opt}>{opt}</option>);
        return <select {...props}>{options}</select>;
    }

    render() { return <form {...this.props}>{this.props.children}</form> }
}
export default Form;