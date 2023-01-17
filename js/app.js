// const items = document.querySelectorAll('.item')

// const expand = (item, i) => {
//   items.forEach((it, ind) => {
//     if (i === ind) return
//     it.clicked = false
//   })
//   gsap.to( items, {
//     width: item.clicked ? '15vw' : '8vw',
//     duration: 2,
//     ease: 'elastic(1, .6)'
//   })

//   item.clicked = !item.clicked
//   gsap.to(item, {
//     width: item.clicked ? '42vw' : '15vw',
//     duration: 2.5,
//     ease: 'elastic(1, .3)'
//   })
// }

// items.forEach((item, i) => {
//   item.clicked = false
//   item.addEventListener('click', () => expand(item, i))
// })


// //my work


// let M = "Male" 
// let F = "female"
// function tap(a){
//   if (a == 'f' || a == 'F') {
//     return console.log('Your gender is ' + F); 
// } else if (a === 'M' || a === 'm') {
//   return console.log('Your gender is ' + M ); 
// } else {
//   return console.log('Your gender is not defined'); 
// }
// }
// console.log(tap(''));


// let btn = document.getElementById('btn');
// console.log(btn);
//   document.getElementById('btn').addEventListener('click', function(){
//     btn.toggleAttribute("active");
//   })

// var day = prompt('Please enter a day of week', 1)
// function sad(){
//   if (day == 1){
//     return alert('Понедельник'), document.getElementById("cl").innerText = 'Понедельник' 
//   } else if (day == 2){ 
//     return alert('Вторник'), document.getElementById("cl").innerHTML = 'Вторник';
//   }else if (day == 3){
//     return alert('Среда'), document.getElementById("cl").innerHTML = 'Среда'
//   } else if (day == 4){
//     return alert('Четверг'), document.getElementById("cl").innerHTML = 'Четверг'
//   }else if (day == 5){
//     return alert('Пятница'), document.getElementById("cl").innerHTML = 'Пятница'
//   }else if (day == 6){
//     return alert('Субота'), document.getElementById("cl").innerHTML ='Субота'
//   } else if (day == 7){
//     return alert('Воскресенье'), document.getElementById("cl").innerHTML = 'Воскресенье'
//   }else{
//     return confirm('Please enter a day of week', cl) // document.body.innerHTML =  'You have not entered a day'
//   }
// }
// console.log(sad());
// let age = prompt('Сколько тебе лет?', 100);

// alert(`Тебе ${age} лет!`); // Тебе 100 лет!


// let a = Math.floor(Math.random() * 8)
// a = 0
// switch (a) { 
//   case 1: 
//             alert('Понедельник'); 
//     break;
//     case 2: 
//             alert('Вторник')
//     break;
//         case 3: 
//             alert('Среда')
//         break;
//         case 4: 
//             alert('Четверг')
//         break;
//         case 5:
//             alert('Пятница')
//             break;
//             case 6:
//             alert('Субота')
//                 break;
//             case 7:
//             alert('Воскресенье')
//                 break;
//                 default: 
//             alert('день недели')
//                 break;
// }
// console.log(a)
let random = parseInt(Math.random() * 4)
let random2 = parseInt(Math.random() * 10)
console.log(random, random2)
// let age = 19


// function human(name){
//     if (age < 18){
//         return result = name + ' имеет возвраст ' + age + ' и он ' +  'under 18' ; 
//     }
//     if (age < 21){
//         return result = name + ' имеет возвраст ' + age + ' и он ' + 'under 21' ; 
//     }
//     if (age < 25){
//         return result = name +' имеет возвраст '+ age +' и он '+ 'under 25' ; 
//     }else if (age < 30){
//      return result = name + ' имеет возвраст ' + age + ' и он ' + 'under 30' ; 
//     }
//         else if (age < 35){
//         return result = name + ' имеет возвраст ' + age + ' и он ' + 'under 35' ; 
//         }
//         else if (age < 40){
//             return result = name + ' имеет возвраст ' + age + ' и он ' + 'under 40' ; 
//         }
//         else if (age < 45){
//         return result = name + ' имеет возвраст ' + age + ' и он ' + 'under 45' ;  
//         }
//         else if (age < 50){
//             return result = name + ' имеет возвраст ' + age + ' и он ' + ' under 50' ; 
//         }
//         else if (age < 80){
//             return result = name + ' имеет возвраст ' + age + ' и он ' + ' under 80' ; 
//         }
//         else if (age < 100){
//             return result = name + ' имеет возвраст ' + age + ' и он ' + ' under 100' ; 
//         } 
//         else{
//             return 'Write your age';
//         }
// }

// console.log(human(''))
// function example(){
//  if (random % 2 == 0){
//     return true
//  }else{
//     return false
//  }
// }
// console.log(example())

var player ={
    name: 'John: $',
    chips: 20
}
let cards = []
let sum =  0
let hasBlackJack = false
let isAlive = false
let message = ""
// let messageEl = document.getElementById('message-el')
//the same as above
let messageEl = document.querySelector('#message-el')
let sumEl = document.getElementById('sum-el') 
let cardEl = document.querySelector('#cards-el')
let playerEl = document.querySelector("#player-el")
playerEl.innerHTML = player.name + player.chips
console.log(player.chips)
// if (sum === 15) {
//     player.chips = 299
// }
function startGame() {
    
    if (sum >= 16){
        location.reload(true)
        var name = prompt('Please enter your name!', 'John')
    player.name = name
    }else if(sum === 15){
            player.chips = 299
            playerEl.textContent = player.name + player.chips
    }
    else{
        isAlive = true
    let fisrtCard = random2 
    let secondCard = random 
    cards.push(fisrtCard, secondCard)
    sum += secondCard + fisrtCard
    renderGame()
    }
}

function renderGame() {
    if (sum <= 14) {
        message = "Do you want to start a new game?"
    }else if (sum === 15) {
        message = "You have got a BlackJack!"
        hasBlackJack = true
        player.chips = 299
    }else{
        message = "You'r out of the game!"
        isAlive = false
    }messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    // cardEl.innerHTML ="Cards: "
    for (let i = 0; i < cards.length ; i++) {
        cardEl.textContent += cards[i] + " "
    }
}
function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let thirdCard = parseInt(Math.random() * 12 + 1) 
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
        // cardEl.innerHTML = "Cards: " + fisrtCard + ", " + secondCard + ", " + thirdCard 
    }
}
let messages = ["lorem iisda", "lorem ipsum dolor", 1238, "as a number", "😉" ]
for  ( var i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}

// let castle = {
//     title: "Classic castle with a park and lakes in the suburbs of Paris, France",
//     cost: '181,100 -',
//     per: "per week,",
//     properties: {
//         bedrooms: 7 + " bedrooms",
//         bathrooms: 7 + " bathrooms"
//     }
// }
// console.log(castle.title, castle.cost, castle.per, castle.properties.bedrooms)

let my = {
    name: 'Jack',
    age: 18,
    country: 'London'
}
function logData() {
    return my.name + ' is ' + my.age + ' years old and lives in ' + my.country
}
console.log(logData())
let largeCountries = ['Russia', 'Canada', 'France', 'Germany', 'United Kingdom']
for (let i = 0; i < largeCountries.length; i++){
    console.log(largeCountries[i])
}
largeCountries.pop('')
console.log(largeCountries)
let hands = ['rock', 'paper', 'scissors']
function r(){
    
    let random = parseInt(Math.random() * 3)
    console.log(hands[random]) 
    console.log(random)
}
console.log(r())

let fruits = ["🍎", "🍊", "🍎", "🍏", "🍊",]
let appleShelf = document.querySelector('#apple-shelf')
let orangeShelf = document.querySelector('#orange-shelf')
function call(){
    for (let i = 0; i < fruits.length; i++){
        if (fruits[i] === "🍎"){
            appleShelf.textContent = "🍎"
        } else if (fruits[i] === "🍏"){
            appleShelf.textContent += "🍏"
        }
    }}
function call2(){
    for (let i = 0; i < fruits.length; i++){
        
     if (fruits[i] === "🍊"){
        orangeShelf.textContent += "🍊"
    }
}    
    // appleShelf.addEventListener('click', function(){
    //     console.log(random)
    //     appleShelf.innerHTML += fruits[]
    // })
    // orangeShelf.addEventListener('click', function(){
    //     orangeShelf.textContent = fruits[1] += fruits[4]
    // });
    console.log(i)
}


let myLead = []
myLead.join= (' ')
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const inputBtn2 = document.getElementById('input-btn2')
const showAll = document.getElementById('show-all')
const cancelEl = document.getElementById('cancel')


cancelEl.addEventListener('click', function(){
    inputEl.value = ''
})

function renderLead() {
    if(inputEl.value === ''){
        alert('Nothing to SAVE')
    }    
   else{
    for (let i = 1; i <= 1; i++) {
        myLead.push(inputEl.value)
        ulEl.innerHTML +=`
        <li class=mb-2>
            <a href=https:///yandex.ru/search/?text=${inputEl.value} target=_blank class="text-center p-1 ps-4 pe-4 link-warning"> ${inputEl.value} </a> 
        </li>
        ` 
        inputEl.value = ""
        localStorage.setItem("saved lead", JSON.stringify(myLead))
    }
   }
}
inputBtn2.addEventListener('click', function(){
    if (confirm(`Are you sure?`) == true){
        ulEl.innerHTML = ""
        localStorage.removeItem('saved lead')
        inputEl.value = ""
    } 
})
inputBtn.addEventListener('click', renderLead)
console.log(localStorage.getItem("saved lead"))

showAll.addEventListener('dblclick', show)

function show(){
    let li = document.createElement('li')
    ulEl.innerHTML = li.innerHTML =  localStorage.getItem("saved lead")

    // <a href=https:///yandex.ru/search/?text=${inputEl.value} target=_blank class="text-center p-1 ps-4 pe-4 link-warning"> ${myLead} </a> + ${" "}
}
if (localStorage.getItem("saved lead")) {
    let li = document.createElement('li')
    ulEl.innerHTML = li.innerHTML =  localStorage.getItem("saved lead")
}
// console.log(navigator.geolocation)
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
    });
}
// console.log(geolocation())
// console.log(window.statusbar)

// my function central arifmethic
let arrray1 = [1, 2, 3, 4, 5, 6, 7 ]
function arifmethic(){
    for (let i = 0; i < arrray1.length; i++){
        // console.log(arrray1[i])
        let s = arrray1[i] + arrray1[i] 
        // console.log(arrray1[i])
        console.log(s)
        return parseInt(s / arrray1.length)
    }
    // let sum = arrray1[1] + arrray1[2] + arrray1[3] + arrray1[4] + arrray1[5]
    // return central = parseInt( sum / arrray1.length)
}
console.log(arifmethic())
// console.log(arrray1)

// yandex.tabs.query({active: true, currentWindow: true}, function(tabs){
//     console.log(tabs)
// })
// localStorage.setItem('first', 'I am the first person')
// console.log(localStorage.getItem('first'))
// localStorage.clear()
// let array = `["hello", "world"]`
// array = JSON.parse(array)
// array.push('world')
// array = JSON.stringify(array)
// console.log(array)

// let trueOrFalse = Boolean("0")
// console.log(trueOrFalse)

let seconds = 00 
let tens = 00
let minutes = 00
const getSeconds = document.querySelector('#seconds')
const getTens = document.querySelector('#tens')
const getMinutes = document.querySelector('#minutes')
const btnStart = document.querySelector('#button-start')
const btnStop = document.querySelector('#button-stop')
const btnReset = document.querySelector('#button-reset')
let interval
btnStart.onclick = function () {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
}
btnStop.onclick = function() {
    clearInterval(interval)
}
btnReset.onclick = function() {
    clearInterval(interval)
    tens = "00";
    seconds = "00";
    minutes = "00";
    getTens.innerHTML = tens;
    getSeconds.innerHTML = seconds;
    getMinutes.innerHTML = minutes;
 }
function startTimer() {
    tens++
    if(tens <= 9){
        getTens.innerHTML = "0" + tens
    } if(tens > 9){
        getTens.innerHTML = tens
    }if(tens > 99){
        seconds++
        getSeconds.innerHTML = '0' + seconds
        tens = 0
        getTens.innerHTML = "0" + 0
    }if(seconds > 9){
        getSeconds.innerHTML = seconds
    }if(seconds >= 60){
        minutes++
        getMinutes.innerHTML = '0' + minutes
        tens = 0
        getTens.innerHTML = "0" + 0
        seconds = 0
        getSeconds.innerHTML = '0' + 0
    }
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
// showTime();