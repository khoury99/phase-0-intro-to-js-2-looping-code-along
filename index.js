for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }
  
  return gifts;
}

wrapGifts(gifts);

let cards=[]
// card.push("")
// console.log(cards)


function  writeCards(names, event)  {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)

    }

    return cards;

}
function countDown(number) {

while (number > -1) {
  console.log(number--);
}
}

