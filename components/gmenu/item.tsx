import * as React from 'react';

export default class MenuItem extends React.Component {
  render() {
    return <div className="yr-menu-item">
      {this.props.children}
    </div>;
  }
}
