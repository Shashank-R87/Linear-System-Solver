// let addd = ()=>{
//     var num1 = document.getElementById("num1").value;
//     var num2 = document.getElementById("num2").value;

//     let p = new Promise((resolve,reject) => {
//         let a = num1+num2;
//         console.log(num1,num2)
//         if (a%2!=0){
//             resolve("Success");
//         }else{
//             reject("Failed");
//         }
//     });

//     p.then((message)=>{
//         console.log(message);
//     }).catch((message)=>{
//         console.log(message);
//     })
// }

// const cheerio = require("cheerio")

let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    var formData = new FormData();
    formData.append('username','abc');
    console.log(formData.get("username"))
})

// btn.addEventListener("click", () =>{
//     fetch('http://127.0.0.1:8000/')
//     .then(res=>{
//         if (res.ok){
//             console.log("SUCCESS")
//             return res
//         }else{
//             console.log("ERROR")
//         }
//         res.json()
//     })
//     .then(data=>{
//         console.log(data)
//     })
// });
