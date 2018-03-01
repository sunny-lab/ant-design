---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The most basic usage.

````jsx
import React from 'react';
import { Panel, Button } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <Panel title="标题" description="描述">测试内容</Panel>
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
