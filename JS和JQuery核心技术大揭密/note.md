## JavaScript note

[TOC]

### 事件的引入方式

* 第一种引入方式：直接在input上加事件;
* 第二种引入方式：给input标签设置一个id,js代码中找到id加载事件

```javascript
<input type="button" value="测试第一个按钮" onclick="test();">
<input type="button" value="测试外部事件" id="btn">

<script type="text/javascript">
function test() {
  alert("我是一个按钮");
};
onload = function() {
  document.getElementById('btn').onclick = function() {
    alert('我是外部按钮');
  }
}
</script>
```

### JavaScript 全局对象

- 全局属性和函数可用于所有内建的 JavaScript 对象。

#### 顶层函数(全局函数)

##### isNaN() 检查某个值是不是数字

- isNaN(x) x是必须值,是为要检测的值,如果转换是NaN,则直接输出true.否则输出false.

##### parseInt() 函数可解析一个字符串，并返回一个整数。

- parseInt(string);返回解析后的整数。

```html
console.log("parseInt('13')= "+ parseInt("13"));		//返回 13
console.log("parseInt('15',10)= "+ parseInt("15",10));	//返回 19 (10+9)
console.log("parseInt('11',2)= " + parseInt("11",2));	//返回 3 (2+1)
console.log("parseInt('17',8)= " + parseInt("17",8));	//返回 15 (8+7)
console.log("parseInt('1f',16)= " + parseInt("1f",16));	//返回 31 (16+15)
console.log("parseInt('010')= "+ parseInt("010"));		//未定：返回 10
```

##### parseFloat() 函数可解析一个字符串，并返回一个浮点数。

- parseFloat(string);返回解析后的浮点数字。

```html
document.write(parseFloat("10")); 		//返回 10
document.write(parseFloat("10.00")); 	//返回 10.00
document.write(parseFloat("10.33")); 	//返回 10.33
document.write(parseFloat("34 45 66")); //返回 34
document.write(parseFloat(" 60 ")); 	//返回 60
document.write(parseFloat("40 years"));	//返回 40
document.write(parseFloat("He was 40"));//返回 NaN

<!--结果都为 3.14-->
document.write(parseFloat("3.14")) 
document.write(parseFloat("314e-2")) 
document.write(parseFloat("0.0314E+2")) 
document.write(parseFloat("3.14more non-digit characters")) 
```

##### String() 函数  把对象的值转换为字符串。

```html
var a=123;
var b=true;
var c;
var d=null;

console.log(String(a));	//123
console.log(String(b));	//true
console.log(String(c));	//undefined
console.log(String(d));	//null
```

##### String() 和 toString()的区别

- 首先,两者都是把其他类型的变量转换为字符串的方法
- 其次,toString()无法转换null类型和undefined类型

```html
var a=123;
var b=true;
var c;
var d=null;
console.log(a.toString());    //123
console.log(b.toString());    //true
// console.log(c.toString()); //会报错
// console.log(d.toString()); //会报错

console.log(String(a));        //123
console.log(String(b));        //true
console.log(String(c));        //undefined
console.log(String(d));        //null
```

##### Number()  把对象的值转换为数字。

```html

```

- (2017年)转换Excel将时间戳转换为日期格式的算法
- =TEXT((B1/1000+8*3600)/86400+70*365+19,"yyyy-mm-dd hh:mm:ss")
- ​从1970-01-01 08:00:00开始,使用10位/13位的数进行表示,每增加1或者1000,时间增加1秒.(格林威治时间)











