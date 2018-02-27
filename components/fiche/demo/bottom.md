---
order: 1
title:
  zh-CN: 包含底部内容的卡片
  en-US: Bottom Card
---

## zh-CN

包含标题、内容、操作区域和底部区域。


````jsx
import { Fiche } from 'antd';

class Sider extends React.Component {
  render() {
    return <Fiche title="标题" bottom="底部内容">测试内容</Fiche>
  }
}

ReactDOM.render(<Sider />, mountNode);
````
