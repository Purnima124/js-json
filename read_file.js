const fs=require("fs")
const obj1={
    name:"purnima",
    mobile_no:8969871625,
    plass:"Bihar",
    age:23
}
const jsonData=JSON.stringify(obj1);
fs.readFile("json1.json","utf-8",(err,data)=>{
    const org_data=JSON.parse(jsonData)
    console.log(org_data)
})