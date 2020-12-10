import react from "react";
import Comment, { CommentInput } from "./Comment";

// Post Item
function Post(props) {
    // Raw data
    let {
        user,
        index, postBy, createAt, content, likes, comments
    } = props;

    let check = likes.some(userId => userId === user._id);
    let [liked, setLiked] = react.useState(check);

    const onHandleEvent = name => e => {
        e.preventDefault();
        if (name === 'like') {
            // props.onPostLike(index, user, liked);
            props.onPostLike(123, 'duyid', liked);
            setLiked(!liked);
        }
        else if (name === 'view-likes') {
            props.onPostViewLikes(likes);
        }
    }

    return (
        <div key={index} className="section content card border pd-16 round-16" style={{ width: '600px' }}>
            {/* <!--- Post Header ---> */}
            <a className="link black" href="#">
                <img
                    className="circle mg-r8"
                    src={postBy.avatarUrl}
                    style={{ width: '20px', height: '20px' }}
                /> <b className="hv-u">{postBy.displayName}</b>
            </a>
            <i className="right">{createAt}</i>

            {/* <!--- Post Content ---> */}
            <hr className="opacity grey" />
            <div className="text-left">
                {content}
            </div>

            {/* <!--- Post display like ---> */}
            <hr className="opacity grey" />
            <LikeBoxComponent
                liked={liked}
                total={likes.lenght}
                onClickLike={onHandleEvent('like')}
                onClickView={onHandleEvent('view-likes')}
            />

            {/* <!--- Post display list comment ---> */}
            <hr className="opacity grey" />
            <CommentInput />
            {comments.map(doc => (
                <Comment {...doc} />
            ))}

            {/* for DEV */}
            <Comment
                onComment={props.onPostComment}
                onCommentLike={props.onPostCommentLike}
                onComentViewLikes={props.onPostCommentViewLikes}
            />
        </div>
    );
}
Post.defaultProps = {
    postBy: {
        avatarUrl: "/assets/avatar.jpg",
        displayName: "Default Name",
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
    total: 0,
    onClickLike: () => alert('Like Box Like'),
    onClickView: () => alert('Like Box View'),
};

export default Post;
export { LikeBoxComponent };