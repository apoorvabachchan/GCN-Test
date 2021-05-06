var data = document.getElementById("vidDiv").addEventListener("load", getData);
var con = 0
var video = document.getElementById("divData")
function getData(){
    fetch('https://globalcyclingnetwork.com/api/devtask.')
    .then((res)=>{
        return res.json();
    })
    .then((post)=>{
        for (let index = 0; index < 1; i++){
            console.log('coming')
          video.innerHTML+=`
            <li> ${post[con].topic } Ankur</li>
          `  
        }
    })
}