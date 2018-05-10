import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Link from '../components/Link';
import Comments from '../components/Comments';
import { Grid, GridColumn, Label } from 'semantic-ui-react';
import { fetchCategory } from '../actions/categories';

const Post = (props) => {
  return (<div className="card">
  <div className="content">
    <div className="header"><Link to={`/posts/${props.attrs.id}`}>{props.attrs.name}</Link></div>
    <div className="description">{props.attrs.description}</div>
  </div>
</div>)
};

const Posts = (props) => {
  return (
  <div className="ui cards">
    {props.posts.map((post) => {
      return (<Post key={post.id} attrs={post} />)
    })}
  </div>)
};

class CategoriesShowPage extends Component {  
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchCategory(id);
    // We can get it from array, but we need to load posts
    // Keeping posts in state and filtering is not a good idea: app loses consistency
  }
  render () {
    const category_id = this.props.category.id;
    const room = `category_${category_id}`;
    return (<Grid columns={12}>
      <Grid.Column width={12}>
        <h2>{this.props.category.name}</h2>
        <p>{this.props.category.description}</p>
        <h3>Posts</h3>
        <Posts posts={this.props.category.posts} />
        { category_id && <Comments room={room} /> }
      </Grid.Column>
    </Grid>);
  }
};

CategoriesShowPage.defaultProps = {
  category: {
    name: '',
    description: '',
    posts: [],
    comments: []
  }
};
function mapStateToProps(state) {
  return { category: state.categories.category };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchCategory }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesShowPage);