/*function makePet(name,type) {
    const pet = {};
    pet.name = name;
    pet.type = type;
    return pet;
}
let cat = makePet("Marla","macka");
console.log(cat);

let dog = makePet("Max","pas");
console.log(dog);

//constructor

function MakePet(name,type) {
    this.name = name;
    this.type = type;    
};
const cat = new MakePet("Macak","macka");
console.log(cat);*/

class MakePet {
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    makeSaund(a){
        console.log(a);
    }
};
/*const cat = new MakePet ("Mckast","macak");
console.log(cat);*/

class Cat extends MakePet{
    constructor(name,type,color){
        super(name,type);
        this.color = color;
    }
    makeSaund(){console.log('Mjau...');}
};
class Dog extends MakePet{
    constructor(name,type,color){
        super(name,type)
            this.color=color;
    }
};

const cat = new Cat('tom','macak','zuta');
const dog = new Dog('kuca','pas','crna');

console.log(cat);
console.log(dog);