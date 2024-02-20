// arrow

function sum(a, b){
    return a+b
}

const sumwitharrow = (a, b) => {
    return a+b
}

//
const input = [1,2,3,4,5]
/*const newArray=[]

for(let i=0; i < input.length; i++){
    newArray.push(input[i]*2)
}
console.log(newArray)
console.log(input)
*/

//other solution

//function transform(i){
//    return i*2
//}

const ans = input.map(function transform(i){
    return i*2
})
console.log(ans)


// Filtering in array

const strr = ["prabal", "tanay", "ashu", "ananya"]

//const ans1 = strr.filter(function (n){
const ans1 = strr.filter((n) => {
    if (n.startsWith("a")){
        return true
    } 
    else 
    {
        return false
    }
})

console.log(ans1)