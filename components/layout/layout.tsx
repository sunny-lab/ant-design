import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SiderProps} from './Sider';
import Icon from "../icon";

export interface BasicProps {
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  hasSider?: boolean;
}

function generator(props: BasicProps) {
  return (BasicComponent: React.ComponentClass<BasicProps>): any => {
    return class Adapter extends React.Component<BasicProps, any> {
      static Header: any;
      static Footer: any;
      static Content: any;
      static Sider: any;

      render() {
        const {prefixCls} = props;
        return <BasicComponent prefixCls={prefixCls} {...this.props} />;
      }
    };
  };
}

class Basic extends React.Component<BasicProps, any> {
  render() {
    const {prefixCls, className, children, ...others} = this.props;
    const divCls = classNames(className, prefixCls);
    return (
      <div className={divCls} {...others}>{children}</div>
    );
  }
}

class BasicLayout extends React.Component<BasicProps, any> {
  static childContextTypes = {
    siderHook: PropTypes.object,
  };
  state = {siders: []};

  getChildContext() {
    return {
      siderHook: {
        addSider: (id: string) => {
          this.setState({
            siders: [...this.state.siders, id],
          });
        },
        removeSider: (id: string) => {
          this.setState({
            siders: this.state.siders.filter(currentId => currentId !== id),
          });
        },
      },
    };
  }

  render() {
    const {prefixCls, className, children, hasSider, ...others} = this.props;
    const divCls = classNames(className, prefixCls, {
      [`${prefixCls}-has-sider`]: hasSider || this.state.siders.length > 0,
    });
    return (
      <div className={divCls} {...others}>{children}</div>
    );
  }
}

const Layout: React.ComponentClass<BasicProps> & {
  Header: React.ComponentClass<BasicProps>;
  SubHeader: React.ComponentClass<BasicProps>;
  Footer: React.ComponentClass<BasicProps>;
  Content: React.ComponentClass<BasicProps>;
  Sider: React.ComponentClass<SiderProps>;
} = generator({
  prefixCls: 'ant-layout',
})(BasicLayout);

const Header = generator({
  prefixCls: 'ant-layout-header',
})(Basic);

// const SubHeader = generator({
//   prefixCls: 'ant-layout-header ant-layout-sub-header'
// })(Basic);

const Footer = generator({
  prefixCls: 'ant-layout-footer',
})(Basic);

const Content = generator({
  prefixCls: 'ant-layout-content',
})(Basic);

export interface SubHeaderProps extends BasicProps {
  onBack: () => {},
  title: React.ReactNode
}

class SubHeader extends React.Component<SubHeaderProps> {
  render() {
    const onBack = this.props.onBack;

    return <Header className="ant-layout-sub-header">
      {onBack && <span className="header-back">
        <Icon type="verticle-right"/>
      </span>}
      <h3 className="header-title">{this.props.title}</h3>
      <div className="header-right">
        {this.props.children}
      </div>
    </Header>
  }
}

class HeaderLeft extends React.Component<BasicProps> {
  render() {
    return <div className="header-left">
      {this.props.children}
    </div>
  }
}

class HeaderCenter extends React.Component<BasicProps> {
  render() {
    return <div className="header-center">
      {this.props.children}
    </div>
  }
}

class HeaderRight extends React.Component<BasicProps> {
  render() {
    return <div className="header-right">
      {this.props.children}
    </div>
  }
}

Header.Left = HeaderLeft;
Header.Right = HeaderRight;
Header.Center = HeaderCenter;
Layout.Header = Header;
Layout.SubHeader = SubHeader;
Layout.Footer = Footer;
Layout.Content = Content;

export default Layout;
