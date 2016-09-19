###### 运算
>略
##### 方法
+ 绝对值
    + `Math.abs(x)`
+ 四舍五入
    + `Math.round(X)`
+ 向上取整
    + `Math .ceil(x)`
+ 向下取整
    + `Math.floor(x)`
+ 最大值
    + `Math.max([value1[,value2[,...]]])`
+ 随机数
    + `Math.random()` (0~1) 取不到1，无限接近1.
+ Math 其他方法
    + `Math.cos(x)`传如弧度值 返回余弦值
    + `Math.exp(x)`传数值 e^x 
    + `Math.log(x)` e^y = x
    + `Math.sqrt(x)` 平方根
    + `Math.pow(x,y)` x^y

+ 转化为整数
    + parseInt(string，radix)
    + radix：输出几进制的数值
    + 只取整数部分，且非数字不可识别`parseInt(12B7.6b) // 12`

+ 转化为浮点数
    + parseFloat(string)
    + 非数字不可识别 `parseFloat(12.3B58) // 12.3`
+ 识别数字
    + Number(x);
    + 非数字不可识别 `Number('1a') // NaN`
+ 保留几位小数
    + `num.toFixed(digits)`
    + `(100.25943).toFixed(2) // 100.25 `
