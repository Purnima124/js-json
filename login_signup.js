var fs=require('fs')
console.log("welcome to login and sign up page")
var a=require("readline-sync")
var user=a.question("what u want to do login or sign up:")
    if (user=="signup"){
        var user_name=a.question("enter the user_name :")
        var password1=a.question("enter ur password:")
        if (password1.match(/[A-Z]/m) && password1.match(/[a-z]/m) && password1.match(/[0-9]/m) &&  password1.match(/[$#&@]/m)){
            var password2=a.question("confirm ur password:")
            if (password1==password2){
                console.log("congrates")
                var description=a.question("enter ur descriptinon:")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                var dob=a.question("enter ur dob:")
                var hobbies=a.question("enter ur hobbies:")
                var gender=a.question("enter ur gender f/m :")
                console.log("congrates",user,"u r sucessfully signupped")
                l1=["name","password","describtion","DOB","Hobbies","Gender"]
                l2=[user_name,password1,description,dob,hobbies,gender]
                var list1=[]
                dic2={}
                for (i in l1){
                dic2[l1[i]]=l2[i]
                }
                list1.push(dic2)
                const jsonData=JSON.stringify(dic2)
                fs.writeFile("json2.json",jsonData,(err)=>{
                console.log("done")
                });  
            }
            else{
                console.log("Passwords didn't match.")
            }   
        }
        else{
            console.log("weak password")
        }
    }
    else{  
        if(user=="login"){
            var Name=a.question("enter the usre_name ")
            var Password=a.question("enter the password ")
                var name=Name;
                var password=Password;
                if (!password){
                    console.log("username and password not matched.");
                }else{
                  console.log("congrates you have logged in sucessfully")
                }
            
        }
        else{
            console.log("your information is rong")
        }
    }