// dischiaro const che conterrà le chiavi valore della chiamata api
const newGroup = []


// creo la mia funzione per destrutturare e creare una singola card
const generateCard = (element) => {
    // creo una stringa dove inserire la mia card
    const card = `<div class="col-12 col-md-6 col-lg-4 mb-5 colonna">
                        <div class="picSquare">
                            <figure>
                                <img src="${element.url}" talt="" onclick="on()">
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
  
  // chiamo la funzione
  
  // effettuo chiamata AudioParam, estrapolando il contenuto nell array newGropu
  axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then((resp) =>{
      resp.data.map(item => {
          newGroup.push(item)
          render(newGroup);
      });
  })
  console.log(newGroup);

//   overlay

  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }