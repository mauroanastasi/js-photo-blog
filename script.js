// const location = [
//     {
//         "id": 1,
//         "title": "Skate Park",
//         "date": "01-07-2024",
//         "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
//     },
//     {
//         "id": 2,
//         "title": "Passeggiata",
//         "date": "16-07-2024",
//         "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
//     },
//     {
//         "id": 3,
//         "title": "Alpi",
//         "date": "01-07-2024",
//         "url": "https://marcolanci.it/boolean/assets/pictures/3.png"
//     },
//     {
//         "id": 4,
//         "title": "Sagra",
//         "date": "21-08-2024",
//         "url": "https://marcolanci.it/boolean/assets/pictures/4.png"
//     },
//     {
//         "id": 5,
//         "title": "Watergun",
//         "date": "23-08-2024",
//         "url": "https://marcolanci.it/boolean/assets/pictures/5.png"
//     },
//     {
//         "id": 6,
//         "title": "Riviera",
//         "date": "30-08-2024",
//         "url": "https://marcolanci.it/boolean/assets/pictures/6.png"
//     }
// ]

// richiamo gli elementi dom necessari

// funzione per generare le card

// funzione che crea le card
// `                    <!-- <div class="col-12 col-md-6 col-lg-4 mt-5 colonna" style="border:1px solid #0a0313;">
//                         <div class="picSquare">
//                             <figure>
//                                 <img src="./img/provaUnreal.jpg" alt="">
//                                 <img src="./img/pin.svg" class="point" alt="puntina">
//                             </figure>
//                             <figcaption>
//                                lotumdmomsdocmscmsocsmosom
//                             </figcaption>
//                         </div>
//                     </div> -->`

// dischiaro const che conterrà le chiavi valore della chiamata api
const newGroup = []

// effettuo chiamata AudioParam, estrapolando il contenuto nell array newGropu
axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then((resp) =>{
    resp.data.map(item => {
        newGroup.push(item)
    });
})
console.log(newGroup);