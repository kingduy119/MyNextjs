import React from 'react'
import Comment, { CommentInput } from './Comment'
import FeelingsComponent from './Feelings'

// Post Item
function Post(props) {
    let {
        user,
        _id, index, by, createAt, content, comments,
    } = props;
    let commentInputRef = React.createRef(null);

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
        if (name === 'feel') {
            props.onPostFeel(index, { 
                by: user._id, 
                feel: feel ? 'none' : 'heart',
            });
            setFeel(!feel);
        }
        else if (name === 'showfeelings') {
            props.onPostShow(feelings);
        }
    }

    const onCommentInput = (e) => {
        if (e.key === 'Enter' && commentInputRef.current) {
            e.preventDefault();
            props.onPostComment(index, {
                by: user._id,
                content: commentInputRef.current.value,
            });

            commentInputRef.current.value = '';
            commentInputRef.current.blur();
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
                    src={by.avatarUrl}
                    style={{ width: '20px', height: '20px' }}
                /> <b className="hv-u">{by.displayName}</b>
            </a>
            <i className="right">{createAt}</i>

            {/* <!--- Content ---> */}
            <hr className="opacity grey" />
            <div className="text-left">{content}</div>

            {/* <!--- Feelings ---> */}
            <hr className="opacity grey" />
            <FeelingsComponent
                hasFeel={feel}
                total={feelings.length}
                onFeelClick={onHandleEvent('feel')}
                onShowClick={onHandleEvent('showfeelings')}
            />

            {/* <!--- Comments ---> */}
            <hr className="opacity grey" />
            <CommentInput
                avatarUrl={user ? user.avatarUrl : '/assets/avatar.jpg'}
                inputRef={commentInputRef}
                onCommentKeyPress={onCommentInput}
            />

            {comments.length > 0 && comments.map((propsComment, iCmt) =>
                <Comment
                    {...propsComment}
                    user={user}
                    post={{ index, _id }}
                    index={iCmt}
                    onCommentFeel={props.onPostCommentFeel}
                    onCommentShowFeelings={props.onPostCommentShowFeelings}
                />)
            }

            {/* for DEV */}
            {/* <Comment
                onComment={props.onPostComment}
                onFeel={props.onPostCommentFeel}
                onShow={props.onPostCommentShow}
            /> */}
        </div>
    );
}
Post.defaultProps = {
    createAt: 'NaN',
    by: {
        avatarUrl: "/assets/avatar.jpg",
        displayName: "NaN",
    },
    content: 'NaN',
    feelings: [],
    comments: [],
}

export default Post;