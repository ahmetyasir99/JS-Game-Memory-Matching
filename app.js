const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random()) //sorting(shuffle) the array randomly,

const gridDisplay = document.querySelector('#grid')
let resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIDs =[]
const cardsWon = []

function createBoard() {
    let i;
    for (i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img') //creating elements named img
        card.setAttribute('src','images/blank.png') //adding src attribute
        card.setAttribute('data-id',i) //giving unique id to cards
        card.addEventListener('click',flipCard) //when clicked flipCard funtion works
        gridDisplay.appendChild(card) //adds elements to inside of gridDisplay HTML element tag
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img') //img inside the grid id element
    const optionOneId = cardsChosenIDs[0]
    const optionTwoId = cardsChosenIDs[1]
    console.log('check for match');

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png') //make them default
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert("You have clicked the same image")
    }

    if(cardsChosen[0] == cardsChosen[1]){
        alert("You found a match")
        cards[optionOneId].setAttribute('src','images/white.png') //make them white
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click',flipCard) //remove event listener
        cards[optionTwoId].removeEventListener('click',flipCard)
       
        cardsWon.push(cardsChosen)
    }else {
        cards[optionOneId].setAttribute('src','images/blank.png') //make them default
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('Sorry try again')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = [] //empty the array again
    cardsChosenIDs = []

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = "Congratulations!"
    }
}

function flipCard() {
    // The getAttribute() method of the Element interface returns the value of a specified attribute on the element.
    const cardId=this.getAttribute('data-id') //clicked item 'this' and data-id attribute taken
    cardsChosen.push(cardArray[cardId].name) //collecting clicked items in an array
    cardsChosenIDs.push(cardId)
    console.log(cardsChosen,cardsChosenIDs)
    this.setAttribute('src',cardArray[cardId].img) //showing the picture of chosen card
    if(cardsChosen.length ===2){
       setTimeout(checkMatch,500)
    }
}