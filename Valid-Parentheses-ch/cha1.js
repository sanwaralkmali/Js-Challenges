
var isValid = function(s) {
    if (s === null || s.length <= 0) return true;
    var content = s.split('');
    var close = [];
    for (var c of content) {
        if (c === '[') close.push(']');
        else if (c === '{') close.push('}');
        else if (c === '(') close.push(')'); 
        else if (close.length === 0 || c !== close.pop()) return false;
    }
    if (close.length === 0) return true;
    return false;
}

console.log(isValid("()({}[])([])"));
