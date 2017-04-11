import React from 'react';
import CommentList from '../../comments/containers/comment_list';


class Post extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        {this.props.post.saving ? <p>Saving...</p> : null}
        <h2>{this.props.post.title}</h2>
        <p>
          {this.props.post.content}
        </p>
        <div>
          <h4>Comments</h4>
          <CommentList postId={this.props.post._id}/>
        </div>
      </div>
    );
  }
}

export default Post;
