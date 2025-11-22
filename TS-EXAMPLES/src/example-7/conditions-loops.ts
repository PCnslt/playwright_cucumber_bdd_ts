//A simple conditional statement

let myAge: number = 35;

if(myAge >= 18){
    console.log("You are an adult.")
}else if(myAge>=19 && myAge<=25){
    console.log("You are young.")
}else if(myAge>=26){
    console.log("You are old.")
}else{
    console.log("You are a minor")
}

let arr:number[]=[5,5,5,5,5]
for (let i:number = 0; i<arr.length; i++){
    console.log("Index: "+i);
}