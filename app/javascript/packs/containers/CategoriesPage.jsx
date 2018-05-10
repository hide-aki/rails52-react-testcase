import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Link from '../components/Link';
import { Button, Grid, GridColumn, Label } from 'semantic-ui-react';
import { fetchCategories, deleteCategory } from '../actions/categories';
 
// Few stateless components to decorate code
const CategoriesPlaceholder = (props) => {
  return (<h2>No categories</h2>)
}

const CategoryTableRow = (props) => {
  const showUrl = `/categories/${props.category.id}/`;
  const editUrl = `/categories/${props.category.id}/edit`;
  return (<tr>
    <td className={"collapsing"}>{props.category.id}</td>
    <td>
      <Link to={showUrl}>{props.category.name}</Link>
    </td>
    <td>{props.category.description}</td>
    <td className={"right aligned collapsing"}>
      <Label><div className={"detail"}><Link to={editUrl}>Edit</Link></div></Label>
      <Label><div className={"detail"}><a onClick={() => { props.delete(props.category.id) }}>Delete</a></div></Label>
    </td>
  </tr>)
};

const CategoriesTable = (props) => {
  return (<table className={"ui celled striped table"}>
  <thead><tr><th colSpan={"4"}>Categories</th></tr></thead>
  <tbody>
    {props.categories.map((category) => {
      return (<CategoryTableRow key={category.id} category={category} delete={props.deleteCategory} />)
    })}
  </tbody>
</table>);
}

class CategoriesPage extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchCategories();
  }
  render() { 
    const isEmpty = (this.props.categories.length == 0);
    return (<Grid columns={12}>
        <Grid.Column width={12}>
          <Button><Link to={"/new_category"}>New category</Link></Button>
          { isEmpty ? (<CategoriesPlaceholder />) : (<CategoriesTable deleteCategory={this.props.deleteCategory} categories={this.props.categories} />) }
        </Grid.Column>
      </Grid>)
  }
}
 
function mapStateToProps(state) {
  return { categories: state.categories.categories };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchCategories, deleteCategory }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);