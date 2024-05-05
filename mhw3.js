
function onClick() //GESTISCE L'APPARIZIONE DEL FORM QUANDO SI CLICCA REGISTRATI
{
    const FormDaMostrare = document.getElementById('DivForm');
    FormDaMostrare.classList.remove('oscura');
    FormDaMostrare.classList.add('mostraBlock');
 
}


function ChangeImage() //GESTISCE IL CAMBIO DI IMMAGINE DA OMINO BLU A OMINO VERDE (ONLINE)
{
    const image = document.querySelector("#right_footer img")
    image.classList.add('pixel')
    image.src = 'https://cdn.iconscout.com/icon/premium/png-512-thumb/user-green-4510144-3746052.png?f=webp&w=512';
}

function ChangeImage2(){ //GESTISCE IL CAMBIO DI IMMAGINE DA OMINO VERDE A OMINO BLU 
    const image = document.querySelector("#right_footer img")
    image.classList.add('pixel')
    image.src = 'https://studium.unict.it/dokeos/2024/main/css/dokeos2_unict/images/action/online.png';

}

function onClickV2(){ //MOSTRA IL MESSAGGIO DA PARTE DI STUDIUM
    const Messaggio = document.querySelector("#DivMessaggio");
    Messaggio.classList.remove('oscura');
    Messaggio.classList.add('mostraBlock');

}



function onClickV3(){ //NASCONDE IL MESSAGGIO DA PARTE DI STUDIUM
    const Messaggio = document.querySelector("#DivMessaggio");
    Messaggio.classList.remove('mostraBlock');
    Messaggio.classList.add('oscura');

}

function onClickV4(){ //SI OCCUPA DI FAR SPARIRE IL FORM QUANDO SI CLICCA SU "SALVA"
    const SaveReg = document.getElementById('DivForm');
    SaveReg.classList.remove('mostraBlock');
    SaveReg.classList.add('oscura');
}

function MostraNumDownload1(){  //SI OCCUPA DI MOSTRARE IL NUMERO DI DOWNLOAD SU PLAYSTORE DI STUDIUM
    const immagine = document.querySelector('#play_foto')
    var NumeroDownload = immagine.dataset.download;
    const DivDownload = document.querySelector('#download1');
    DivDownload.textContent = "Numero Download: " + NumeroDownload;
    DivDownload.style.display = "inline-block";
}

function NascondiNumDownload(){ //SI OCCUPA DI NASCONDERE IL NUMERO DI DOWNLOAD SU PLAYSTORE DI STUDIUM

    const DivDownload = document.querySelector('#download1');

    DivDownload.style.display = "none";
}


function MostraNumDownload2(){  //SI OCCUPA DI MOSTRARE IL NUMERO DI DOWNLOAD SU APP-STORE DI STUDIUM
    const immagine = document.querySelector('#app_store_foto')
    var NumeroDownload = immagine.dataset.download;
    const DivDownload = document.querySelector('#download2');
    DivDownload.textContent = "Numero Download: " + NumeroDownload;
    DivDownload.style.display = "inline-block"; 
}

function NascondiNumDownload2(){  //SI OCCUPA DI NASCONDERE IL NUMERO DI DOWNLOAD SU APP-STORE DI STUDIUM

    const DivDownload = document.querySelector('#download2');
    DivDownload.style.display = "none";
}


//PULSANTI DEL FORM
const RegisterButton = document.querySelector("#bottone-child");
RegisterButton.addEventListener("click", onClick);

const SaveRegButton = document.querySelector('#SalvaRegistrazione');
SaveRegButton.addEventListener("click", onClickV4);




//IMMAGINE DELL'OMINO
const image = document.querySelector("#right_footer img")
image.addEventListener("mouseover", ChangeImage) 

const image2 = document.querySelector("#right_footer img")
image2.addEventListener("mouseout", ChangeImage2) 



//MESSAGGIO DA PARTE DI STUDIUM
const image3 = document.getElementById('informazioni');
image3.addEventListener("click",onClickV2);

