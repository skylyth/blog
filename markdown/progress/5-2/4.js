// 龙诺萱
// 测试用例
let a = {
    name: "advanced",
    age: 18
}
let b = {
    name: "longnx",
    book: {
        title: "You Don't Know JS",
        price: "45"
    }
}
let c = Object.assign2(a, b);
console.log(c);
// {
// 	name: "longnx",
//  age: 18,
// 	book: {title: "You Don't Know JS", price: "45"}
// } 
console.log(a === c);
// true