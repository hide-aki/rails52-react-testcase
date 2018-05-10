// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router';
import { Container } from 'semantic-ui-react';

import CategoriesPage from '../containers/CategoriesPage';
import CategoriesShowPage from '../containers/CategoriesShowPage';
import CategoriesEditPage from '../containers/CategoriesEditPage';
import CategoriesNewPage from '../containers/CategoriesNewPage';
import PostsPage from '../containers/PostsPage';
import PostsShowPage from '../containers/PostsShowPage';
import PostsEditPage from '../containers/PostsEditPage';
import PostsNewPage from '../containers/PostsNewPage';
import CommentsPage from '../containers/CommentsPage';

import AppMenu from './AppMenu';

class Root extends Component {
  render() {
    return (
      <React.Fragment>
        <AppMenu />
        <Provider store={this.props.store}>
          <ConnectedRouter history={this.props.history}>
            <Container text={true}>
              <Switch>
                <Route exact path="/" component={CategoriesPage} />
                <Route exact path="/categories/:id" component={CategoriesShowPage} />
                <Route exact path="/categories/:id/edit" component={CategoriesEditPage} />
                <Route exact path="/new_category" component={CategoriesNewPage} />
                <Route exact path="/posts" component={PostsPage} />
                <Route exact path="/posts/:id" component={PostsShowPage} />
                <Route exact path="/posts/:id/edit" component={PostsEditPage} />
                <Route exact path="/new_post" component={PostsNewPage} />
                <Route path="/comments" component={CommentsPage} />
              </Switch>
            </Container>
          </ConnectedRouter>
        </Provider>
      </React.Fragment>
    );
  }
}
export default Root;