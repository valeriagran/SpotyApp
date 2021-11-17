let url="https://accounts.spotify.com/api/token";

let llave1="grant_type=client_credentials";
let llave2="client_id=0876622a906f44a5876ae99839a47283";
let llave3="client_secret=0398ed85f43047209a8fb04be3e381f4";

let parametros={
    method:"POST",
    headers:{"Content-Type": 'application/x-www-form-urlencoded'},
    body:llave1 + "&" + llave2 + "&"+llave3
}

fetch(url,parametros)
    .then(respuesta=>respuesta.json())
    .then(datos=>traerCanciones(datos))

function traerCanciones(datosToken){
    let token="Bearer " + datosToken.access_token;
    let url="https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we/top-tracks?market=US";

    let parametros= {
        method:"GET",
        headers:{"Authorization":token}
    }

fetch(url,parametros)
    .then(respuesta=>respuesta.json())
    .then(datos=>seleccionarInformacion(datos))
}

function seleccionarInformacion(datos){
    console.log(datos.tracks[0].album.images[0].url);
    console.log(datos.tracks[0].preview_url);
    console.log(datos.tracks[0].name);

    let imagen1=document.getElementById("imagen1");
    imagen1.src=datos.tracks[0].album.images[0].url;
    let audio1=document.getElementById("audio1");
    audio1.src=datos.tracks[0].preview_url;
    let tutulo1=document.getElementById("titulo1");
    titulo1.textContent=datos.tracks[0].name;

    let imagen2=document.getElementById("imagen2");
    imagen2.src=datos.tracks[1].album.images[0].url;
    let audio2=document.getElementById("audio2");
    audio2.src=datos.tracks[1].preview_url;
    let tutulo2=document.getElementById("titulo2");
    titulo2.textContent=datos.tracks[1].name;

    let imagen3=document.getElementById("imagen3");
    imagen3.src=datos.tracks[9].album.images[0].url;
    let audio3=document.getElementById("audio3");
    audio3.src=datos.tracks[9].preview_url;
    let tutulo3=document.getElementById("titulo3");
    titulo3.textContent=datos.tracks[9].name;

    let imagen4=document.getElementById("imagen4");
    imagen4.src=datos.tracks[8].album.images[0].url;
    let audio4=document.getElementById("audio4");
    audio4.src=datos.tracks[8].preview_url;
    let tutulo4=document.getElementById("titulo4");
    titulo4.textContent=datos.tracks[8].name;

    let imagen5=document.getElementById("imagen5");
    imagen5.src=datos.tracks[4].album.images[0].url;
    let audio5=document.getElementById("audio5");
    audio5.src=datos.tracks[4].preview_url;
    let tutulo5=document.getElementById("titulo5");
    titulo5.textContent=datos.tracks[4].name;

    let imagen6=document.getElementById("imagen6");
    imagen6.src=datos.tracks[3].album.images[0].url;
    let audio6=document.getElementById("audio6");
    audio6.src=datos.tracks[3].preview_url
    let tutulo6=document.getElementById("titulo6");
    titulo6.textContent=datos.tracks[3].name;
}


