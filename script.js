// dischiaro const che conterrà le chiavi valore della chiamata api
const newGroup = []

// effettuo chiamata api, estrapolando il contenuto nell array newGropu
axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then((resp) =>{
    resp.data.map(item => {
        newGroup.push(item)
        render(newGroup);
    });
})
console.log(newGroup);

// creo la mia funzione per destrutturare e creare una singola card
const generateCard = (element) => {
// creo una stringa dove inserire la mia card
    const card = `<div class="col-12 col-md-6 col-lg-4 mb-5 colonna">
                        <div class="cardInfo">
                            <figure>
                                <img src="${element.url}" alt="" onclick="on(${element.id})">
                                <img src="./img/pin.svg" class="point" alt="puntina">
                            </figure>
                            <figcaption>
                                <div class="dataCard">
                                    ${element.date}   
                                </div>
                                <div class="titoloCard">
                                    <strong>
                                        ${element.title}
                                    </strong>
                                </div>
                            </figcaption>
                            </div>
                        </div>`
                        
            return card;
    }

// funzione che mi renderizza il contenuto dell'array
const render = (array) => {
// dichiaro una variabile con valore stringa nuova concatenando le colonne come stringhe
    let cards = "";
    for(let i=0; i<array.length; i++){
      cards += generateCard(array[i])
    }
  
    document.getElementById(`content`).innerHTML = cards;
  }


///////////////////////////////////   overlay   ///////////////////////////////////
  
//   recuperò l'elemento dove inseririre le immagine
  const OverlayImg = document.getElementById(`OverlayImg`);
  
// funzione di spegnimento
  function off() {
      document.getElementById("overlay").style.display = "none";
    }
// funzione che al click dell'immagine,rende visibile l'overlay e trova l'immagine appena cliccata e la apre in overlay
    function on(id) {
      document.getElementById("overlay").style.display = "block";
// Trova l'oggetto corrispondente nell'array
      const imgSelected = newGroup.find(item => item.id === id);
// Aggiungi l'immagine all'overla
          OverlayImg.innerHTML = `<img src="${imgSelected.url}" alt=""width="400" height="auto">>`;
      }