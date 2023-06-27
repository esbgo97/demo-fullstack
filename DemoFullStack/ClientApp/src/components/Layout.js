import React, { Component } from 'react';
import { Container } from '@mui/material';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <>
        <Container>
          <NavMenu />
          <br />
          <br />
          <br />
          {this.props.children}
        </Container>
        <Footer />
      </>
    );
  }
}
