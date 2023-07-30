/*tema 16*/
const DogAge = (age,conversionRate) =>
{
  const DogYears=age*conversionRate;
  return `Your doggie is ${DogYears} years old in dog years!`;
}
console.log(DogAge(3,'Jack'));
console.log(DogAge(0.6,'Max'));
console.log(DogAge(4,'Cooper'));


const calculateSupply = (Age, amountPerDay) =>
{
  const maxAge=60;
  const totalAmount = ((maxAge-Age) *365) * amountPerDay;
  return `You will need ${totalAmount} to last until the ripe old age of ${maxAge}`;
}
console.log(calculateSupply(35, 4));
console.log(calculateSupply(40, 2));
console.log(calculateSupply(50, 3));


const pi=3.14;
const calcCircumfrence =(radius)=>{
  const L=2*pi*radius;
  return `The circumference is ${L} units`;
}
console.log(calcCircumfrence(4));

const calcArea=(radius)=>{
  // const A=pi*radius*radius;
  const circumference = calcCircumfrence(4);
  const area=(circumference**2)/(4*pi)
  return `The area is ${area} square units`;
}
console.log(calcArea(4));




/*tema 17*/
const fruits =[];
fruits.push('apple','banana','orange');
console.log(fruits);
console.log(fruits.length);
console.log(`${fruits[0]}, ${fruits[1]}, ${fruits[2]}`);

const numbers =new Array(1,2,3,4,5);
console.log(numbers.pop());
console.log(numbers);
console.log(numbers.shift());
console.log(numbers);

const colors =new Array('red', 'blue','green','yellow');
console.log(`Pozitia elementului "green" este ${colors.indexOf('green')}`);
console.log(colors.includes('orange'));

const names=new Array('John','Jane','Mike','Anna');
names.unshift('David');
console.log(names);
console.log(`Pozitia elementului cu numele "Mike" este ${names.indexOf('Mike')}`);

const numbers1=new Array(2,4,6,8,10);
console.log(numbers1.includes(5));
numbers1.push(12);
console.log(numbers1);

let i;
const fruits1=new Array('apple', 'banana', 'orange');
for (i=0;i<fruits1.length;i++)
{
  console.log(fruits1[i]);
}

let sum=0;
const numbers2=new Array(1,2,3,4,5);
for (i=0;i<numbers2.length;i++)
{
  sum+=numbers2[i];
}
console.log(sum);

const names1=new Array('Johnr', 'Jane', 'Mike', 'Anna');
let namesLenght=[];
for (i=0;i<names1.length;i++)
{
  console.log(names1[i].length);
  // namesLenght.push(names1[i].length);
}
// console.log(namesLenght);
  






//split
const str ="The quick fox jumps pver the lazy dog. The house is white.";
const words = str.split('.');
console.log(words);

const chars=str.split('');
console.log(chars);

const strcopy=str.split();
console.log (strcopy);

//toLowerCase, toUpperCase
const sentence ="The quick fox jumps pver the lazy dog. The house is white.";
console.log (sentence.toLowerCase());

//String.slice() -- 31- scoate primele 31 caractere.. manipulari precum -4,-5...
const sentence1 ="The quick fox jumps pver the lazy dog. The house is white.";
console.log (sentence1.slice(31));

//join -- pentru a forma un string inapoi dupa split cu alt fel de separator intre ele

//rezolvare probleme folosind split
//gaseste cel mai lung cuvant intr-un string

const findTheLongestWord= (string1) =>
{
  let theLongestWord= '';
  const words1=string1.split(' '); //impartim pe cuvinte - vom primi un array de cuvinte
  for (const word of words1)
  {
    if (word.length>theLongestWord.length)
    {
      console.log ({word});
      theLongestWord=word;
    } 
  }
  return theLongestWord;
}

console.log (findTheLongestWord('Today is a beautiful day'));

const path ='127.0.02:5501/landing-page/index.html';
const paths = path.split('/'); //desparte fiecare element si pune in array
console.log (paths);

//exercitii cu JOIN
paths.join('//');


//MATH.MAX- gasirea celui mai mare numar dintr-un array
const findTheBiggestNumber = (array) =>
{
  // return Math.max(...array); //scoate toate elementele din array
  let theBiggestNumber=array[0];
  for (const i=1;i<=array.length;i++)
  {
    if (array[i]>theBiggestNumber) theBiggestNumber=array[i];
  }
  return theBiggestNumber;
}
console.log(findTheBiggestNumber([1,2,3,4,7,10]));

