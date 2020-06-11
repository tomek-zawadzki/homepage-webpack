import '../scss/main.scss';

/* place your code below */

console.log('HELLO 🚀')

import {buttonHamburger} from './buttonHamburger.js'

console.log(buttonHamburger)

import moment from 'moment'
console.log(moment().startOf('day').fromNow());

const data = document.querySelector('.data__paragraf--js')

data.innerHTML = moment().startOf('day').fromNow()
data.style.fontWeight = ('700')
data.style.fontSize = ('40px')
data.style.color = ('tomato')