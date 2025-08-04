const fs = require("fs")
//synchronize
//fs.writeFileSync("./file.txt", "hello ");

//asynchronize
//result = fs.writeFile("./file.txt", "hello world" , (err) => {})

//readfile synchronize 
//   let result = fs.readFileSync("./file.txt" , "utf-8"  );
//  console.log(result)

//readfile asysynchronize
// fs.readFile("./file.txt", "utf-8" , (err,result) => {
//     if(err)
//     {
//         console.log("error",err)
//     }
//     else
//     {
//         console.log(result)
//     }
// })

// appendfile

fs.appendFileSync("./file.txt", `${Date.now()}hello append\n`)