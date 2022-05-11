const fs=require("fs");
    console.log("log in facebook :")
    var input=require("readline-sync");
    var name=input.question("Enter your name :")
    if (name=="purnima"){
        console.log("carect")
        last_name=input.question("Enter the last_name :")
        if (last_name=="kumari"){
            console.log("caret")   
            user=input.question("Enter the email Address :")
            if (user=="purnima20@navgurukul.org"){
                console.log("carect")
                password=input.question("Enter your password :")
                if (password=="navgurukul1"){
                    console.log("log in saccessfully")
                    obj={name:"purnima",last_name:"kumari",user:"purnima20#@navgurukul.org",password:"navgurukul1"}
    const jsonData=JSON.stringify(obj)
fs.writeFile("json2.json",jsonData,(err)=>{
console.log("done")
})
                }else{
                    console.log("chack your password")
                }
            }else{
                console.log("not carrect")
            }
        }else{
            console.log("not carct")
        }
    }else{
        console.log("crite a new account")
        console.log("sing in new facebook account :")
        // console.log("Enter your first name")
        var input=require("readline-sync");
        var name=input.question("Enter your name :")
        if (name>="a to z"){
            console.log("carect")
            last_name=input.question("Enter the last_name :")
            if (last_name>="a to z"){
                console.log("caret")   
                user=input.question("Enter the email Address :")
                if (user>="a to z"){
                    console.log("carect")
                    password=input.question("Enter your password :")
                    if (password>="0 to 9"){
                        console.log("log in saccessfully")
                    }
                }
            }
        }
    }
    obj={name:name,last_name:last_name,user:user,password:password}
    const jsonData=JSON.stringify(obj)
fs.writeFile("json3.json",jsonData,(err)=>{

console.log("done")
})








// const jsonData=JSON.stringify(obj)
// fs.writeFile("json1.json",jsonData,(err)=>{
  
//     console.log("done")
// })