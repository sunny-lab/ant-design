---
order: 1
title:
  zh-CN: 资源超售情况
  en-US: Resource Overbooking
---

## zh-CN


## en-US


````jsx
import { Overbooking } from 'antd';

class Sider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: 33,
        used: 22,
        quota: 60,
        allocated: 30,
        unit: 'GB',
      },
    };
  }

  render() {
    return (
      <div>
        <Overbooking dataSource={this.state.data} />
      </div>
    );
  }
}

ReactDOM.render(<Sider />, mountNode);
````
