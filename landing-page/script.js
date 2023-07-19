const toggleMenu = () => {
  console.log ('clicked');
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.nav-links');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

let country, continent, population;
country="Germany";
continent="Europe";
population=83;
console.log (country+" "+continent+" "+population);
let isIsland=false;
let description=`${country} is in ${continent}, and it has ${population} million people`;
console.log(description);


const weightAna =65, weightBob=93, heightAna=1.75, heightBob=1.83;

let anaBMI, bobBMI;
anaBMI=weightAna/(Math.pow(heightAna,2));
console.log(`Ana BMI: ${anaBMI}`);
bobBMI=weightBob/(Math.pow(heightBob,2));
console.log(`Bob BMI: ${bobBMI}`);

if (anaBMI<18.5) console.log('Ana is underweight');
else if(anaBMI>18.5 && anaBMI<25) console.log('Ana is normal weight');
else console.log('Ana is overweight');

if (bobBMI<18.5 || bobBMI>25) console.log('Bob is underweight or overweight');
else console.log('Bob is underweight'); 


const number=17;
number %2 == 0 ? console.log(`${number} is even`) : console.log(`${number} is odd`);

isLogged=true;
isLogged===true ? console.log("The user is authenticated") : console.log("The user is not authenticated");

let stoc=8;
let pret = (stoc>10) ? console.log("Pretul este 100") : console.log("Pretul este 200");

const year=1900;
(year%400===0 || (year%4===0 && year%100!==0)) ? console.log(`${year} is leap`) : console.log(`${year} isn't leap`);

const grade=6;
grade>=5 ? console.log("The student passed the exam") : console.log("The student did not passed the exam");

const countryCod='RU';
let countryName;
switch (countryCod)
{
  case 'RO': 
  countryName='Romania';
  console.log (countryCod);
  break;
  case 'DE': 
  countryName='Germania';
  console.log (countryCod);
  break;
  case 'IT': 
  countryName='Italia';
  console.log (countryCod);
  break;
  case 'MD': 
  countryName='Moldova';
  console.log (countryCod);
  break;
  case 'US': 
  countryName='Statele Unite ale Americii';
  console.log (countryCod);
  break;
  case 'RU': 
  countryName='Rusia';
  console.log (countryCod);
  break;
  default: console.log("Aceasta tara nu exista in switch-ul meu(. Mai inceraca! ");
}

const score=81;
let Grade;
switch (true)
{
  case (score<=100 && score>=90): Grade="A"; console.log("Your grade is A");
  break;
  case (score>=80 && score<=89): Grade="B"; console.log("Your grade is B");
  break;
  case (score>=70 && score<=79): Grade="C"; console.log("Your grade is C");
  break;
  case (score>=60 && score<=69): Grade="D"; console.log("Your grade is D");
  break;
  case (score<=59): Grade="F"; console.log("Your grade is F");
  break;
  default: console.log("Something went wrong. Your score may not be real. Try again ");
}




const tellFortune = (children, partner, location, jobTitle) =>
{
   if (partner>20 && children>20)
   {
    return `You will be a ${jobTitle} in ${location}, and married to ${partner} with ${children} kids`;
   }
   else if (partner && !children)
   {
    return `You will be a ${jobTitle} in ${location}, and married to ${partner}`;
   }
   else 
   {
    return `You will be a ${jobTitle} in ${location}`;
   }
}

console.log(tellFortune(20, 'Bob', 'Australia','doctor'));
console.log(tellFortune(10, undefined, 'Australia','doctor'));
console.log(tellFortune(undefined,'Tom', 'Australia','doctor'));


