function toArray(nodes){
    try {
        // works in every browser except IE
        return Array.prototype.slice.call(nodes);
    } catch(err) {
        // Fails in IE < 9
        var arr = [],
            length = nodes.length;
        for(var i = 0; i < length; i++){
            // arr.push(nodes[i]); // 两种都可以
            arr[i] = nodes[i];
        }
        return arr;
    }
}