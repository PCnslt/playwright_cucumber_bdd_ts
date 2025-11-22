// import fs module;
import {readFile} from "fs";


readFile('src/example-3/exampl3e.txt',"utf-8",(err,data)=>{
    if(err){
        console.log("Error reading file: "+err.message)
    }else{
        console.log("File content: ");
        console.log(data);
    }
})
