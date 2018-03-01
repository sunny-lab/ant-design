---
order: 0
title:
  zh-CN: 不同形状指示灯
  en-US: Every shape indicator
---

## zh-CN

不同形状指示灯。

## en-US


````jsx
import { Indicator } from 'antd';

ReactDOM.render(
  <div>
    <Indicator type="square" place="horizontal">
      <Indicator.Item status="success" key="1" />
      <Indicator.Item status="success" key="2" />
    </Indicator>
    <Indicator type="rect" place="horizontal">
      <Indicator.Item status="exception" key="1" />
      <Indicator.Item status="exception" key="2" />
    </Indicator>
    <Indicator type="circle" place="horizontal">
      <Indicator.Item status="active" key="1" />
      <Indicator.Item status="active" key="2" />
    </Indicator>
  </div>,
  mountNode
);
````
