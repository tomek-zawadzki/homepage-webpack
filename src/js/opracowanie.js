import '../scss/style.scss';



const name = "Tomek";
const age = 29;

console.log(name);
console.log(age);
console.log(`ELO ELO 3210, jestem ${name} i mam ${age} lat.`);



const buttonHamburger =  document.querySelector('.navigation__button--js')

buttonHamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js')
    nav.classList.toggle('navigation--open')

})



const heading = document.querySelector(".week-description__title--js");
heading.innerHTML = `Notatki z pierwszego tygodnia.`;

const allDom = document.querySelector("body");

console.log(allDom);

function greetOlder(name, age) {
  return `Witam Cię przyjacielu w stylu fat arrow, jestem ${name} i liczę sobie ${age} wiosen`;
}

console.log(greetOlder(name, age));

const greetOld = (name, age) => {
  return `Witam Cię przyjacielu w stylu fat arrow, jestem ${name} i liczę sobie ${age} wiosen`;
};

console.log(greetOld(name, age));
console.log(greetOld("joachimek", 13));

const greet = (name, age) =>
  `Witam Cię przyjacielu w stylu skróconego fat arrow, jestem ${name} i liczę sobie ${age} wiosen`;

console.log(greet("Patrynio", 100));


if ('Java' != 'Javascript') {
  console.log ('java to javascript');
}

if ('Java' != 'Java') {
  console.log ('java to javascript');
}

if ('10' === '9') {
  console.log ('no jest');
}

if (2 == 2) {
  console.log ('no równa się');
}

if ((name == 'Tomek') && (age == 29)) {
  console.log (' ale zabawowo')
}

if ((name == 'tomek') || (age == 40)) {
  console.log (' no chyaba jednak nie')
}

if ((name == 'tomek') || (age >= 12)) {
  console.log (' no chyaba jednak tak')
}

const background = document.querySelector('.body--js')
background.innerHTML

const myNumber = 17;

switch (myNumber) {
  case 17:
    console.log('jestem siedemnastką')
  break;
  case 9:
    console.log('jestem dziewięć')
  break;
  default:
    console.log('chyba śnisz, co innego')
}

const myClick = () => {
  const mistake = document.querySelector('.main__title--js')
  mistake.innerHTML = `ERROR!!! ERROR!!! ERROR!!!`
} 

const button = document.querySelector('.click--js');

console.log(button)

button.addEventListener('click', myClick)



const myMouseEnter = () => {
  const background = document.querySelector('.body--js')
  background.style.backgroundColor = "hotpink"
}

const buttonOne = document.querySelector('.mouse-enter--js');

console.log(buttonOne)

buttonOne.addEventListener('mouseenter', myMouseEnter)


const myMouseLeave = () => {
  const jumping = document.querySelector('.jump--js')
  jumping.style.width = "200px"
  jumping.style.height = "200px"
  jumping.style.fontSize = "10.0em"
}

const buttonTwo = document.querySelector('.mouse-leave--js');

console.log(buttonTwo)

buttonTwo.addEventListener('mouseleave', myMouseLeave)


const myMouseOver = () => {
  const change = document.querySelector('.workweek--js')
  change.innerHTML = `znowu coś tu popsułem`
}

const buttonThird = document.querySelector('.mouse-over--js');

console.log(buttonThird)

buttonThird.addEventListener('mouseover', myMouseOver )

