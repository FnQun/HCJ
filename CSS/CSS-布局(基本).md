### CSS-布局
##### 1. `display`
```
- block
- inline
- inline-block
- none
```
##### 2. `position`
```
- relative
- absolute
- z-index
- fixed
```
##### 3. `float`
1.浮动的基本知识
2.清除浮动的方式

---

###### `display:block;`

1. 默认宽度为父元素宽度.  
2. 可设置宽高  
3. 换行显示  
常见块级元素:`div`, `p`, `h1~h6`, `p`,  

---
###### 1.1 display:inline;
1. 默认为内容宽度
2. 不可设置宽高
3. 同行显示
常见的行级元素:`span`,`a`,`label`,`em`,`strong`,`cite`...
---
###### 1.2 `display:inline-block; ` 
1. 默认为内容宽度.
2. 可设宽高.
3. 同行显示.
4. 整块换行(如果一行容纳不下!).
常见的inline-block元素:`input`,`textarea`,`select`,`button`...
---
###### 1.3 `display:none;`
1. 隐藏元素.且清除元素占据的位置.
2. 与`visibility:hidden;`显示效果一样,当时`visibility:hidden:` 不清除元素占据单词位置
---
###### 1.4 定宽高块级元素居中 
自身设置`margin:0 auto;`

---
###### 1.5 定宽inline-block元素居中  
父元素设置`text-align: center;`

---
###### 2.1 `position`对比
  
属性|参照|是否脱离文档流| 默认宽度|常用场景
---|---|---|---|---
relative | 参照自身原位置|否(仍在文档流中)| |作为绝对定位的
absolute | 有定位属性的父元素|是(脱离文档流)|默认为内容宽度|
fixed|浏览器窗口|是(脱离文档流)|默认为内容宽度|遮罩
---
###### 2.2 `z-index`
1. 层级优先级(数字大的在前面)例如:`z-index:999`;叠在`z-index:900;`前面;
2. 栈的概念.还需要考虑父级的`z-index`大小,父级低的子级也低,不管子级的`z-index`有多大!(永远活在父亲的树荫之下);
###### 3.`float`
1. 默认宽度为内容宽度.
2. 脱离文档流.
3. 向指定方向一直移动.
4. 在浮动方向上直到触碰至边界或其他浮动元素的边才会停下来!
###### 3.1 浮动其他
浮动其实是半脱离文档流:元素脱离但是内容还在文档!
######  3.2清除浮动方式
1. clear直接清除  
1.1浮动元素后加`:after`
  代码案例:
```
.clearfix:after{
    content:"."
    display:block;
    clear:both;
    height:0;
    overflow:hidden;
    visibility:hidden;
}
```
2. `overflow`



