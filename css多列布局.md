### 多列布局
- 定宽+自适应
- 不定宽+自适应
- 等分
>不定宽:自身宽度改变,自适应的一列不需要更改css即可自适应!

#### 1.定宽+自适应
###### 1.1 基本方案
```
<!--html结构-->
<div class="parent">
	<div class="left">
		<p>left</p>
	</div>
	<div class="right">
		<p>right</p>
		<p>right</p>
	</div>
</div>
```
```
.left{
    float: left;
    width: 100px;
}
.right{
    margin-left: 120px; /* left+间隔 */
}
```

###### 1.2 ie6-7兼容方案

```
.left{
	float: left; width: 100px;
	position: relative;/*提高层级,因为right在后,且width=100%;覆盖了left*/
}
.right-fix{
	float: right; width: 100%;
	margin-left: -100px;/*同一行能塞下两个盒子*/
}
.right{
	margin-left: 120px;
}

```

```
.left{
	float: left;
	width: 100px;
	margin-right: 20px;
}
.right{
	overflow: hidden;
}
```
###### 1.4 table解决方案 
```
.parent{
	display: table; width: 100%;
	table-layout: fixed;
}
.left,.right{
	display: table-cell;
}
.left{
	width: 100px;
	padding-right: 20px;
}
```
###### 1.5 flex 解决方案
```
<!--css-->
.parent{
	display: flex;
}
.left{
	width: 100px;
	margin-right: 20px;
}
.right{
	flex: 1;
}
```
##### 1.6.多列定宽+自适应
```
<!--css-->
.parent{

}
.left,.center{
	float: left;
	width: 100px;
	margin-right: 20px;
}
.right{
	overflow: hidden;
}
<!--html-->
<div class="parent">
	<div class="left">
		<p>left</p>
	</div>
	<div class="center">
		<p>center</p>
	</div>
	<div class="right">
		<p>right</p>
		<p>right</p>
	</div>
</div>
```
