let a = 10;
{
    let c = 10;   // let 没有变量提升，并且可以声明块级作用域
    var b = 10;
    console.log(a);
}
console.log(b);
console.log(c);