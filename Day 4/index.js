class Teacher {
   constructor (type)
    {
        this.type = type;
    }
    identify()
    {
        console.log(this.type);
    }
}

let TeacherCategory = new Teacher('Temporary');
TeacherCategory.identify();


console.error(typeof Teacher);

/*Classes for animals */

let animal = class { //class expression

constructor(type)
{
    this.type = type;
}

identify()
{
    console.log(this.type);

}

}
/*Object creation */

let Dog = new animal('dog'); // object creation

Dog.identify();

console.log(Dog instanceof animal);//true

console.log(Dog instanceof Object); //true


