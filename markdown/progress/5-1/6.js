// 龙诺萱
let a = {
    name: "longnx",
    book: {
        title: "You Don't Know JS",
        price: "45"
    }
}
let b = JSON.parse(JSON.stringify(a));
console.log(b);
// {
// 	name: "longnx",
// 	book: {title: "You Don't Know JS", price: "45"}
// } 

a.name = "change";
a.book.price = "55";
console.log(a);
// {
// 	name: "change",
// 	book: {title: "You Don't Know JS", price: "55"}
// } 

console.log(b);
// {
// 	name: "longnx",
// 	book: {title: "You Don't Know JS", price: "45"}
// } 