function openWindow(id){

    document.getElementById(id).style.display="block";

}


function closeWindow(id){

    document.getElementById(id).style.display="none";

}


function startMenu(){

    alert("Bienvenido a MiniOS");

}


function updateClock(){

    let date = new Date();

    document.getElementById("clock").innerHTML =
    date.toLocaleTimeString();

}


setInterval(updateClock,1000);

updateClock();
