// Features principali:
// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.

// STRUTTURA vue
var app = new Vue({
  el: "#root",
  data: {
    title: 'Your things to do list',
    userInput: "",
    doubleInsert: false,
    // questo è il dato che mi permetterà, tramite un array, di gestire quello che andrò ad aggiungere successivamente con la funzione
    items: [

    ],
    img: 'logo.png'
  },
  methods: {
    // funzione per aggiungere qualcosa alla lista
    addNewI: function () {
      // questa è la variabile creata che mi permetterà di stampare in html

      if (this.userInput == '') {
        alert("Devi scrivere qualcosa");

      }
      else if (this.items.includes(this.userInput)) {
      this.doubleInsert = true;

      }
      else {
        this.items.push(this.userInput);
        this.userInput = '';
      }

    },
    // funzione per confermare il duplicato
    reConfirm: function () {
     this.items.push(this.userInput);
     this.doubleInsert = false;
     this.userInput = "";
    },

    // funzione per cancellare il duplicato
    deleteDouble: function () {
     this.doubleInsert = false;
    },

    // funzione per cancellare qualcosa dalla lista
    deleteItem: function(index) {
     this.items.splice(index,1)
    }


  }
});
