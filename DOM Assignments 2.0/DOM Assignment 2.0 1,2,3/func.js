

//  Add Hire Me Link to Navbar

const LIST = document.querySelector('nav ul')
LIST.innerHTML += '<li><a href ="#">Hire Me</a></li>'

// Search Field

const SEARCH = document.querySelector('.search-field')
SEARCH.firstElementChild.value = 'Search My Project'


// Adding Random role & Company

const GET_ROLE = document.querySelector('#role')
const GET_COMPANY = document.querySelector('#company')

const ROLES = ['a Freelancer', 'an Employee']
const COMPANIES = ['National and International Client', 'Ineuron Inteligence Pvt. Ltd']

const RANDOM_ROLES = Math.floor(Math.random()* ROLES.length)

GET_ROLE.textContent = ROLES[RANDOM_ROLES]
if (GET_ROLE.textContent === ROLES[1]) {
    GET_COMPANY.textContent = COMPANIES[1]
}

//  Adding Image

const IMAGE = document.querySelector('.hero-right-section img')

IMAGE.src = './akashphoto.jpg'

//  Adding Support Me Button

const BTN = document.querySelector('.hero-right-section-btns')

BTN.innerHTML += '<button>Support Me</button>'

