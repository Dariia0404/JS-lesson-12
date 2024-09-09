/*
function summarize(num) {
    return function(arg) {
        if (arg === undefined) {
            arg = 1;
        }
        return num + arg;
    };
}

const addFive = summarize(5);
console.log(addFive(3)); 
console.log(addFive()); 
*/

/*
function counter(startValue, step) {
    let count = startValue;

    function counterFunction() {
        count += step;
        return count;
    }

    counterFunction.increment = function() {
        count += step;
        return count;
    };

    counterFunction.decrement = function() {
        count -= step;
        return count;
    };

    counterFunction.reset = function() {
        count = startValue;
        return count;
    };

    return counterFunction;
}

const myCounter = counter(10, 2);
console.log(myCounter());       
console.log(myCounter());    
console.log(myCounter.increment()); 
console.log(myCounter.decrement()); 
console.log(myCounter.reset());     
*/

function sequence(...funcs) {
    return function(initialValue) {
        return funcs.reduce((result, fn) => fn(result), initialValue);
    };
}

function foo1(a) {
    console.log(a + 1);
    return a + 1;
}

function foo2(a) {
    console.log(a + 2);
    return a + 2;
}

function foo3(a) {
    console.log(a + 3);
    return a + 3;
}

let func = sequence(foo1, foo2, foo3);
func(9); 