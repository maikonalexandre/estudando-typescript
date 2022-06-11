// Comandos----->

// tsc --> faz a compilação do codigo .TS para .JS
// tsc -w --> deixa a compilação automática



//Anotação-------------------->>>>>>>
const x:number = 10;
console.log(x);

//Inferência------------------>>>>>>>
let y = 10 ; 
// y == number
y  = 20; 
console.log(typeof y);

//Obejet---------------------->>>>>>>
const myNumbers: number[] = [1,2,3];
console.log(myNumbers);
console.log(myNumbers.length);

//console.log(myNumbers parseFloat);
//Não é possivel pois parseFloat é um método de string;

//Tuplas---------------------->>>>>>>
let myTupla: [number, string, string[]]
myTupla = [5, 'a', ['a', 'b', 'c']]

console.log(typeof myTupla);

//Obejetos literais--{prop: value}-->>
const user:{name: string; age:number} = {
    name: 'artur',
    age: 18,
}
console.log(user);
console.log(user.age);

// union type ------------------->>>>>

let id: string | number = 10;
console.log(typeof id);
id = 'Pedro';
console.log(typeof id);

// alias ---------------------->>>>>>
type myIdType = number | string;
const userId: myIdType = 10 ;
console.log(userId); 

// enum ---------------------->>>>>>
enum Size {
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande'
}

let camisa = {
    name: "Camisa gola v",
    size: Size.P
}
// camisa = {
// name: 10,
// size: Size.P
// } Me retornaria um erro pois name recebe String por inferencia. 
console.log(camisa);
console.log(typeof camisa.name);
console.log(camisa.size);

//tipos literais ------------------->>>>>
let literal: 'literal' | null;
//literal = 'jorge'; literal tem o tipo 'Literal' isso então da erro pois estou atribuindo uma string. 
literal = 'literal';
console.log(typeof literal);

//funçoes ----------------------->>>>
function sum (a:number,  b:number): String{
  const x =  a + b
  return x.toString(); 
}
console.log(sum(1,2), typeof x);
// aqui estou retornando um string se retornasse um numero iria da um erro. 

// parametro opcional ------------------>>>>>
function hello(firstname:string,  lastname?:string):string{
    const xs = ['1','2','3','4'];


    return(
        console.log('Mateus'),
        
        xs.map(x  => parseInt(x)),
        console.log(x),


        xs.forEach(x => {
            console.log(x);
        }),


        'ola ' +  firstname + ' '+ lastname + ' ' + Number(1)
         //Observe que é obrigatorio o retorno da string, mas tbm é possivel passar numeros
         // metodos java scripts não sao retornos. entao mesmo se a funçao estivesse esperando um retorno void e dentro estivesse
         // metodos js nao aconteceria nenhum erro. 

        
        
)
}
console.log(hello('joao'));

// generics ------------------>>>>>
function showArrays<T>(arr: T[]){
return(
arr[0]
)}
console.log(showArrays(['x']));
//Essa é oma funçao generica que recebe qualquer tipo de array. 

class User {
    name
    role
    constructor(name:string, role:string){
        this.name = name;
        this.role = role; 
    }
}

const Zeca = new User("Zeca", '20'); 
console.log(Zeca);



