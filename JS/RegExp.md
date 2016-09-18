#### RegExp
>描述字符串规则的表达式 
--- 
> `/ pattern/attrs`常用  
> `new RegExp(pattern,attrs)`  
***pattern:规则***  
***attrs:属性***
##### rgexObj.test(str)`  
>测试正则表达式与指定字符串是否匹配
***只要字符串内包含正则描述的规则均为true***  

##### 1.锚点  
+ 匹配一个位置
    + `^`起始位置
    + `$`结尾位置
    + `\b`单词边界(不常用)一个单词./\bword\b/	
    
##### 2.字符类  
(匹配一类字符中的一个)
* `[abc] : a 或 b 或 c`
* `[0-9] : 一个数字`
* `[^0-9] : 非数字的一个字符`
* `[a-z] : 一个字母`
* `. : 任意字符(换行除外)`  

##### 3.元字符  
具有特殊意义的字符
+ `^ $  \b`
+ `\d : [0-9]`
+ `\s : 空白符`
+ `\w :{A-Za-z0-9}`
+ `g : 全局`  

###### 4. 量词  
出现的次数  
- `{m,n}` : m到n次
- `*` : {0,}
- `?`: {0,1}
- `+` : {1,}  

###### 5.转义字符  
需要匹配的字符是元字符  
`\`+需要转义的字符  

##### 6. 多选分支
+ 或 `|`
    + `/thi(e|n)k/ === /thi[cn]k/`  
    
##### 7. 捕获  
保存匹配到的字符串，以后再用
+ `()`：捕获
+ `(?:)` :不捕获
+ 使用：
    - `$1` , `$2`...
    - api参数或返回值  

##### 8. `str.match(regexp)`  
获取匹配的字符串，转化为数组 数组[0]为原来的字符串  
```
例：
var url = 'http://blog.163.com/album?id=1#comment';
		var arr = url.match(/(https?:)\/\/([^\/]+)(\/[^\?]*)?(\?[^#]*)?(#.*)?/);
		<!-- var arr = url.match(/(https?:)\/\/([^\/]+)([^\?]*)([^#]*)(.*)/);-->
		console.log(arr);
["http://blog.163.com/album?id=1#comment", "http:", "blog.163.com", "/album", "?id=1", "#comment", index: 0, input: "http://blog.163.com/album?id=1#comment"]

```
##### 9. 替换一个字符串  
`str.replace(regexp/substr,relacement)`  

###### `regexpObj.exec(str)`
