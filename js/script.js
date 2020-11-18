// Features principali:
// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.

// STRUTTURA vue
var app = new Vue({
  el: "#root",
  data: {
    title: 'Your things to do list',
    // questo è il dato che mi permetterà, tramite un array, di gestire quello che andrò ad aggiungere successivamente con la funzione
    items: [

    ]
  },
  methods: {
    // funzione per aggiungere qualcosa alla lista
    addNewI: function () {
      // questa è la variabile creata che mi permetterà di stampare in html
      var print = document.getElementById('addItems');

     // se il valore sarà diverso da stringa vuota stampo
     if (print.value !== '')
     this.items.push({text: print.value});
   },
   // funzione per cancellare qualcosa dalla lista
   deleteItem: function(index) {
     this.items.splice(index,1)

   }


  }
});
