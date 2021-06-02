# AST-Query

> 像用 css 选择器操作 DOM 一样来操作语法树.

## Design

### XPath

节点, 值

关系

- 双亲
- 孩子
- 同胞
- 祖先
- 后代

节点选择

- nodename
- / [root node]
- // [rel root node]
- . [current node]
- .. [parent of current node]
- @ [attr]

节点操作
|, +, -, *, div, =, !=, <, <=, >, >=, or, and, mod

### CSS Selector

tagA,
tagA tagB,
#id,
.class,

### AST Query

Combine XPath and CSS selectors crons