const bottoneOK = document.querySelector('.bottone-child-messaggio');
bottoneOK.addEventListener("click", onClickV3);





//IMMAGINE DI PLAYSTORE
const imagePlay = document.querySelector('#play_foto');
imagePlay.addEventListener("mouseover", MostraNumDownload1) 

const imagePlay2 = document.querySelector("#play_foto")
imagePlay.addEventListener("mouseout", NascondiNumDownload) 




//IMMAGINE DI APP-STORE
const imageApp = document.querySelector("#app_store_foto")
imageApp.addEventListener("mouseover", MostraNumDownload2) 

const imageApp2 = document.querySelector("#app_store_foto")
imageApp.addEventListener("mouseout", NascondiNumDownload2)







//PULSANTE DELL'IMMAGINE DEL GIORNO, EVENTI CHE LO ASCOLTANO
const PhotoButton = document.getElementById('fotoImg')
//console.log(PhotoButton);
PhotoButton.addEventListener("click", FotoHandler)
PhotoButton.addEventListener("mouseover", MessaggioFotoIN);
PhotoButton.addEventListener("mouseout", MessaggioFotoOUT);

let a = 0 ;
const RichiestaURL = "https://api.shutterstock.com/v2/images/search";






//FUNZIONI PER L'APPARIZIONE DEL MESSAGGIO "FOTO DEL GIORNO"
function MessaggioFotoIN(){
    MessaggioFIn = document.getElementById("MessaggioMeteo");
    //console.log(MessaggioFIn)
    MessaggioFIn.textContent = "Foto del giorno"
    MessaggioFIn.classList.remove("oscura");
    
}
function MessaggioFotoOUT(){
    MessaggioFOut = document.getElementById("MessaggioMeteo");
    MessaggioFOut.classList.add("oscura");
}

//PULSANTE DELL'IMMAGINE DEL METEO, EVENTI CHE LO ASCOLTANO

const imageMeteo = document.getElementById('meteoImg')
imageMeteo.addEventListener("click", MeteoHandler)
imageMeteo.addEventListener("mouseover", MessaggioMeteoIN);
imageMeteo.addEventListener("mouseout", MessaggioMeteoOUT);


function MessaggioMeteoIN(){
    MessaggioMIn = document.getElementById("MessaggioMeteo");
    //console.log(MessaggioMIn)
    MessaggioMIn.textContent = "Meteo a Catania"
    MessaggioMIn.classList.remove("oscura");
    
}
function MessaggioMeteoOUT(){
    MessaggioMOut = document.getElementById("MessaggioMeteo");
    MessaggioMOut.classList.add("oscura");
}


//GESTORE DEL CLICK SUL PULSANTE DEL METEO
let i = 0 ;
function MeteoHandler(){
    if( i == 0)
    {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Catania&appid=ad5fc53b509aea4606f27c5058acd844')
    .then(onResponse, onError)
    .then(onJson);

    MeteoDiv = document.querySelector("#meteo-div");
    MeteoDiv.classList.remove("oscura");
    i = i + 1;




    }
    else{

    MeteoDiv.classList.add("oscura");
    i = 0 ;
    MeteoDiv.innerHTML = "";
}



}
function onJson(json) {
    console.log(json)
    let temperaturaC = json.main.temp - 273.15
    console.log("Temperatura: " + temperaturaC.toFixed(2)+ " gradi celsius");
    let tempPercepita = (json.main.feels_like - 273.15).toFixed(2);
    console.log("Percepita: " + tempPercepita+ " celsius");
  
    const div = document.querySelector('#meteo-div')
  
  
    const label1 =  document.createElement('span')
    label1.classList.add("MeteoInfo")
    label1.textContent =  temperaturaC.toFixed(2)+ " C\u00B0"
    label1.style.fontSize = '40px';
    label1.style.fontWeight = 'bold';
  
  
    const label2 =  document.createElement('span')
    label2.classList.add("MeteoInfo")
    label2.textContent = "Percepita: " + tempPercepita+ " C\u00B0"

  
  
  
  
    const label3 =  document.createElement('span')
    label3.classList.add("MeteoInfo")
    label3.textContent = ", Umidit\u00E0: " + json.main.humidity + "% ,  "


    const label4 = document.createElement('span');
    label4.textContent = json.weather[0].description;
    label4.classList.add("MeteoInfo");


  
    div.appendChild(label1);
    div.appendChild(label2);
    div.appendChild(label3);
    div.appendChild(label4);

  }
  
  function onResponse(response) {
    return response.json();
  }
  
  function onError(error) {
    console.log('Error: ' + error);
  }

