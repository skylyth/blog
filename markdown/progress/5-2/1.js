// 龙诺萱
// 第一步
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
let c = Object.assign(a, b);
console.log(c);
// {
// 	name: "longnx",
//  age: 18,
// 	book: {title: "You Don't Know JS", price: "45"}
// } 
console.log(a === c);
// true

// 第二步
b.name = "change";
b.book.price = "55";
console.log(b);
// {
// 	name: "change",
// 	book: {title: "You Don't Know JS", price: "55"}
// } 

// 第三步
console.log(a);
// {
// 	name: "longnx",
//  age: 18,
// 	book: {title: "You Don't Know JS", price: "55"}
// } 