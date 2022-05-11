const fs=require("fs")
const obj={
    name:"gopal",
    age:18
}
const jsonData=JSON.stringify(obj)
// console.log(jsondata)
fs.writeFile("json3.json",jsonData,(err)=>{
    // console.log("done")
})
console.log("done")

// fs.writeFile("json1.json",jsonData,()=>{
  
//     console.log("done")
// })