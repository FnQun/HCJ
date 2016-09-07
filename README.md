## 网易前端微专业练习及笔记
* HTML
* CSS
* JavaScript
* DOM
* 页面架构
* 产品前端架构

>  结构 -   表现   -    行为    各司其职,相互协同  
> 毛坯房-装修的房子-住有人的房子  
> CSS动画 插入关键帧,关键帧中间插入许多普通帧.再按一定速度播放.  
> JS动画 计时器-动作  
> JSDOM 获取位置,定义触发事件后的交互行为.  
> JavaScript一切皆对象! 
###2.CSS优化  
####一、减少请求  
 1.图片合并；  
 2.CSS文件合并；  
####二、减少文件大小  
 1.减小图片大小；  
 2.CSS值缩写；  
 3.数值为0的单位省略;  
 4.颜色值缩写；  
 5.CSS选择器合并；  
 6.文件压缩。  
####三、页面性能  
 1.加载性能：CSS外联一般放在head中，JS放在body底部；  
 2.减少标签数量；  
 3.减少选择器长度；  
 4.尽量减少高耗性能功能 ；>如CSS动画    
 5.图片设置宽高；  
 6.所有表现用CSS实现，尽量减少JS使用。  
####四、可读性和可维护性  
 1.规范：缩进、变量名文件名规范。  
 2.语义化类名；  
 3.尽量避免Hack;  
 4.模块化管理；  
 5.添加注释。  
###3.页面布局  
####水平居中
*1.行级元素 添加元素css样式：`text-align:center;`  
*2.块级元素  
	*定宽的块级元素：`width:200px;margin:20px auto;`  
	*非定宽的块级元素：  
	（1）.`display:table` 或者加入 `table` 标签 利用`table`标签的长度自适应性,然后再利用定宽度块状居中的margin的方法，使其水平居中。
	（2）.设置`display: inline`显示类型设为行内元素，进行不定宽元素的属性设置，然后使用 `text-align:center` 来实现居中效果。  
	（3）.设置 `position:relative` 和 `left:50%` 及transform:translateX:-50%利用 相对定位 的方式，将元素向左偏移 50%，再倒回自身50%的宽度,即达到居中的目的  
####垂直居中  
	*1、父元素高度确定的*单行文本* 通过设置父元素的` height` 和 `line-height `高度一致来实现的。  
	*2.父元素高度确定的多行文本、图片等的竖直居中  
		1.使用插入 `完整的table 包括thead tbody、tr、td`标签，或则`display:table-cell`同时设置 `vertical-align：middle`。在父元素设置此样式时，会作用于inline-block类型的子元素。  
	*3.`设置position:relative;top:50%;及transform:translateY-50%;`再倒回自身50%的高度,即达到垂直居中的目的  
####水平垂直居中  
	*结合上面两部分一起使用
