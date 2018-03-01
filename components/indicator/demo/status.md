---
order: 0
title:
  zh-CN: 状态显示
  en-US: Status display
---

## zh-CN

状态显示。

## en-US


````jsx
import { Indicator } from 'antd';

ReactDOM.render(
  <div>
    <Indicator place="horizontal">
      <Indicator.Item status="success" key="1" />
      <Indicator.Item status="exception" key="2" />
      <Indicator.Item status="active" key="2" />
      <Indicator.Item key="2" />
    </Indicator>
  </div>,
  mountNode
);
````
