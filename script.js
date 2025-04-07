// dischiaro const che conterrà le chiavi valore della chiamata api
const newGroup = []


// creo la mia funzione per destrutturare e creare una singola card
const generateCard = (element) => {
    // creo una stringa dove inserire la mia card
    const card = `<div class="col-12 col-md-6 col-lg-4 mt-5 colonna" style="border:1px solid #0a0313;">
                        <div class="picSquare">
                        <figure>
                        <img src="${element.url}" talt="">
                        <img src="./img/pin.svg" class="point" alt="puntina">
                        </figure>
                            <figcaption>
                            ${element.date}
                            ${element.title}
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
