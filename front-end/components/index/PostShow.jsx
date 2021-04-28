import React from "react";
import { Row, Col, Button } from "../common";

const Post = (props) => {
    let { avatarUrl, displayName, content } = props;
    return (
        <Row className="posts card round white round-large" style={{ marginBottom: "10px" }}>
            <Col className="post__col">
                <img className="post__avatar circle" src={avatarUrl || '/assets/avatar.jpg'} />
                <span className="post__time-ago">{`${15} minutes ago`}</span>
                <h4 className="post__display-name">{displayName || 'Empty Name'}</h4>
            </Col>
            <hr className="opacity" />
            <Col className="post__col">
                {content}
            </Col>
            <hr className="opacity" />
            <Col className="post__col">
                <Button className="post__btn btn-dark-teal round-large"
                    onClick={props.onLike}
                >Like</Button>
                <Button className="post__btn btn-dark-teal round-large"
                    onClick={props.onComment}
                >Comment</Button>
            </Col>
        </Row >
    );
}

function PostShow(props) {
    return (
        props.posts.map((post, index) => (
            <Post
                key={index}
                avatarUrl={post.postBy.avatarUrl}
                displayName={post.postBy.displayName}
                content={post.content}
                onLike={(e) => { alert('like') }}
                onComment={(e) => { alert('comment') }}
            />
        ))
    )
}
// <Post
//     key={1}
//     avatarUrl={'post.postBy.avatarUrl'}
//     displayName={'post.postBy.displayName'}
//     content={'post.content'}
//     onLike={(e) => { alert('like') }}
//     onComment={(e) => { alert('comment') }}
// />
PostShow.defaultProps = {
    posts: [],
}

export default PostShow;
