import * as React from 'react';
import classNames from 'classnames';

export interface ToolbarProps {
  prefixCls: string;
  className: string;
  title: string;
}

export default class Toolbar extends React.Component<ToolbarProps> {
  static defaultProps = {
    prefixCls: 'ant-toolbar',
  };

  render() {
    const { props } = this;
    return <div className={classNames(props.className, props.prefixCls)}>
      <div className={`${props.prefixCls}-title`}>{props.title}</div>
      {props.children}
    </div>;
  }
}
