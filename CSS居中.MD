### 水平
类目|display:inline-block; | display:table;| position| display:flex;
---|---|---|---|---|
 parent | `text-align:center;` | |` position:relative;` | `display:flex;  justify-content:center;`
child | `display:inline-block; `|` display:table;  margin:0 auto;` | `position:absolute;  left:50%;  transform:translatex(-50%);` |` (or)margin:0 auto;`
优 | 可兼容ie6-7 加上额外代码 | html换成table结构可兼容低版本 | 不会影响其他元素布局|
劣 | 子元素内文字受影响 | 直接使用ie8下不兼容 | transform不兼容低版本 | flex不兼容低版本 |
### 垂直
类目|display:table-cell; | position | display:flex; | 
---|---|---|---|
parent | `display:table-cell;   vertical-align:center; `| `position:relative; `| `display:flex;  align-items:center;` |
child |       |`position:absolute;top:50%;  transform:translateY(50%);` |    ---   |
优 | 兼容性好 html跟换table结构可兼容ie6-7 |    ---   | 简洁(低版本不兼容) |
### 结合水平垂直  
类目|display:inline-block; display:table-cell; | position | display:flex|  
---|---|---|---|  
parents | `text-align: center;display: table-cell; vertical-align:middle;` | `position: relative;` | `display:flex;justify-content: center;`<br />` align-items: center;` |  
child | `display: inline-block` | `position: absolute; left: 50%;top: 50%; transform: translate(-50% -50%)` |  

