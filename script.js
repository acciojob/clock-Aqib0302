let element = document.querySelector("#timer");

setInterval(()=>{
	let d=new Date();
let seconds=d.getSeconds();
let hour=d.getHours();
let minutes=d.getMinutes();
let date=d.getDate();
let month=d.getMonth()+1;
let year=d.getFullYear();
 let AM2PM="";
	if(hour>=12){
		AM2PM="PM";
	}
	else{
		AM2PM="AM";
	}
	element.innerHTML=` ${date}/${month}/${year}, ${hour}:${minutes}:${seconds} ${AM2PM}`;
},1000);
