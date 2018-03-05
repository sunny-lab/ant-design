import * as React from 'react';
import classNames from 'classnames';

import { scrollToTarget } from './scroller';
import Icon from '../icon';

export interface PanelProps {
  scrollEl: HTMLElement;
  title: string;
  description: string;
  prefixCls: string;
  className: string;
  time: number;
  bordered: boolean;
  bodyStyle: object;
  style: object;
  closable: boolean;
  id: string;
  onClose: () => {};
}

export default class Panel extends React.Component<PanelProps> {
  static defaultProps = {
    prefixCls: 'ant-panel',
    time: 500,
    bordered: true,
    closable: false,
  };

  private targetEl: HTMLElement | null;

  componentDidMount() {
    if (this.props.scrollEl && this.targetEl) {
      scrollToTarget(this.props.scrollEl, this.targetEl, this.props.time);
    }
  }

  componentWillReceiveProps(props: PanelProps) {
    if (this.props.id !== props.id && this.props.scrollEl && this.targetEl) {
      scrollToTarget(props.scrollEl, this.targetEl, props.time);
    }
  }

  render() {
    const { props } = this;
    const className = classNames(props.className, props.prefixCls, {
      [`${props.prefixCls}-bordered`]: props.bordered,
    });
    return <div className={className} ref={el => this.targetEl = el} style={props.style}>
      {props.title && <div className={`${props.prefixCls}-title`}>{props.title}</div>}
      {props.description && <div className={`${props.prefixCls}-description`}>描述：{props.description}</div>}
      {props.closable && <span onClick={this.props.onClose}><Icon className="close-btn" type="close"/></span>}
      <div className={`${props.prefixCls}-content`} style={props.bodyStyle}>{this.props.children}</div>
    </div>;
  }
}
