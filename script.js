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
        FIRST_CARD.removeAttribute('onclick')
    }else{
        SECOND_CARD = userClick.target
        for (let card of cards) {
            card.removeAttribute('onclick')
        }
    }
    console.log(FIRST_CARD,SECOND_CARD)
    setTimeout(function(){
        let same = compare(FIRST_CARD,SECOND_CARD)
        if(same === true){
            FIRST_CARD.classList.replace('flipped','matched')
            SECOND_CARD.classList.replace('flipped','matched')
        }else{
            FIRST_CARD.classList.remove('flipped')
            SECOND_CARD.classList.remove('flipped')
        }
        let notMatched = document.getElementsByClassName('card:not(.matched)')
        
        for( i = 0; i < notMatched.lenght; i++){
            notMatched[i].setAttribute('onclick','flip(event)')
        }
        FIRST_CARD = undefined
        SECOND_CARD = undefined

        
    },1500)

    
}

function compare(a,b){
    if(a.innerHTML === b.innerHTML){
        return true;
    }else{
        return false;
    }
}