const fs=require("fs");
const obj={
    name:"purnima",
    mobile_no:8969871625,
    plass:"Bihar",
    age:23
}
const jsonData=JSON.stringify(obj)
fs.writeFile("json1.json",jsonData,()=>{
  
    console.log("done")
})




