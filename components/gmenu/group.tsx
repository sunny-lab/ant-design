import * as React from "react";

interface GroupProps {
  title: string;
}

export default class MenuGroup extends React.Component<GroupProps> {
  render() {
    return <ul className="yr-menu-group">
      {this.props.title && <div className="menu-group-title">{this.props.title}</div>}
      {this.props.children}
    </ul>
  }
};
