"use strict"
/* var choice = 3;
switch(choice) {
    case 1 : console.log('1');
    break;
    case 2 : console.log('2');
    break;
    case 3 : console.log('3');
    optionProp = choice;
    break;
    default : console.log('wrong choice');
}

var option = {
    type: 'Decision or choice opted for',
    "future outcomes": 'Unknown',
    [optionProp] : 'props'
};
option.profit = "unknown";
option['quality measure'] = "unknown";
console.log(option);
option._proto_ = "this is proto";
console.log(option._proto_);
 */

var a, b, c, d, e;
a = false;
b = true;
c = false;
d = false;
e = 'yes';

if(a && b && c && d || (e === 'yes')) {
    console.log('true');
} else {
    console.log('false');
}