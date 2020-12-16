import react from "react";
import Comment, { CommentInput } from "./Comment";

// Post Item
function Post(props) {
    let {
        user,
        _id, index, postBy, createAt, content, likes, comments
    } = props;

    let check = likes.some(userId => userId === user._id);
    let [liked, setLiked] = react.useState(check);
    let commentInput = react.createRef(null);

    const onHandleEvent = name => e => {
        e.preventDefault();
        if (name === 'like') {
            props.onPostLike(index, { userId: user._id, liked });
            setLiked(!liked);
        }
        else if (name === 'viewlikes') {
            props.onPostViewLikes(likes);
        }
    }

    const onCommentInput = (e) => {
        if (e.key === 'Enter' && commentInput.current) {
            e.preventDefault();
            let data = {
                userId: user._id,
                content: commentInput.current.value
            };
            props.onPostComment(index, data);
            commentInput.current.value = '';
            commentInput.current.blur();
        }
    }

    return (
        <div
            key={index}
            className="section content card border pd-16 round-16"
            style={{ width: '600px' }}
        >
            {/* <!--- Header ---> */}
            <a className="link black" href="#">
                <img
                    className="circle mg-r8"
                    src={postBy.avatarUrl}
                    style={{ width: '20px', height: '20px' }}
                /> <b className="hv-u">{postBy.displayName}</b>
            </a>
            <i className="right">{createAt}</i>

            {/* <!--- Content ---> */}
            <hr className="opacity grey" />
            <div className="text-left">{content}</div>

            {/* <!--- Likes ---> */}
            <hr className="opacity grey" />
            <LikeBoxComponent
                liked={liked}
                total={likes.length}
                onClickLike={onHandleEvent('like')}
                onClickView={onHandleEvent('viewlikes')}
            />

            {/* <!--- Comments ---> */}
            <hr className="opacity grey" />
            <CommentInput
                avatarUrl={user.avatarUrl}
                inputRef={commentInput}
                onCommentKeyPress={onCommentInput}
            />

            {comments && comments.map((propsComment, iCmt) =>
                <Comment
                    {...propsComment}
                    user={user}
                    post={{ index, _id }}
                    index={iCmt}
                    onLike={props.onPostCommentLike}
                    onViewLikes={props.onPostCommentViewLikes}
                />)
            }

            {/* for DEV */}
            {/* <Comment
                onComment={props.onPostComment}
                onCommentLike={props.onPostCommentLike}
                onComentViewLikes={props.onPostCommentViewLikes}
            /> */}
        </div>
    );
}
Post.defaultProps = {
    createAt: '15 minutes ago',
    postBy: {
        avatarUrl: "/assets/avatar.jpg",
        displayName: "No Name",
    },
    content: 'No content',
    likes: [],
    comments: [],
}

//#2 Like
const LikeBoxComponent = (props) => {
    return (
        <div className="block">
            <i
                className={`fa ${props.liked ? 'fa-heart' : 'fa-heart-o'} 
                mg-r4 link red`}
                onClick={props.onClickLike}
            />
            <a
                className="link hv-u"
                onClick={props.onClickView}
            >{props.total}</a>
        </div>
    )
}
LikeBoxComponent.defaultProps = {
    liked: false,
    total: 0,
    onClickLike: () => alert('Like Box Like'),
    onClickView: () => alert('Like Box View'),
};

export default Post;
export { LikeBoxComponent };