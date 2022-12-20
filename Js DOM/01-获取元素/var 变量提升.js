var a = 10;
f();
function f()    // 函数是一个单独作用域
{
    console.log(a);   // undefined 由于 函数里 var a = 9;  var a 被提升到首句，a 被重新定义 ， console.log(a) 输出的无法查找
    var a = 9;
    console.log(a);
}
console.log(a);
for (let i = 0; i < 5; i++)
{
    i++;
}
console.log(i);