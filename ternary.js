let firstname = "bradley"
//a basic ternary


let message = (firstname == "bradley") ? 'hi brad!' : 'who are you?'
//saved as message       condition     ?       yes/true  :        no/false


console.log(message)


function showData(data){
    console.log((data) ?
    data : 
    'Loading'
    )
    }    
    
    
let ourData = undefined; 
showData(ourData)
