let options = {
   weight: 1024,
   height: 2024,
   name: "Стартовый" 
};

console.log(options.name);

options.name = "новый";
options.bool = false;
options.colors = {
black: 101,
white: 102,
green: 103
};
console.log(options);

for (let key in options){
    console.log(key+" - "+options[key]);
    console.log("тип - "+typeof(options[key]));
}
console.log(Object.keys(options).length);

let Arr = [1,12,32,14,5,6];
//Arr.push(11111);
//Arr.unshift('000');
Arr.forEach(function (item, i, mass) {
 console.log("элемент "+i+" = "+item);   
});

console.log(Arr.sort(fff));

function fff(a, b)  {return a-b;};
let er = (a,b)=>a-b;

let ss = "q,e,r,t,y";
spl =  ss.split(',');
spl.forEach(function (item, i, mass) {
    console.log("элемент "+i+" = "+item);   
   });
   let obg = new Object();
   let obj = {};