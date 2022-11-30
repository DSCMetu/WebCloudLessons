# Week 5
In this week we are going to start learning Javascript and creating a counter app.
## Table of contents
- [Introduction to javascript](#introduction-to-javascript)
    - [How to connect a javascript file to a html file?](#how-to-connect-a-javascript-file-to-a-html-file)
    - [variables](#variables)
        - [variable declaration](#variable-declaration)
        - [variable types](#variable-types)
    - [operators](#operators)
    - [comments](#comments)
    - [functions](#functions)
    - [onclick event](#onclick-event)

## Introduction to Javascript
### How to connect a javascript file to a html file?
```html
<script src="index.js"></script>
```
put this line of code to between your body tags

### variables

#### variable declaration
```js
var a=5;
let b=10;
let c="gdsc-metu";
const d=20;
```
'var' and 'let' is similar. They both declare variables. If you want to run your js file in an old browser you should use 'var' keyword.  
const mean constant. So, when you declare a variable with 'const' keyword you cannot change the value after.
#### variable types
- strings
```js
var a ="this is a string";
```
- numbers
```js
var a =14;
```
converting string to integer
```js
var a="13"
a=parseInt(a)
```
converting int to number
```js
var a = 13
a=String(13)
```
### operators
```js
a=a+5;

var e=a+d;

var sub= 30-a;

var multip=a*b;

var divis=d/a;

```
### Comments
```js
//this is a inline comment
/*
this is a multiline comment
*/
```

### Functions
function example
```js
function m20(number){
    return number*20
}
```
### onclick Event
onclick in html 
you can refer to a function written in your js file in html with this method 
```html
<div onclick="functionName">text</div>
```
onclick in js
```js
object.onclick()=function(){
    //action happens here!!!
}
```
eventListener in js
```js
document.getElementById("elementId").addEventListener('click',function(){
    //action happens here!!!
})
```