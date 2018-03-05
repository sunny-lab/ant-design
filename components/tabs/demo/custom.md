---
order: 0
title:
  zh-CN: 自定义Tab
  en-US: Custom Tab
---

## zh-CN

自定义元素的选项卡

## en-US


````jsx
import { Tabs } from 'antd';

const CustomTabs = Tabs.Custom;

ReactDOM.render(
  <div>
    <CustomTabs.Tab key="1"><a>选项1</a></CustomTabs.Tab>
    <CustomTabs.Tab key="2"><a className="active">选项2</a></CustomTabs.Tab>
    <CustomTabs.Tab key="3"><a>选项3</a></CustomTabs.Tab>
  </div>
, mountNode);
````
