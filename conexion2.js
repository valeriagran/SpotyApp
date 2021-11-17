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

        let token="Bearer "+datosToken.access_token;
        let url="https://api.spotify.com/v1/artists/6KImCVD70vtIoJWnq6nGn3/top-tracks?market=US";
        let parametros={
            method: "GET",
            headers: {"Authorization":token}
        }
        fetch(url,parametros)
            .then(respuesta=>respuesta.json())
            .then(datos=>seleccionarInformacion(datos))
    }
    
    function seleccionarInformacion(datos){
    
       
        console.log(datos.tracks[0].album.images[0].url);
        console.log(datos.tracks[0].preview_url);
        console.log(datos.tracks[0].name); //nombre cancion
    
        let img1= document.getElementById("img1");
        img1.src= datos.tracks[0].album.images[0].url;
        let audio1=document.getElementById("audio1");
        audio1.src=datos.tracks[0].preview_url;
        let titulo1=document.getElementById("titulo1");
        titulo1.textContent= datos.tracks[0].name;
    
    
        let img2= document.getElementById("img2");
        img2.src= datos.tracks[1].album.images[0].url;
        let audio2=document.getElementById("audio2");
        audio2.src=datos.tracks[1].preview_url;
        let titulo2=document.getElementById("titulo2");
        titulo2.textContent= datos.tracks[1].name;
    
    
        let img3= document.getElementById("img3");
        img3.src= datos.tracks[2].album.images[0].url;
        let audio3=document.getElementById("audio3");
        audio3.src=datos.tracks[2].preview_url;
        let titulo3=document.getElementById("titulo3");
        titulo3.textContent= datos.tracks[2].name;
    
    
        let img4= document.getElementById("img4");
        img4.src= datos.tracks[3].album.images[0].url;
        let audio4=document.getElementById("audio4");
        audio4.src=datos.tracks[3].preview_url;
        let titulo4=document.getElementById("titulo4");
        titulo4.textContent= datos.tracks[3].name;
    
    
        let img5= document.getElementById("img5");
        img5.src= datos.tracks[4].album.images[0].url;
        let audio5=document.getElementById("audio5");
        audio5.src=datos.tracks[4].preview_url;
        let titulo5=document.getElementById("titulo5");
        titulo5.textContent= datos.tracks[4].name;
    
    
        let img6= document.getElementById("img6");
        img6.src= datos.tracks[5].album.images[0].url;
        let audio6=document.getElementById("audio6");
        audio6.src=datos.tracks[5].preview_url;
        let titulo6=document.getElementById("titulo6");
        titulo6.textContent= datos.tracks[5].name;
    
    
    }