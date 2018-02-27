---
order: 1
title:
  zh-CN: Lite卡片
  en-US: Lite Card
---

## zh-CN

包含标题、内容、操作区域，无边框，间距比normal卡片小。


````jsx
import { Fiche } from 'antd';

class Sider extends React.Component {
  render() {
    return <Fiche type="lite" title="标题">测试内容</Fiche>
  }
}

ReactDOM.render(<Sider />, mountNode);
````
