const firstAdjective = [
  'Blue',
  'Red',
  'Green',
  'English',
  'German',
  'French',
  'Southern',
  'Electric',
  'Gas-Powered',
  'Battery-Operated',
  'Giant',
  'Pint-Sized',
  'Super-Duper'
]

const secondAdjective = [
  'Dog',
  'Cat',
  'Dish',
  'Apple',
  'Tree',
  'House',
  'Toilet',
  'Car',
  'Truck',
  'Chair',
  'Table'
]

const noun = [
  'Washer',
  'Polisher',
  'Cleaner',
  'Counter',
  'Cooker',
  'Sitter',
  'Wiper',
  'Maker',
  'Killer',
  'Pump',
  'Bottle'
]




function generateProduct() {
  const numProd = document.getElementById("numProd").value
  
  for(let i = 1; i <= numProd; i++){
    // generate a random product name
    const first = firstAdjective[Math.floor(Math.random()*firstAdjective.length)];
    const second = secondAdjective[Math.floor(Math.random()*secondAdjective.length)];
    const third = noun[Math.floor(Math.random()*noun.length)];

    // create a <p> element for the product name and add it to the end of the list
    const newP = document.createElement("p")
    newP.id = `${i}`
    const newProduct = document.createTextNode(`${i} - ${first} ${second} ${third}`)
    newP.appendChild(newProduct)
    const prevElement = document.getElementById(newP.id - 1) ? document.getElementById(newP.id -1) : document.getElementById("title")
    prevElement.after(newP)
    console.log(`${i} - ${first} ${second} ${third}`)
  }

}