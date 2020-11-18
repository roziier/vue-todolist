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
      {text: 'Meditazione'},
      {text: 'Corsa'},
      {text: 'Leggere'}
    ]
  },
  methods: {
    addNewI: function () {
      // questa è la variabile creamta che mi permetterà di stampare in html
      var print = document.getElementById('addItems');
    }

  }
});
