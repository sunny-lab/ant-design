import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export interface IndicatorProps {
  type: string;
  place: string;
  className: string;
  prefixCls: string;
}

export interface IndicatorItemProps {
  status: string;
  prefixCls: string;
  className: string;
  onClick: () => {};
}

export default class Indicator extends React.Component<IndicatorProps> {
  static Item = class IndicatorItem extends React.Component<IndicatorItemProps> {
    static defaultProps = {
      prefixCls: 'ant-indicator'
    };

    render() {
      const {props} = this;

      return <span className={classNames(props.className, `${props.prefixCls}-item`, {
        [`${props.prefixCls}-item-success`]: props.status === 'success',
        [`${props.prefixCls}-item-exception`]: props.status === 'exception',
        [`${props.prefixCls}-item-active`]: props.status === 'active',
      })}/>
    }
  };

  static defaultProps = {
    prefixCls: 'ant-indicator',
    type: 'square'
  };

  static propTypes = {
    type: PropTypes.string,
    place: PropTypes.string
  };

  render() {
    const {props} = this;

    const className = classNames(props.className, props.prefixCls, {
      [`${props.prefixCls}-vertical`]: props.place === 'vertical',
      [`${props.prefixCls}-horizontal`]: props.place === 'horizontal',
      [`${props.prefixCls}-square`]: props.type === 'square',
      [`${props.prefixCls}-circle`]: props.type === 'circle',
      [`${props.prefixCls}-rect`]: props.type === 'rect',
    });


    return <span className={className}>
      {this.props.children}
    </span>
  }
}
