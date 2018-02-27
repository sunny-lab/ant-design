---
order: 1
title:
  zh-CN: 普通卡片
  en-US: Normal Card
---

## zh-CN

包含标题、内容、操作区域。


````jsx
import { Fiche } from 'antd';

class Sider extends React.Component {
  render() {
    return <Fiche title="标题" extra={<a>more</a>}>测试内容</Fiche>
  }
}

ReactDOM.render(<Sider />, mountNode);
````
