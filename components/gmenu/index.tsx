import * as React from 'react';
import MenuGroup from './group';
import MenuItem from './item';
import Divider from './divider';

export interface MenuProps {
  visible: boolean;
  top: number;
  onClose?: (e: React.MouseEvent<any>) => void;
}

export interface MenuState {
  lockAnimation: boolean;
}

export default class Menu extends React.Component<MenuProps, MenuState> {
  static Group = MenuGroup;
  static Item = MenuItem;
  static Divider = Divider;

  static defaultProps = {
    top: 48,
  };

  private lockAnimation: boolean = true;

  constructor(props: MenuProps) {
    super(props);
  }

  componentWillReceiveProps(props: MenuProps) {
    if (props.visible) {
      this.lockAnimation = false;
    }
  }

  getClassName() {
    let className = 'menu-layer animated';
    if (this.props.visible) {
      className += ' fadeInLeft';
    } else {
      className += this.lockAnimation ? ' hide' : ' fadeOutLeft';
    }

    return className;
  }

  render() {
    return <div className="yr-menu">
      <div
        className="bg-layer"
        style={{ display: this.props.visible ? 'block' : 'none' }}
        onClick={e => this.props.onClose && this.props.onClose(e)}
      />
      <div
        className={this.getClassName()}
        style={{ top: this.props.top }}
      >
        {this.props.children}
      </div>
    </div>;
  }
}
