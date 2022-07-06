var posicionOro;
var intentosMax = 5;
var intentosMin = 1;
var partidaGanada = false;
function esconderOro(){
    posicionOro = Math.floor((Math.random() * (15-1))+1);
}

function mostrarOro(pElemento){
    if(intentosMin <= intentosMax){
        if(pElemento.id == posicionOro){
            pElemento.src ='imagenes/oro.jpg'
            partidaGanada = true;
            intentosMin =6;
            actualizar('<img class="remove-bg2" src="imagenes/ganaste.png"><h1>¡¡GANASTE!!</h1>');
            document.getElementById('jugarDeNuevo').style.display = ''
        }else{
            pElemento.src = 'imagenes/maletinAbierto.jpg'
        }
        intentosMin = intentosMin + 1;
    }else{
        document.getElementById('jugarDeNuevo').style.display = ''
       if(partidaGanada){

           actualizar('<h3>!!PERDISTE!! </h3><img class="remove-bg" src="imagenes/calabera.png">');
       }else { actualizar('<h3>!!PERDISTE!! </h3><img class="remove-bg" src="imagenes/calabera.png">');
    }
    }
}

function actualizar(pMensaje){
    document.getElementById("info").innerHTML = pMensaje;
}

function reintentar(){
  for(var i=1; i<=12;i++){
document.getElementById(i).src= "imagenes/maletinCerrado.jpg";
}
     esconderOro();
document.getElementById('jugarDeNuevo').style.display = 'none'
actualizar("");
intentosMin = 1;
}
function jugar(){
    var usuario = document.getElementById('nombre').value;
    if(usuario.trim() != ""){

    document.getElementById('Formu').style.display = 'none'
    document.getElementById('tablero').style.display = '' 
    reintentar();
}
}