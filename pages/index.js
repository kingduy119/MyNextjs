import React from "react";
import useAuth from "../lib/useAuth"

import Topbar from "../components/index/Topbar";
import CreatePost from "../components/post/CreatePost";
import Post from "../components/post/Post";
// APIS:
import PostAPI from "../lib/api/post";

export default useAuth(IndexPage);
// export default IndexPage;

function IndexPage(props) {
  return (
    <>
      <Topbar />
      {/* <Slidebar /> */}
      <SocialContent user={props.user} />
    </>
  );
}//end IndexPage

// #3 Post CRRUD
class SocialContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.onHandleEvent = this.onHandleEvent.bind(this);
  }

  /**
   * Lifecycle
   */
  render = () => {
    let { posts } = this.state;
    return (
      <div className="pd-32" id="socialContent" style={{ marginTop: '90px' }} >
        {/* <!--- Create New Post ---> */}
        <CreatePost
          user={this.props.user}
          onCreate={this.onHandleEvent('create')}
        />

        {/* <!--- Show Post ---> */}
        {posts && posts.map((post, iPost) =>
          <Post
            {...post}
            index={iPost}
            user={this.props.user}
            onPostLike={this.onHandleEvent('like')}
            onPostViewLikes={this.onHandleEvent('viewlikes')}
            onPostComment={this.onHandleEvent('comment')}
            onPostCommentLike={this.onHandleEvent('comment-like')}
            onPostCommentViewLikes={this.onHandleEvent('comment-viewlikes')}
          />
        )}
      </div>
    )
  }//end render()

  componentDidMount = async () => {
    let data = await PostAPI.onReadMany();
    if (data) { this.setState({ posts: data.posts }); }
  }//end componentDidMount

  /**
   * Handle Event (post & comment)
   * create 
   * delete 
   * like-unlike 
   * viewlikes
   */
  onHandleEvent = (name) => {
    if (name === 'create') {
      return async ({ userId, content }) => {
        let posts = this.state.posts;
        let req = { action: name, userId, content };
        let res = await PostAPI.onCreate(req);
        if (res && res.post) {
          posts.push(res.post);
          this.setState({ posts });
        }
      }
    }
    else if (name === 'delete') { }
    else if (name === 'like') {
      return async (iPost, { userId, liked }) => {
        let posts = this.state.posts;
        let req = { action: !liked ? name : 'unlike', userId };
        let res = await PostAPI.onUpdate(posts[iPost]._id, req);
        if (res && res.likes) {
          posts[iPost].likes = res.likes;
          this.setState({ posts });
        }
      }
    }
    else if (name === 'viewlikes') {
      return (likes) => {
        alert(JSON.stringify(likes));
      }
    }
    else if (name === 'comment') {
      return async (iPost, { userId, content }) => {
        let posts = this.state.posts;
        let req = { action: name, userId, content }
        let res = await PostAPI.onUpdate(posts[iPost]._id, req);
        if (res && res.comments) {
          posts[iPost].comments = res.comments;
          this.setState({ posts });
        }
      }
    }
    else if (name === 'comment-like') {
      return async (iPost, { iCmt, userId, liked }) => {
        let posts = this.state.posts;
        let req = {
          action: !liked ? name : 'comment-unlike',
          commentId: posts[iPost].comments[iCmt]._id,
          userId,
        };
        let res = await PostAPI.onUpdate(posts[iPost]._id, req);
        if (res && res.likes) {
          posts[iPost].comments[iCmt].likes = res.likes;
          this.setState({ posts });
        }
      }
    }
    else if (name === 'comment-viewlikes') {
      return (likes) => {
        alert(`comment: ${JSON.stringify(likes)}`);
      }
    }
    else if (name === 'comment-delete') { }
  }//end onHandleEvent

}//end SocialContent class
SocialContent.defaultProps = { posts: [] }



