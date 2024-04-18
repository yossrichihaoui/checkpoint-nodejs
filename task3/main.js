const fs =require("fs");
fs.writeFile("welcome.txt","hello node",(err)=>{
if (err)throw err
console.log("the file is created")
})
fs.readFile("hello.txt",(err,data)=>{
  if(err)throw err
  console.log(data.toString())
})