##### Date （日期）
+ 当前日期  `new Date();`
+ 设置日期  `new Date(2014,11,5);`
###### 创建日期
- `new Date()`
- `new Date(value)`
- `new Date(year,month[,day[,minutes[,seconds[,milliseconds]]]])`
- **==月份是从0开始的==**
###### 获取日期
+ `date.getxxxx()`
    + `getYear()`年
    + `getMonth()+1`月
    + `getDate()`日
    + `getHours()`时
    + `getMinutes()`分
    + `getSeconds()`秒

###### 格式化
```
var date = new Date();
var ndate = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日' + date.getHours() + '点' + date.getMinutes() + '分' + date.getSeconds() + '秒';
console.log(ndate);
```
###### 设置时间
+ `date.setxxx()`
    + `setYear(x)`年
    + `setMonth(x)+1`月
    + `setDate(x)`日
    + `setHours(x)`时
    + `setMinutes(x)`分
    + `setSeconds(x)`秒
    + **输入的值x超出 自动往后转化 `setHours(25);`自动转为第二天`1：00`
`setMonth(13);`自动转为下一年2月（因为月从0开始所以13===14个月）月、日、时、分、秒类似**
###### 获取某月有多少天
直接`new Date(xx年，x月，0天)`
即可直接得到X月的天数
+ 解析
    + **0天 会转化为上个月的最后一天！**`x月 0天` ，即`（x+1）-1月`的最后一天！**+ 1**是因为月从**0**开始的！**- 1**是因为**0天**会跳转到**上个月**最后一天！
    + 好处：更加直观！**（x+1）- 1 = x** 不需要转换，直接用!
###### date 和 number 转换

```
Date-->Number: 
var date = new Date(); 
number = date.getTime();
```

```
Number-->Date: 
new Date(number);
<!--date.setTime(number); 均可以-->
```
