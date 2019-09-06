// 龙诺萱
let obj = {
    name: "longnx",
    a: /'123'/
}
console.log(obj);
// {name: "longnx", a: /'123'/}

let b = JSON.parse(JSON.stringify(obj));
console.log(b);
// {name: "longnx", a: {}}