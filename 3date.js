function printDate(){
    let current =  new Date();
    let today = current.getDate() +"/" + current.getMonth() + "/" + current.getFullYear()
    console.log(today)
}
printDate()