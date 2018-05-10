// @flow
import React, { Component } from 'react';
import Link from './Link';
import { Container, Menu } from 'semantic-ui-react';

const MenuItem = (props) => {
  let className = "item";
  const isActive = props.active || false;
  if (isActive) {
    className = "item active"
  }
  return (<Link className={className} to={props.path}>{props.title}</Link>)
};

class AppMenu extends Component {
  render() {
    return (
      <Menu inverted={true}>
        <Container>
          <MenuItem title={"Categories"} path={"/"} />
          <MenuItem title={"Posts"} path={"/posts"} />
          <MenuItem title={"Comments"} path={"/comments"} />
        </Container>
      </Menu>
    );
  }
}
export default AppMenu;