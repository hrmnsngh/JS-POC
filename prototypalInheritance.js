//Prototypal Inheritance in JS

/* 1. __proto__ object (remember is double _)

There are actually only two limitations:

->The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
->The value of __proto__ can be either an object or null, other types (like primitives) are ignored.
 */

/* let animal = {
    eats: true,
    move() {
        console.log('walks');
    }
};

let herbivores = {
    jumps: true,
    __proto__ : animal
};
herbivores.move();

console.log( 'herbivores Jumps :'+ herbivores.jumps +' herbivores Eats : '+ herbivores.eats); */


//trying __proto__ in circle, so

/* let animal = {
    eats: true,
    move() {
        console.log('walks');
    }
};

let herbivores = {
    jumps: true,
    __proto__ : animal
};

let horse = {
    __proto__ : herbivores
};

horse.move();

horse.move = () => {
    console.log('runs');
};

horse.move();

herbivores.move();

delete animal.move;

console.log(herbivores.move); */


//Another problem and correct solution for this
/* 
let cat = {
    stomach : [],
    eat(food) {
        this.stomach.push(food);
        console.log(this.stomach);
    }
};

let kitty = {
    __proto__ : cat
};

let billy = {
    __proto__ : kitty
};

kitty.eat('wiskas tuna');
console.log(billy.stomach); // here all the cats share the same stomach
console.log(cat.stomach); */

//solution

// partial solution here billy will still share kitty stomach
/* let cat = {
    stomach : [],
    eat(food) {
        this.stomach = [food];
        console.log(this.stomach);
    }
};

let kitty = {
    __proto__ : cat
};

let billy = {
    __proto__ : kitty
};

console.log('partial solution');

kitty.eat('wiskas tuna');
console.log(billy.stomach); 
console.log(cat.stomach); */

//complete solution: create stomach in each cat
console.log('complete solution');
let cat = {
    stomach : [],
    eat(food) {
        this.stomach = [food];
        console.log(this);
    }
};

let kitty = {
    __proto__ : cat,
    stomach: []
};

let billy = {
    __proto__ : kitty,
    stomach: []
};

kitty.eat('wiskas tuna');
console.log(billy.stomach); 
console.log(cat.stomach);
