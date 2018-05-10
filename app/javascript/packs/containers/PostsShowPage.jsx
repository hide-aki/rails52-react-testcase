import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Link from '../components/Link';
import Comments from '../components/Comments';
import { Grid, GridColumn, Label } from 'semantic-ui-react';
import { fetchPost } from '../actions/posts';

class PostsShowPage extends Component {  
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  render () {
    const post_id = this.props.post.id;
    const room = `post_${post_id}`;
    return (<Grid columns={12}>
      <Grid.Column width={12}>
        <h2>{this.props.post.name}</h2>
        <p>{this.props.post.content}</p>
        { post_id && <Comments room={room} />}
      </Grid.Column>
    </Grid>);
  }
};

PostsShowPage.defaultProps = {
  post: {
    id: 0,
    name: '',
    description: ''
  }
};
function mapStateToProps(state) {
  return { post: state.posts.post };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchPost }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsShowPage);