import React from "react";


class Form extends React.Component {
    static Select = (props) => {
        let options = props.list.map(opt => <option value={opt}>{opt}</option>);
        return <select {...props}>{options}</select>;
    }

    render() { return <form {...this.props}>{this.props.children}</form> }
}
export default Form;