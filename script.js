function Human (gender, age, name){
   this.gender = gender;
   this.age = age;
   this.name = name;
   this.sayName = function() {
alert(this.name +" - это моё имя");
   };
}

let Ivan = new Human("Мужик",20,"Иван");
console.log(Ivan);
Ivan.sayName();
let Petr = new Human("Мужик",20,"Пёртр");
console.log(Petr);
Petr.sayName();

