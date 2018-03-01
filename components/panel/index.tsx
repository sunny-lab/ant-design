import * as React from 'react';
import classNames from 'classnames';

import {scrollToTarget} from './scroller';

export interface PanelProps {
  scrollEl: HTMLElement;
  title: string;
  description: string;
  prefixCls: string;
  className: string;
  time: number;
  bordered: boolean;
  bodyStyle: object;
}

export default class Panel extends React.Component<PanelProps> {
  static defaultProps = {
    prefixCls: 'ant-panel',
    time: 500,
    bordered: true,
  };

  private targetEl: HTMLElement | null;

  componentDidMount() {
    if (this.props.scrollEl) {
      scrollToTarget(this.props.scrollEl, this.targetEl, this.props.time);
    }
  }

  render() {
    const {props} = this;
    return <div className={classNames(props.className, props.prefixCls, {
      [`${props.prefixCls}-bordered`]: props.bordered
    })} ref={el => this.targetEl = el}>
      {props.title && <div className={`${props.prefixCls}-title`}>{props.title}</div>}
      {props.description && <div className={`${props.prefixCls}-description`}>描述：{props.description}</div>}
      <div className={`${props.prefixCls}-content`}>{this.props.children}</div>
    </div>
  }
}
