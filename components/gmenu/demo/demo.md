---
order: 1
title:
  zh-CN: 全局菜单
  en-US: Global menu
---

## zh-CN


## en-US


````jsx
import { GMenu, Button } from 'antd';

class Sider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleClick() {
     this.setState({ visible: !this.state.visible });
  }

  handleClose() {
     this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>
          {this.state.visible ? '关闭' : '弹出'}全局菜单
        </Button>
        <GMenu
          top={0}
          visible={this.state.visible}
          onClose={this.handleClose}
        >
          <GMenu.Group>
            <GMenu.Item><a>概览</a></GMenu.Item>
          </GMenu.Group>
          <GMenu.Divider />
          <GMenu.Group title="管理">
            <GMenu.Item><a className="active">用户管理</a></GMenu.Item>
            <GMenu.Item><a>角色管理</a></GMenu.Item>
          </GMenu.Group>
        </GMenu>
      </div>
    );
  }
}

ReactDOM.render(<Sider />, mountNode);
````
