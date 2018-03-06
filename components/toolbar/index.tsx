import * as React from 'react';
import classNames from 'classnames';

export interface ToolbarProps {
  prefixCls: string;
  className: string;
  title: string;
  position: string;
  style: object;
}

export default class Toolbar extends React.Component<ToolbarProps> {
  static defaultProps = {
    prefixCls: 'ant-toolbar',
    position: 'right',
  };

  render() {
    const { props } = this;

    const className = classNames(props.className, props.prefixCls, {
      [`${props.prefixCls}-left`]: props.position === 'left',
      [`${props.prefixCls}-right`]: props.position === 'right',
    });
    return (
      <div className={className} style={props.style}>
        <div className={`${props.prefixCls}-title`}>{props.title}</div>
        {props.children}
      </div>
    );
  }
}
