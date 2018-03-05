import * as React from 'react';
import classNames from 'classnames';

export interface CustomTabProps {
  className: string;
  prefixCls: string;
  style: object;
}

export default class CustomTabs extends React.Component<CustomTabProps> {
  static defaultProps = {
    prefixCls: 'ant-tab-custom',
  };

  static Tab = class Tab extends React.Component<CustomTabProps> {
    static defaultProps = {
      prefixCls: 'ant-tab-custom',
    };

    render() {
      const { props } = this;

      return <div className={classNames(props.className, `${props.prefixCls}-tab`)}>
        {this.props.children}
      </div>;
    }
  };

  render() {
    const { props } = this;

    return <div className={classNames(props.className, props.prefixCls)}>
      {this.props.children}
    </div>;
  }
}
