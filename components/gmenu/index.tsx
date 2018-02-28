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
    top: 48
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

  render() {
    return <div className="yr-menu">
      <div className="bg-layer"
           style={{display: this.props.visible ? 'block' : 'none'}}
           onClick={e => this.props.onClose && this.props.onClose(e)}/>
      <div className={`menu-layer animated ${this.props.visible ? 'fadeInLeft' :
        this.lockAnimation ? 'hide' : 'fadeOutLeft'}`} style={{top: this.props.top}}>
        {this.props.children}
      </div>
    </div>
  }
}
