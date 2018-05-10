import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Link from '../components/Link';
import { Button, Grid, GridColumn, Label } from 'semantic-ui-react';
import { fetchPosts, deletePost } from '../actions/posts';
 
// Few stateless components to decorate code
const PostsPlaceholder = (props) => {
  return (<h2>No Posts</h2>)
}

const PostTableRow = (props) => {
  const showUrl = `/posts/${props.post.id}/`;
  const editUrl = `/posts/${props.post.id}/edit`;
  return (<tr>
    <td className={"collapsing"}>{props.post.id}</td>
    <td>
      <Link to={showUrl}>{props.post.name}</Link>
    </td>
    <td>{props.post.content}</td>
    <td className={"right aligned collapsing"}>
      <Label><div className={"detail"}><Link to={editUrl}>Edit</Link></div></Label>
      <Label><div className={"detail"}><a onClick={() => { props.delete(props.post.id) }}>Delete</a></div></Label>
    </td>
  </tr>)
};

const PostsTable = (props) => {
  return (<table className={"ui celled striped table"}>
  <thead><tr><th colSpan={"4"}>Posts</th></tr></thead>
  <tbody>
    {props.posts.map((post) => {
      return (<PostTableRow key={post.id} post={post} delete={props.deletePost} />)
    })}
  </tbody>
</table>);
}

class PostsPage extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() { 
    const isEmpty = (this.props.posts.length == 0);
    return (<Grid columns={12}>
        <Grid.Column width={12}>
          <Button><Link to={"/new_post"}>New post</Link></Button>
          { isEmpty ? (<PostsPlaceholder />) : (<PostsTable deletePost={this.props.deletePost} posts={this.props.posts} />) }
        </Grid.Column>
      </Grid>)
  }
}
 
function mapStateToProps(state) {
  return { posts: state.posts.posts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchPosts, deletePost }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);