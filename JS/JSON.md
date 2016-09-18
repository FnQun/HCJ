#### JSON基本 
* JavaScript Object Notaion
```
<!--js-->
{
name: "jerry",
age: 1
}

---

<!--JSON-->
{
"name": "jerry",
"age": 1
}
```
> JS- - - - -1. 不会报错  
> JSON- - 1. 会报错

2. JSON方法  
`JSON.parse(text[,reviver])`
```
graph LR
JSON-->JS
```
例:
`var user = JSON.parse(userjson)`
+ ie6-7不支持JSON.parse()方法.
+ 兼容方案:
```
if (!window.JSON){<!--特性侦测-->
    window.JSON = {
        parse: function(sJSON){
            return eval('(' + sJSON +  ')')
        }
    }
}
```
`JSON.stringify(value[,replacer[,space]])`

```
graph LR
JS-->JSON
```
`var user = JSON.stringify(user);`  
***or***  
```
var user = {
    name: tom,
    age: 12,
    school: middle school,
    like: sleep;
}

var JSON.stringify(user,["name", "age"])<!--传指定的属性-->
```
>ie6-7 不支持
>兼容方案:
```
if(!window.JSON){
window.JSON = {
    stringify: function(){
        <!--分类型转换-->
        if
    }
    }
}
```
最后的兼容未完成...
