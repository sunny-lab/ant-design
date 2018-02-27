---
category: Components
cols: 1
type: Navigation
title: GMenu
subtitle: 全局导航菜单
---

为页面和功能提供全局导航的菜单列表。

## 何时使用

暂无。

## API

```html
<Menu>
    <Menu.Group>
        <Menu.Item>概览</Menu.Item>
    </Menu.Group>
    <Menu.Divider/>
    <Menu.Group title="管理">
        <Menu.Item>用户管理</Menu.Item>
        <Menu.Item>角色管理</Menu.Item>
    </Menu.Group>
</Menu>
```

### Menu

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 菜单显示与隐藏 | boolean | false |
| onClose | 关闭菜单时调用 | function() |  |

### Menu.Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | boolean | false |
| key | item 的唯一标志 | string |  |

### Menu.Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 分组的菜单项 | MenuItem\[] |  |
| title | 分组标题 | string\|ReactNode |  |

### Menu.Divider

菜单项分割线。
