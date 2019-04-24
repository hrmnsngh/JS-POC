str1 = "foo";
str2 = "bar";
str3 = str1 + str2;

function val1(){
    return str3;
}
function val2(){
    return function() {
        return function(){
            return function(){
                return function(){
                    return "42";
                }
            }
        }
    }
}

function innerValue(argument) {
if(typeof argument ==='function') {
    innerValue(argument());
} else {
    console.log(argument);
}
}


innerValue(str1);
innerValue(str2);
innerValue(str3);
innerValue(val2);