import React from "react";

export default function CreatePost(props) {
    let { user } = props;
    let inputRef = React.createRef();
    const onSend = (e) => {
        e.preventDefault();
        let content = inputRef.current.value;
        if (content === '')
            return inputRef.current.focus();

        props.onCreate({
            userId: user._id,
            content
        });
        inputRef.current.value = '';
        inputRef.current.blur();
    }

    return (
        <div className="card content black-white pd-16 round-16" style={{ width: '600px' }}>
            <input
                ref={inputRef}
                name="content"
                className="input block round-16 bor-hide black-lightgrey"
                placeholder="What are you feeling?"
            />
            <hr className="grey" />
            <button
                className="btn border round-8"
                onClick={onSend}
            >
                <i className="fa fa-pencil" /> Post
            </button>
        </div >
    );
}


