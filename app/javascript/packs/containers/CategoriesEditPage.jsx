import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FieldLabel from '../components/FieldLabel';
import Link from '../components/Link';
import nameValidator from '../validators/NameValidator';
import { Button, Grid, GridColumn, Label } from 'semantic-ui-react';
import { fetchCategory, updateCategory } from '../actions/categories';

class CategoriesEditPage extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0, name: '', description: '' }
    this.validateFields = this.validateFields.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
  }
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchCategory(id);
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
      this.props.updateCategory(this.state.id, {
        'category': {
          'name': this.state.name,
          'description': this.state.description
        }
      });
      this.setState({ name: '', description: '' });
    }
  }
  changeName(event) {
    this.setState({ name: event.target.value });
  }
  changeDescription(event) {
    this.setState({ description: event.target.value });
  }
  componentWillReceiveProps(props) {
    let c = props.category;
    this.setState({ id: c.id, name: c.name, description: c.description })
  }
  render() { 
    return (<form className="ui form" onSubmit={this.onSubmit}>
        <h2>Editing category {this.props.category.id}</h2>
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
CategoriesEditPage.defaultProps = {
  category: {
    id: 0
  }
}
function mapStateToProps(state) {
  return { category: state.categories.category };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { updateCategory, fetchCategory }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesEditPage);