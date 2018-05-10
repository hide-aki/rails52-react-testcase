import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FieldLabel from '../components/FieldLabel';
import Link from '../components/Link';
import nameValidator from '../validators/NameValidator';
import { Button, Grid, GridColumn, Label } from 'semantic-ui-react';
import { createPost } from '../actions/posts';
import { fetchCategories } from '../actions/categories';


class PostsNewPage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', content: '', category_id: 0 };
    this.validateFields = this.validateFields.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeContent = this.changeContent.bind(this);
  }
  //
  componentWillMount() {
    this.props.fetchCategories();
  }
  componentWillReceiveProps(props) {
    const firstCategory = props.categories[0];
    if(firstCategory) {
      this.setState({ category_id: firstCategory.id });
    }
  }
  //
  validateFields() {
    const errors = nameValidator(this.state.name);
    if (errors.length > 0) {
      alert(errors.join('\n\r'));
    }
    return (errors.length == 0);
  }
  onSubmit(event) {
    event.preventDefault();
    const fieldsValid = this.validateFields();
    if(fieldsValid) { 
      this.props.createPost({
        'post': {
          'category_id': this.state.category_id,
          'name': this.state.name,
          'content': this.state.content,
          'file': this.state.file
        }
      });
    }
  }
  changeCategory(event) {
    this.setState({ category_id: event.target.value });
  }
  changeName(event) {
    this.setState({ name: event.target.value });
  }
  changeContent(event) {
    this.setState({ content: event.target.value });
  }
  render() { 
    return (<form className="ui form" onSubmit={this.onSubmit}>
        <FieldLabel label={"Category"}>
          <select value={this.state.category_id} onChange={this.changeCategory}>
            {this.props.categories.map((category) => {
              return (<option key={category.id} value={category.id}>{category.name}</option>)
            })};
          </select>
        </FieldLabel>
        <FieldLabel label={"Name"}>
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.changeName} />
        </FieldLabel>
        <FieldLabel label={"Content"}>
          <input type="text" name="content" placeholder="Content" value={this.state.content} onChange={this.changeContent} />
        </FieldLabel>
      <button className="ui button" type="submit">Create</button>
    </form>)
  }
}
 
function mapStateToProps(state) {
  return { categories: state.categories.categories, post: state.posts.post };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { createPost, fetchCategories }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsNewPage);