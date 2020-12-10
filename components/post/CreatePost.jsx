import React from "react";

export default function CreatePost(props) {
    let [content, setContent] = React.useState('');

    const create = (e) => {
        e.preventDefault();
        props.onCreate(content);
        setContent('');
    }

    return (
        <div className="card content black-white pd-16 round-16" style={{ width: '600px' }}>
            <input
                name="content"
                className="input block round-16 bor-hide black-lightgrey"
                placeholder="What are you feeling?"
                value={content}
                onChange={e => { e.preventDefault(); setContent(e.target.value); }}
            />
            <hr className="grey" />
            <button
                className="btn border round-8"
                onClick={create}>
                <i className="fa fa-pencil" /> Post
            </button>
        </div>
    );
}


