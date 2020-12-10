import react from "react";
import { LikeBoxComponent } from "./Post";

export default function Comment(props) {
    let { user, postBy, content, likes } = props;
    let checkLiked = likes.some(userId => userId === user._id);
    let [liked, setLiked] = react.useState(checkLiked);

    const onHandleEvent = name => e => {
        e.preventDefault();
        if (name === 'write') {
            props.onComment(123)
        }
        else if (name === 'like') {
            props.onCommentLike('like')
            setLiked(!liked);
        }
        else if (name === 'view-likes') {
            props.onCommentLike('comment-viewlikes')
        }
    }

    return (
        <div className="section dp-container block">
            {/* Avatar */}
            <a className="link black dp-t-l" href="#">
                <img
                    className="circle mg-r8"
                    src={postBy.avatarUrl}
                    style={{ width: '20px', height: '20px' }}
                />
            </a>
            {/* Content */}
            <div style={{ marginLeft: '40px' }} >
                <div className="round-8 bg-lightgrey pd-4">
                    <b className="link hv-u">{postBy.displayName}</b><br />
                    {props.content}
                </div>
                <LikeBoxComponent
                    liked={liked}
                    total={likes.lenght}
                    onClickLike={onHandleEvent('like')}
                    onClickView={onHandleEvent('view-likes')}
                />
            </div>
        </div>
    );
}
Comment.defaultProps = {
    postBy: {
        avatarUrl: "/assets/avatar.jpg",
        displayName: "Default Name",
    },
    content: "Comment something",
    likes: [],
};

const CommentInput = (props) => (
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
            />
        </div>
    </div>
);
CommentInput.defaultProps = {
    avatarUrl: "/assets/avatar.jpg",
}

export { CommentInput };