###### String
`"str" == 'str'`
###### 方法
+ 长度
    + `str.charAt(index)`
    + `'string'.length` // 6 

+ 获取String某位置的字符
    + `str.charAt(index)`
    + `'string'.charAt(0)`// s
```
"micromajor".charAt(0)   // "m"
"micromajor".charAt(100) // ""
```
###### 搜索
+ 在字符串内搜索某值所在位置
    + `str.indexOf(searchValue[,fromInsex])`(后一个值从哪个索引找)
```
"micro-major".indexOf("-")     // 5
"micro-major-web".indexOf("-") // 5
"micro-major".indexOf("major") // 6
"micromajor".indexOf("-")      // -1
```
+ 全局搜索 返回索引位置
    + `str.search(regexp)`
    + `'string123'.search(/[0-9]/) // 6`
    + **如果匹配不到 则返回** `-1`
```
"micromajor163".search(/[0-9]/) // 10
"micromajor163".search(/[A-Z]/) // -1
```
+ 搜索 返回匹配到的值
    + `str.match(regexp)`
    + **全局搜索需在正则后加`g`**
    + **如果匹配不到则返回 `null`**
```
"micromajor163".match(/[0-9]/) // ["1"]
"micromajor163".match(/[0-9]/g)// ["1","6","3"]
"micromajor163".match(/[A-Z]/) // null
```
###### 替换
+ `str.replace(regexp|substr，newSubstr|function)`
```
"micromajor163".replace("163","###")  // "micromajor###"
"micromajor163".replace(/[0-9]/,"#")  // "micromajor#63"
"micromajor163".replace(/[0-9]/g,"#") // "micromajor###"
"micromajor163".replace(/[0-9]/g,"")  // "micromajor"
```
###### 截取
+ `str.substring(indexA[,indexB])`
    + 开始索引与结束索引
    + 不传入结束索引，默认到最后
```
"micromajor".substring(5,7)  // "ma"
"micromajor".substring(5)    // "major"
```
+ `str.slice(beginSlice[,endSlice])`
    + 与`substring`相比，可传入负数（从后往前倒数）
    + **不传入结束索引，默认到最后**
```
"micromajor".slice(5,7)   // "ma"
"micromajor".slice(5)     // "major"
"micromajor".slice(1,-1)  // "icromajo"
"micromajor".slice(-3)    // "jor"
```
+ `str.substr(start[,length])`
    + 开始索引+长度
    + **不传入长度默认到最后**
```
"micromajor".substr(5,2)  // "ma"
"micromajor".substr(5)    // "major"
```
###### 分隔
+ `str.split([separator][,limit])`
    + 
```
"micro major".split(" ")     // ["micro","major"]
"micro major".split(" ",1)   // ["micro"]
"micro2major".split(/[0-9]/) // ["micro","major"]
```

###### 小写和大写
```
"MicroMajor".toLowerCase()  // "micromajor"

"MicroMajor".toUpperCase()  // "MICROMAJOR"
```

###### 连接
`"str1" + '连接符' + "str2"`
###### 转为String
`String()`
+ `String(121)` `//"121"`
+ `String(null)` `// "null"`
+ `String(undefined)` `// "undefined"`
###### 字符串内转义
`"str\"ing" // "str"ing"`
