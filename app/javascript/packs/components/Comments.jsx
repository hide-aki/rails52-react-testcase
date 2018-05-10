import React, { Component } from 'react';
import axios from 'axios';
import { Segment, Feed, Form } from 'semantic-ui-react';
import CommentForm from './CommentForm';

const FeedEvent = (props) => {
  return (<Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>{props.author}</Feed.User> wrote a comment:
            <Feed.Date>{props.created_at}</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>{props.content}</Feed.Extra>
        </Feed.Content>
      </Feed.Event>)
};

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    let componentContext = this;
    // let's avoid bringing redux here
    axios.get(`/api/comments.json?room=${this.props.room}`).then((resp) => {
      componentContext.setState({ messages: resp.data });
    });
    //
    App.chatChannel = App.cable.subscriptions.create({ channel: "CommentsChannel", room: this.props.room }, {
      received: (data) => {
        // Simply add
        // This made ugly not to use redux and save some time
        let jdata = JSON.parse(data);
        const messages = componentContext.state.messages;
        messages.push(jdata);
        componentContext.setState({ messages: messages });
      }
    })
  }
  handleSubmit(data) {
    App.chatChannel.send(data);
  }
  render() { 
    const isEmpty = this.state.messages.length == 0;
    return (<React.Fragment>
    <h3>Comments</h3>
    <Feed>
      { isEmpty && <Segment><h4>No comments, perhaps you should write one</h4></Segment>}
      {this.state.messages.map((message) => {
        return (<FeedEvent key={message.id} author={message.author} content={message.content} created_at={message.created_at}/>)
      })}
    </Feed>
    <CommentForm onSubmit={this.handleSubmit} />
    </React.Fragment>)
  }
}

Comments.defaultProps = {
  messages: []
};

export default Comments;