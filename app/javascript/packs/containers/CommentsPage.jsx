import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Link from '../components/Link';
import { Button, Grid, GridColumn, Label } from 'semantic-ui-react';
import { fetchComments, deleteComment } from '../actions/comments';
 
// Few stateless components to decorate code
const CommentsPlaceholder = (props) => {
  return (<h2>No Comments</h2>)
}

const CommentTableRow = (props) => {
  return (<tr>
    <td className={"collapsing"}>{props.comment.id}</td>
    <td>{props.comment.author}</td>
    <td>{props.comment.content}</td>
    <td className={"right aligned collapsing"}>
      <Label><div className={"detail"}><a onClick={() => { props.delete(props.comment.id) }}>Delete</a></div></Label>
    </td>
  </tr>)
};

const CommentsTable = (props) => {
  return (<table className={"ui celled striped table"}>
  <thead><tr><th colSpan={"4"}>Comments</th></tr></thead>
  <tbody>
    {props.comments.map((comment) => {
      return (<CommentTableRow key={comment.id} comment={comment} delete={props.deleteComment} />)
    })}
  </tbody>
</table>);
}

class CommentsPage extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchComments();
  }
  render() { 
    const isEmpty = (this.props.comments.length == 0);
    return (<Grid columns={12}>
        <Grid.Column width={12}>
          { isEmpty ? (<CommentsPlaceholder />) : (<CommentsTable deleteComment={this.props.deleteComment} comments={this.props.comments} />) }
        </Grid.Column>
      </Grid>)
  }
}
 
function mapStateToProps(state) {
  return { comments: state.comments.comments };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchComments, deleteComment }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage);