function Type() { };
var	types = [1, "longnx", true, Symbol(123)];

for(var i = 0; i < types.length; i++) {
	types[i].constructor = Type;
	types[i] = [ types[i].constructor, types[i] instanceof Type, types[i].toString() ];
};

console.log( types.join("\n") );
// function Number() { [native code] }, false, 1
// function String() { [native code] }, false, longnx
// function Boolean() { [native code] }, false, true
// function Symbol() { [native code] }, false, Symbol(123)