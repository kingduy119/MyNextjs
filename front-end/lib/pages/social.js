import React from 'react';
import useAuth from '../useAuth';

import Topbar from '../../components/index/Topbar';
import CreatePost from '../../components/post/CreatePost';
import Post from '../../components/post/Post';

// APIS:
import PostAPI from '../api/post';

export default IndexPage;

function IndexPage(props) {
  return (
    <>
      <Topbar user={props.user} />
      {/* <Slidebar /> */}
      <SocialContent user={props.user} />
    </>
  );
} // end IndexPage

// #3 Post CRRUD
class SocialContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.onHandleEvent = this.onHandleEvent.bind(this);
  }

  /**
   * Lifecycle
   */
  render = () => {
    const { posts } = this.state;
    posts.sort((a, b) => {
      console.log(a.createAt >= b.createAt);
      return a.createAt > b.createAt;
    });
    const { user } = this.props;

    return (
      <div style={{ marginTop: '90px' }}>
        {/* <!--- Create New Post ---> */}
        <CreatePost user={user} onCreate={this.onHandleEvent('create')} />

        {/* <!--- Show Post ---> */}
        {posts &&
          posts.map((post, iPost) => (
            <Post
              {...post}
              index={iPost}
              user={user}
              onPostFeel={this.onHandleEvent('feel')}
              onPostShow={this.onHandleEvent('showfeelings')}
              onPostComment={this.onHandleEvent('comment')}
              onPostCommentFeel={this.onHandleEvent('comment-feel')}
              onPostCommentShowFeelings={this.onHandleEvent('comment-showfeelings')}
            />
          ))}
      </div>
    );
  }; // end render()

  componentDidMount = async () => {
    const data = await PostAPI.onReadMany();
    if (data) {
      this.setState({ posts: data.posts });
    }
  }; // end componentDidMount

  onHandleEvent = (name) => {
    if (name === 'create') {
      return async ({ by, content }) => {
        const { posts } = this.state;
        const res = await PostAPI.onCreate({ action: name, by, content });

        if (res && res.post) {
          posts.push(res.post);
          this.setState({ posts });
        }
      };
    }
    if (name === 'delete') {
      // Here will implement delete post by Id
    } else if (name === 'feel') {
      return async (iPost, { by, feel }) => {
        const { posts } = this.state;
        const res = await PostAPI.idUpdate(posts[iPost]._id, {
          action: name,
          by,
          feel,
        });

        console.log(`RES: ${JSON.stringify(res)}`);
        if (res && res.feelings) {
          console.log(JSON.stringify(res.feelings));
          posts[iPost].feelings = res.feelings;
          this.setState({ posts });
        }
      };
    } else if (name === 'showfeelings') {
      return (likes) => {
        alert(JSON.stringify(likes));
      };
    } else if (name === 'comment') {
      return async (iPost, { by, content }) => {
        const { posts } = this.state;
        const res = await PostAPI.idCreate(posts[iPost]._id, {
          action: name,
          by,
          content,
        });

        if (res && res.comments) {
          posts[iPost].comments = res.comments;
          this.setState({ posts });
        }
      };
    } else if (name === 'comment-feel') {
      return async (iPost, iCmt, { by, feel }) => {
        const { posts } = this.state;
        const res = await PostAPI.idUpdate(posts[iPost]._id, {
          commentId: posts[iPost].comments[iCmt]._id,
          action: name,
          by,
          feel,
        });
        if (res && res.feelings) {
          posts[iPost].comments[iCmt].feelings = res.feelings;
          this.setState({ posts });
        }
      };
    } else if (name === 'comment-showfeelings') {
      return (likes) => {
        alert(`comment: ${JSON.stringify(likes)}`);
      };
    } else if (name === 'comment-delete') {
    }
  }; // end onHandleEvent
} // end SocialContent class
SocialContent.defaultProps = { posts: [] };

