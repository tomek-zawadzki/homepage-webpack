import '../scss/main.scss';

/* place your code below */

console.log('HELLO 🚀')

import {buttonHamburger} from './buttonHamburger.js';

console.log(buttonHamburger);

import moment from 'moment';
console.log(moment().startOf('day').fromNow());

const data = document.querySelector('.data__paragraf1--js');

data.innerHTML = moment().startOf('day').fromNow();
data.style.fontWeight = ('700');
data.style.fontSize = ('16px');
data.style.color = ('tomato');

const dataTwo = document.querySelector('.data__paragraf2--js');

dataTwo.innerHTML = moment().format('MMMM Do YYYY');
dataTwo.style.fontWeight = ('700');
dataTwo.style.fontSize = ('16px');
dataTwo.style.color = ('tomato');

const dataThree = document.querySelector('.data__paragraf3--js');

dataThree.innerHTML = moment().format('LTS');
dataThree.style.fontWeight = ('700');
dataThree.style.fontSize = ('16px');
dataThree.style.color = ('tomato');