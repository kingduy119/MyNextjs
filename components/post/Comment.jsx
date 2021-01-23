import react from 'react';
import FeelingsComponent from './Feelings'

export default function Comment(props) {
    let { user, post, index, by, content } = props;

    let feelings = props.feelings.filter(fls => fls.kind !== 'none');
    let check = feelings.length > 0 ?
        feelings.some(fls => {
            if(fls.by) {
                return fls.by._id == user._id
            }
        }) : false;
    let [feel, setFeel] = React.useState(check);

    const onHandleEvent = name => e => {
        e.preventDefault();
        if (name === "comment-feel") {
            props.onCommentFeel(post.index, index, { 
                by: user._id, 
                feel: feel ? 'none' : 'heart', 
            });
            setFeel(!feel);
        }
        else if (name === "comment-show") { 
            // props.onShow(feelings);
            alert(JSON.stringify(feelings));
        }
    }

    return (
        <div className="section dp-container block">
            {/* Avatar */}
            <a className="link black dp-t-l" href="#">
                <img
                    className="circle mg-r8"
                    src={by.avatarUrl}
                    style={{ width: '20px', height: '20px' }}
                />
            </a>
            {/* Content */}
            <div style={{ marginLeft: '40px' }} >
                <div className="round-8 bg-lightgrey pd-4">
                    <b className="link hv-u">{by.displayName}</b><br />
                    {content}
                </div>
                <FeelingsComponent
                    hasFeel={feel}
                    total={feelings.length}
                    onFeelClick={onHandleEvent("comment-feel")}
                    onShowClick={onHandleEvent("comment-show")}
                />
            </div>
        </div>
    );
}
Comment.defaultProps = {
    by: {
        avatarUrl: "/assets/avatar.jpg",
        displayName: "NaN",
    },
    content: "NaN",
    feelings: [],
    onCommentFeel: () => {},
};

function CommentInput(props) {
    return (
        <div className="section dp-container block">
            <img
                className="circle mg-r8 dp-t-l"
                src={props.avatarUrl}
                style={{ width: '20px', height: '20px' }}
            />
            <div style={{ marginLeft: '40px' }} >
                <input
                    className="input bor-hide round-16 black-lightgrey block"
                    placeholder="Writing comment...."
                    style={{ outline: 'none' }}
                    ref={props.inputRef}
                    onKeyPress={props.onCommentKeyPress}
                />
            </div>
        </div>
    );
}
CommentInput.defaultProps = {
    avatarUrl: "/assets/avatar.jpg",
}

export { CommentInput };