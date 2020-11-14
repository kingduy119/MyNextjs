import React from "react";

class Modal extends React.Component {
    static Close = (props) => <span className="modal__close" onClick={props.onClick}>&times;</span>
    static Content = (props) => <div {...props} className={`modal__content ${props.className || ''}`} >{props.children}</div>

    render() {
        return (
            <div className="modal" style={{ display: this.props.isShow ? 'block' : 'none' }}>
                {this.props.children}
            </div>
        )
    }
}

export default Modal;