const dataTest = [
  {
    comments: [],
    _id: '5f83501a1753c819b45f4f79',
    createAt: '2020-10-11T18:02:20.804Z',
    content: 'bbb',
    postBy: '5f6cca5f9c22f218182ffef0',
    likes: ['5f6cca5f9c22f218182ffef0'],
    feelings: [],
  },
  {
    comments: [],
    _id: '5f840483f9855d05989593a1',
    createAt: '2020-10-12T07:23:11.772Z',
    content: 'aaasss',
    postBy: '5f840473f9855d05989593a0',
    likes: ['5f7991cb5f85720092d68c35', '5f7991cb5f85720092d68c35', '5f6cca5f9c22f218182ffef0'],
    feelings: [
      {
        _id: '5fe3a76b4cd5491aecc62b50',
        by: { displayName: 'New Member', _id: '5f6d72330fabe814a4e50834' },
        kind: 'heart',
      },
      {
        _id: '5fe3a7974cd5491aecc62b51',
        by: {
          displayName: 'duy hoang',
          _id: '5f6cca359c22f218182ffeef',
          avatarUrl:
            'https://lh3.googleusercontent.com/a-/AOh14Gi9XEgpnaGCsBP_I4cS1F55x1KB3jf3DyIql0JN',
        },
        kind: 'none',
      },
      {
        _id: '5fe4488e7cadc91f10b96c25',
        by: { displayName: 'New Member', _id: '5f7acefbcf69de1da40fff13' },
        kind: 'none',
      },
    ],
  },
  {
    comments: [],
    _id: '5f9427fc7132520664d34095',
    createAt: '2020-10-24T13:10:52.683Z',
    content: 'create new post, optimize',
    postBy: '5f6cca5f9c22f218182ffef0',
    likes: ['5f6cca5f9c22f218182ffef0'],
    feelings: [],
  },
  {
    comments: [],
    _id: '5f948f89505d1313c4a00558',
    createAt: '2020-10-24T20:32:07.520Z',
    content: 'asdasdasdad',
    postBy: '5f6cca5f9c22f218182ffef0',
    likes: ['5f6cca5f9c22f218182ffef0'],
    feelings: [
      {
        _id: '5fe4cfe7945fa214acef76da',
        by: { displayName: 'New Member', _id: '5f7acefbcf69de1da40fff13' },
        kind: 'none',
      },
      {
        _id: '5fe4d2af04861604a037fa3e',
        by: { displayName: 'New Member', _id: '5f7acefbcf69de1da40fff13' },
        kind: 'heart',
      },
      {
        _id: '5fe4d2de76b67619189db1a3',
        by: { displayName: 'New Member', _id: '5f7acefbcf69de1da40fff13' },
        kind: 'heart',
      },
      {
        _id: '5fe4d40e2785f81ae4ba3cea',
        by: {
          displayName: 'duy hoang',
          _id: '5f6cca359c22f218182ffeef',
          avatarUrl:
            'https://lh3.googleusercontent.com/a-/AOh14Gi9XEgpnaGCsBP_I4cS1F55x1KB3jf3DyIql0JN',
        },
        kind: 'heart',
      },
      { _id: '5fe4d6358803221a340720ba', kind: null },
    ],
  },
  {
    comments: [],
    _id: '5f94c68599e9000092bd62f0',
    createAt: '2020-10-25T00:22:22.600Z',
    content: 'hhhhhh',
    postBy: '5f6cca5f9c22f218182ffef0',
    likes: ['5f6cca5f9c22f218182ffef0'],
    feelings: [],
  },
  {
    comments: [],
    _id: '5f94c68d99e9000092bd62f1',
    createAt: '2020-10-25T00:22:22.600Z',
    content: 'heyyyyyy',
    postBy: '5f6cca5f9c22f218182ffef0',
    likes: ['5f6cca5f9c22f218182ffef0'],
    feelings: [],
  },
  {
    comments: [],
    _id: '5f9723293cf8dc176c4ec9dc',
    createAt: '2020-10-26T19:22:54.950Z',
    content: 'asdasdasda',
    postBy: '5f6cca5f9c22f218182ffef0',
    likes: ['5f6cca5f9c22f218182ffef0'],
    feelings: [],
  },
  {
    comments: [],
    _id: '5f9723456801e921d004360f',
    createAt: '2020-10-26T19:27:52.444Z',
    content: '1',
    postBy: '5f6cca5f9c22f218182ffef0',
    likes: ['5f6cca5f9c22f218182ffef0'],
    feelings: [],
  },
  {
    comments: [],
    _id: '5f9723516801e921d0043610',
    createAt: '2020-10-26T19:27:52.444Z',
    content: '22',
    postBy: '5f6cca5f9c22f218182ffef0',
    likes: ['5f6cca5f9c22f218182ffef0'],
    feelings: [],
  },
  {
    comments: [],
    _id: '5f9a2f1aca641f2274337d72',
    createAt: '2020-10-29T02:55:01.375Z',
    content: 'abczyz',
    postBy: '5f6cca5f9c22f218182ffef0',
    likes: ['5f6cca5f9c22f218182ffef0'],
    feelings: [],
  },
];
