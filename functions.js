
let items=["beans","bananas","Mangoes","peas","onions",
"kales","drinks","butter","jam","rice"]
let item=[beans=50,bananas=5,mangoes=30,
    peas=20,onions=105,kales=10,
    drinks=150,butter=60,jam=15,rice=45]

function grocery(){
    console.log(items.push("soda"), item.push(soda=70))
    console.log(items)
    console.log(item)
}
grocery()

function groceries(){
    for(let a of item)
console.log(item.includes(a))
}
groceries()

function groceryStore() {
   console.log(items.length) 
}
groceryStore()

function total(){
let numberOfItems = item.reduce(function (item1,item2){
    return item1 + item2
    })
    console.log(numberOfItems )
}
total()

function lowest(){
    let min=Math.min(...item)
    console.log(min)
}
lowest()
