---
category: Components
subtitle: 指示灯
type: Data Display
title: Indicator
---

显示状态。

## 何时使用

- 需要显示资源状态。

## API

### Indicator

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 指示灯类型 可选：square circle rect | string |  |
| place | 指示灯排列方式，可选：vertical horizontal | string |  |

### Indicator.Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| status | 指示灯状态 可选：success exception active normal | string |  |
| onClick | 点击回掉函数 | function() |  |
