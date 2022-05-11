const fs=require("fs")
let obj={
    name:"purnima",
    lastname:"kumari",
    age:23
}
const jsonData=JSON.stringify(obj)
const objData=JSON.parse(jsonData)
console.log(objData)

fs.writeFile("kkkk.json",jsonData,(err)=>{
    console.log("done")
})