import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import AuthorValidator from '../validators/AuthorValidator';
import FieldLabel from './FieldLabel';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { author: '', content: '' }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    let errors = AuthorValidator(this.state.author);
    if(errors.length < 1) {
      this.props.onSubmit({ author: this.state.author, content: this.state.content });
      this.setState({ author: '', content: ' '});
    } else {
      alert(errors.join('\n\r'))
    }
  }
  
  onChangeAuthor(event) {
    this.setState({ author: event.target.value });
  }

  onChangeText(event) {
    this.setState({ content: event.target.value });
  }

  render() { 
    return (<Segment><Form onSubmit={this.onSubmit}>
      <FieldLabel label={"Author"}>
        <input placeholder={"Author"} value={this.state.author} onChange={this.onChangeAuthor} />
      </FieldLabel>
      <FieldLabel label={"Text"}>
        <input placeholder={"Text"} value={this.state.content} onChange={this.onChangeText} />
      </FieldLabel>
      <Button onClick={this.onSubmit}>Submit</Button>
      </Form></Segment>)
  }
}
 
export default CommentForm;