---
order: 0
title:
  zh-CN: 滚动到面板所在位置
  en-US: Scroll
---

## zh-CN

滚动到面板所在位置。

## en-US


````jsx
import React from 'react';
import { Panel, Button } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  
  handleClick() {
    this.setState({visible: true});
  }
  
  componentDidMount() {
    
  }
  
  render() {
    return <div style={{height: 200, overflow: 'auto'}} id="container">
      <Button onClick={this.handleClick.bind(this)}>打开面板</Button>
      <div style={{height: 200}}></div>
      {this.state.visible && <Panel scrollEl="container" title="标题" description="描述">测试内容</Panel>}
      <div style={{height: 200}}></div>
    </div>
  }
}

ReactDOM.render(
  <Container />,
  mountNode
);
````

<style>
.ant-switch {
  margin-bottom: 8px;
}
</style>
