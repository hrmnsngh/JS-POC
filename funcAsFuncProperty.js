a = 5, b= 6;

function add(num1,num2) {
    console.log(num1+num2);
}

function sub(num1,num2) {
    console.log(num1-num2);
}

function func1() {
    console.log('doing');
}

function wait(func){
    setTimeout(() => {
        func()
    },2000);
}
add(a,b);
sub(a,b);
wait(func1);

function delay(func, delay){
    this.func = func;
    this.func.wait() = function () {
        setTimeout(() => {
            func()
        },2000);    
    }
}