//GESTORE DEL CLICK SUL PULSANTE DELLA FRASE

//RISOLVERE PROBLEMA DELL'APPARIZIONE DEL DIV PRIMA DELLA FOTO  -- APPARIZIONE E SCOMPARSA DELLA FOTO DEL GIORNO
function FotoHandler(){
    
    if( a == 0)
    {
        ImageRequest = "https://api.shutterstock.com/v2/images/search?&query=motivational quotes&image_type=photo"
        fetch(ImageRequest,{
            headers: {
                'Authorization': "Bearer v2/REtVQXZGWmtVcUdRNktUMk91QWV6enRzOFZiMFFyQ3QvNDI5NzE3NTk3L2N1c3RvbWVyLzQvTVZlWU54WXhUTC1MSzdNQ2haRjlwUWpqcGp2MnN0M1RjeWxTV1YtaWdacXNOUWhwS2YzdHpHaTRQYldjaW5aWFlWRzl2SmRGYi02WnF6dFN4Y0RrUEhpR2VQc0huR2VVaUotR2NSQTBvMS04MlJUel9GSjhiekdwVVlsMzY3RW5OR1QwZWs2cGZfbnZaZmFWcGpvTDRKNlRESzdYX1VvdmZFMG1OMENSZVNwT0l3MXdkWERBWWhQRlpUaC1uakJ0OFpyVENnVVFNTlJ2bkJOTVBfUy1WZy9TSW1Cb3VXZVdLaE1kU1MxX1lIMTdR",
                'Content-Type': 'application/json',
            }
        }).then(onResponseFrase,onErrorF).then(OnJsonFrase);
        

    QuoteDiv = document.getElementById('quote');  
   
    QuoteDiv.classList.remove("oscura");
    a = a + 1;


    }
    else{
    //inserisci parte in cui si nasconde il div realtivo al meteo
    QuoteDiv.classList.add("oscura");
    a = 0 ;
    QuoteDiv.innerHTML = "";
    }
}  
  function OnJsonFrase(json){
    console.log(json);
    const divFrase = document.getElementById("quote"); //questo è il div dove inseriremo la foto

    let OggettoData = new Date; //definiamo un nuovo oggetto Date
    let giorno = OggettoData.getDate(); //chiamiamo il metodo di Date getDate.
    let altezza = json.data[mappaGiornoInRange(giorno)].assets.huge_thumb.height;
    let URL = json.data[mappaGiornoInRange(giorno)].assets.huge_thumb.url;
    let larghezza = json.data[mappaGiornoInRange(giorno)].assets.huge_thumb.width;

    divFrase.style.height = (altezza-20) + "px";
    divFrase.style.width = larghezza + "px";
    divFrase.style.overflowY = "hidden";
    divFrase.style.boxShadow = "6px  4px 4px black";

    const imageFrase = document.createElement('img');
    imageFrase.style.height = (altezza) + "px";
    imageFrase.style.width = larghezza + "px";
    imageFrase.src = URL;
    
    imageFrase.style.borderRadius = "3%";

    divFrase.appendChild(imageFrase);



}
function onResponseFrase(response) {
    console.log('Risposta ricevuta');
    return response.json();
  }
function onErrorF(error) {
    console.log('Error: ' + error);
  }

function mappaGiornoInRange(giorno) { // questa funzione mi mappa il giorno in un range di 20
    return (giorno - 1) % 20;
    }



     