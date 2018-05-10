import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FieldLabel from '../components/FieldLabel';
import Link from '../components/Link';
import nameValidator from '../validators/NameValidator';
import { Button, Grid, GridColumn, Label } from 'semantic-ui-react';
import { createCategory } from '../actions/categories';

class CategoriesNewPage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', description: '' }
    this.validateFields = this.validateFields.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
  }
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
      this.props.createCategory({
        'category': {
          'name': this.state.name,
          'description': this.state.description
        }
      });
    }
  }
  changeName(event) {
    this.setState({ name: event.target.value });
  }
  changeDescription(event) {
    this.setState({ description: event.target.value });
  }
  render() { 
    return (<form className="ui form" onSubmit={this.onSubmit}>
        <FieldLabel label={"Name"}>
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.changeName} />
        </FieldLabel>
        <FieldLabel label={"Description"}>
          <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.changeDescription} />
        </FieldLabel>
      <button className="ui button" type="submit">Create</button>
    </form>)
  }
}
 
function mapStateToProps(state) {
  return { categories: state.categories.categories };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { createCategory }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNewPage);