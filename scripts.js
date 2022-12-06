const cards = document.querySelectorAll('.memory-card'); 
const front_cards = document.querySelectorAll('.front-face'); 

let hasFlippedCard = false; 
let lockBoard = false;
let firstCard, secondCard; 

function flipCard() { 
    if (lockBoard) return; // if cards not match, lock the board
    if(this === firstCard) return; 
    this.classList.add('flip'); 

    if(!hasFlippedCard){
        hasFlippedCard=true; 
        firstCard = this ; 
        return; 
    } 
    hasFlippedCard = false; 
    secondCard = this; 
    checkForMatch(); 
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework  === secondCard.dataset.framework ; 
    console.log(firstCard.dataset.alt);
    console.log(secondCard.dataset.alt);
    isMatch ? disableCards() : unflipCards(); 
} 

function disableCards() {
    setTimeout( () => {
        firstCard.style.visibility = "hidden";
        secondCard.style.visibility  = "hidden";
        firstCard.removeListner('click', flipCard);
        secondCard.removeListner('click', flipCard);
    }, 1000)

} 

function unflipCards() {
    lockBoard = true; // unlock the board till the card flip its cover side
    console.log("not match");
        setTimeout( () => {
        firstCard.classList.remove('flip'); 
        secondCard.classList.remove('flip'); 
        resetBoard(); 
    }, 1000)
} 


function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]; // comparision
    [firstCard, secondCard] = [null, null]; 
} 

// (function shuffle() {
//     // cards.forEach(card => {
//     //   let randomPos = Math.floor(Math.random() * 12);
//     //   card.style.order = randomPos;
//     // //   card.getElementsByClassName("back-face").src = sources[index];
//     // }
//     // );
//     shuffledArray = sources_front.sort((a, b) => 0.5 - Math.random());
//     front_cards.forEach(shuffleFrontFace);

//     function shuffleFrontFace(front_card, index, arr){
//         front_card.src = front_card[index]; 
//    }   
//   })();
 

sources_front = [
    ["images/ruby.png", "Ruby"], 
    ["images/influential sport club.png", "Pietersite"], 
    ["images/iolite.png", "Iolite"], 
    ["images/aquamarine.png", "Aquamarine"],
    ["images/carnelian.png", "Carnelian"], 
    ["images/club events.png", "Carnelian"],
    ["images/dedicated wsp.png", "Iolite"],
    ["images/emerald.png", "Emerald"],
    ["images/excel club pres.png", "Ruby"],
    ["images/hematite.png", "Hematite"],
    ["images/most val sport player.png", "Hematite"],
    ["images/opal.png", "Opal"],
    ["images/pietersite.png", "Pietersite"],
    ["images/popular club.png", "Sodalite"],
    ["images/sra award.png", "Emerald"],
    ["images/wellness center ambas.png", "Aquamarine"],
    ["images/wsp award.png", "Opal" ],
    ["images/sodalite.png", "Sodalite"],
]; 

// sources_front = [
//     ["game-application-SE/images/ruby.png", "Ruby"], 
//     ["game-application-SE/images/influential sport club.png", "Pietersite"], 
//     ["game-application-SE/images/iolite.png", "Iolite"], 
//     ["game-application-SE/images/aquamarine.png", "Aquamarine"],
//     ["game-application-SE/images/carnelian.png", "Carnelian"], 
//     ["game-application-SE/images/club events.png", "Carnelian"],
//     ["game-application-SE/images/dedicated wsp.png", "Iolite"],
//     ["game-application-SE/images/emerald.png", "Emerald"],
//     ["game-application-SE/images/excel club pres.png", "Ruby"],
//     ["game-application-SE/images/hematite.png", "Hematite"],
//     ["game-application-SE/images/most val sport player.png", "Hematite"],
//     ["game-application-SE/images/opal.png", "Opal"],
//     ["game-application-SE/images/pietersite.png", "Pietersite"],
//     ["game-application-SE/images/popular club.png", "Sodalite"],
//     ["game-application-SE/images/sra award.png", "Emerald"],
//     ["game-application-SE/images/wellness center ambas.png", "Aquamarine"],
//     ["game-application-SE/images/wsp award.png", "Opal" ],
//     ["game-application-SE/images/sodalite.png", "Sodalite"],
// ]; 


cards.forEach(initialFunction); 
function initialFunction(card, index, arr) {
    card.addEventListener('click', flipCard); 

} 
shuffledArray = sources_front.sort((a, b) => 0.5 - Math.random());
console.log(shuffledArray);

front_cards.forEach(shuffleFrontFaceCard); 
function shuffleFrontFaceCard(front_card, index, arr) {
    console.log(shuffledArray[index][0]);
    cards[index].dataset.framework = shuffledArray[index][1]
    front_card.src = shuffledArray[index][0]; 
}

// front_cards.forEach(shuffleFrontFaceCard); 
// function shuffleFrontFaceCard(front_card, index, arr) {
//     // console.log(sources_front[index][0]);
//     // console.log(front_card); 
//     cards[index].dataset.framework = sources_front[index][1]
//     front_card.src = sources_front[index][0]; 
// }
