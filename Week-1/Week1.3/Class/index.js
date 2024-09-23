 class Animal{
    constructor(name,legCount,speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("Animals")
    }
    speak(){
        console.log("Hi there " + this.speaks);
    }
 }

 let dog = new Animal("dog",4,"bhow bhow")
 let cat = new Animal("cat" ,4 ,"meow")
 cat.speak();
 dog.speak();
 Animal.myType()