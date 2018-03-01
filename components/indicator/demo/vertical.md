---
order: 0
title:
  zh-CN: 水平垂直排列
  en-US: Horizontal vertical place
---

## zh-CN

垂直排列。

## en-US


````jsx
import { Indicator } from 'antd';

ReactDOM.render(
  <div>
    <Indicator place="horizontal">
      <Indicator.Item key="1" />
      <Indicator.Item key="2" />
    </Indicator>
    <Indicator place="vertical">
      <Indicator.Item key="1" />
      <Indicator.Item key="2" />
    </Indicator>
  </div>,
  mountNode
);
````
