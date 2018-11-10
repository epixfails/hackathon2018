import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { PortalReact } from './PortalReact';

export class Portal extends Component {
  componentWillUnmount() {
    if (this.portal) document.body.removeChild(this.portal);
  }

  getPortalRef(portal) {
    this.portal = portal;
  }

  render() {
    const { children } = this.props;
    return (
      <PortalReact innerRef={this.getPortalRef}>
        {createPortal(children, document.body)}
      </PortalReact>
    );
  }
}
