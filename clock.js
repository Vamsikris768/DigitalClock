let watch=()=>{
let currentTime=new Date()

if(currentTime.getHours()<10){
    document.querySelector('#hrs').innerHTML="0"+currentTime.getHours()-12
}
else{
    document.querySelector('#hrs').innerHTML=currentTime.getHours()-12
}


if(currentTime.getMinutes()<10){
    document.querySelector('#mnts').innerHTML="0"+currentTime.getMinutes()
}
else{
    document.querySelector('#mnts').innerHTML=currentTime.getMinutes()
}

document.querySelector('#sec').innerHTML=(currentTime.getSeconds()<10?"0":'')+currentTime.getSeconds()


}
setInterval(watch,1000)





// let options={timeZone:'Asia/Kolkata'}
// let currentTime=new Date().toLocaleTimeString('en-US',options)
// console.log(currentTime.slice(0,2))
