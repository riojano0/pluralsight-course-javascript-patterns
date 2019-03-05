var obj = {};

var nextObj = Object.create(Object.prototype);

var lastObj = new Object();

// Asign objects

var obj2 = {};

obj2.param = 'new Value';

obj2['param2'] = 'new value 2';

var param3Variable = 'param3';

obj2[param3Variable] = ' new value 3';

console.log(obj.param);
console.log(obj['param']);
console.log(obj2[param3Variable]);
