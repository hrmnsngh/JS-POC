var obj = {
    name : 'Singh',
    printObj: function() {
        return this.name;
    }
};

console.log('unbinded obj ',obj.printObj);
var func = obj.printObj;
console.log('func ', func());

var bindedObj = func.bind(obj);
console.log('Binded obj', bindedObj());