//CCONCATINAREA la 2 array-uri
const concatinateArrays = (array1, array2) =>
{

  // return array1.push(...array2);
  // return [...array1, ...array2];
  
}
const array1=[1,2,3,4];
const array2=[5,6];

//calcularea sumei si diferentei a doua numere. scrieti o functie 
// care primeste un obiect destructurat cu proprietatiele a si b
// si returneaza un alt obiect care contine suma si diferenta a acestor doua numere
const calculateSumaAndDif = ({a,b}) =>
{
  return{
    sum: a+b,
    diff: a-b
  } //va fi afisat direct acest obiect
}

calculateSumaAndDif({a: 4, b: 14});
calculateSumaAndDif({a: 3, b: 5}.diff);//ca direct sa-mi afiseze doar diferenta


//inversarea literei mari cu cea mica. Scrieti o functie care primeste un string
// si inverseaza literele mari cu cele mici si viceversa

const invreseLetters =(string2) =>
{
  let inversetString2 ='';

  for (let i=0; i<string2.length; i++)
  {
    const char = string2[i];
    // H, H este egal cu H? (.toUpperCase) da-se schimba in LowerCase
    if (char === char.toLocaleUpperCase())
    {
      inversetString2 += char.toLocaleUpperCase();
    }
    else {
      inversetString2 +=char.toUpperCase();
    }
  }
  return inversetString2; // se va afisa doar ultimul caracter - !. De aceea elementele trebuie adunate
}

inversetString2('Hello world!');

//problema letcode.com
var createCounter = function (n)
{
  return function()
  {
    return (n++);
  }
}
















//LESSON 22
//write a Js code to calculate the sum of digits in a number

function digitSum(num)
{
  let sum=0;
  while(num > 0)
  {
    const rest=num%10;
    sum+=rest;
    num=Math.floor(num/10); //sau num/=10 - dar trebuie de facut rotungirea nr. Pentru ca sa nu avem nr dupa virgula
  }
  return sum;
}

console.log(digitSum(34253));

//Closure function - o functie are o alta functie sau mai multe inauntrul sau
//write a function that would you to multiply two numbers in this way
function mul(x)
{
  return function(y)
  {
    return x*y;
  }
}

console.log (mul(2)(3));  //(6)-sugereaza ca inauntru functiei mul mai avem o functie care nu are nume


//write a js code to find the power of a number

function numPower(num,pow)
{
  return num ** pow;
}

console.log(numPower(4,3));








//lesson 23
//accesing elements
const element = document.getElementById('myElement');
const image = document.getElementsByClassName('image');
const [button] = document.getElementsByClassName('image-button'); //[button] e la fel ca button[0]
//const image = document.querySelector('.image');

//modifying elements
element.style.backgroundColor='#45F34'; //CSS din js nu e recomandat

const changeBackground = () =>{
  element.style.backgroundColor='#45F34';
  element.textContent='New content';
  element.innerHTML=`<strong>New HTML content</strong>`;//schimba contentul din elementele deja definite
  button.removeAttribute('disabled');
};

const changeImage = () =>
{
  image.setAttribute('src','img/Vector5.png');//seteaza un atribut nou
  image-button
}

const showImage = () =>
{
  if (image.style.display==='none')
  {
    image.style.display='block';
    button.textContent='Hide image';
  }
  else {
    image.style.display='none';
    button.textContent='Show image';
  }
}// daca initial img e ascunsa dupa ce apasam buttonul ea se va afisa, cand apas img iar va disparea

button.addEventListener('click', showImage);//in loc sa fie scris onclick in html

const form = document.querySelector('.form-container');
form.addEventListener('submit',(event) =>
{
  event.preventDefault();//to prevent from submission
  const fullNameInput = document.querySelector('.fullName');
  const mailInput = document.querySelector('inout[type="email"]');
  const select1 = document.querySelector('select:nth-of-type(1)');
  const select2 = document.querySelector('.select:nth-of-type(2)');
  const messageInput = document.querySelector('.messageI-input');

  if (fullNameInput.value.trim() === '')
  {
    alert('Please enter your name');
    fullNameInput.focus();
  }

  console.log (fullNameInput.value.trim());//.value - vine string in orice circumstanta
  console.log (mailInput.value);
  console.log (select1.value);
  console.log (select2.value);
  console.log (messageInput.value);
  form.reset();//reseteaza automat toate datele pe care le scii

})





//lesson 24


const fetchData = () =>
{
  fetch("http://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then((data =>console.log(data)))
  .catch(error=>console.log(error));
  //data - datele de la executarea ftiei anterioare
}