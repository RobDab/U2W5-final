// quando clicco su una carta viene "selezionata"
// quajddo clicco su un'altra viene selezionata e confrontata con la prima

// se sono uguali restano selezionate ed evidenziate e non sono più cliccabili

let cards = document.getElementsByClassName('card')
console.log(cards)

let FIRST_CARD
let SECOND_CARD



function flip(userClick){
    // console.log(userClick.target)
    userClick.target.classList.add('flipped')

    if(FIRST_CARD === undefined){
        FIRST_CARD = userClick.target
    }else{
        SECOND_CARD = userClick.target
        for (let card of cards) {
            card.removeAttribute('onclick')
        }
    }
    console.log(FIRST_CARD,SECOND_CARD)
}