---
category: Components
subtitle: 超售比
type: Data Display
title: Overbooking
---

超售比。

## 何时使用

需要显示资源超售情况，例如CPU超售，存储超售等。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 数据源 | object | 无 |
| dataSource.allocated | 已使用量 | number | 无 |
| dataSource.quota | 可超售总量 | number | 无 |
| dataSource.used | 物理使用量 | number | 无 |
| dataSource.total | 物理总量 | number | 无 |
| dataSource.unit | 单位 | string | 无 |
