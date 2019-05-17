// Write your Pizza Builder JavaScript in this file.
var app1 = new Vue({
  el: '#app-1',
  data: {
    seenGP: true,
    seenMushrom: true,
    seenPepperoni: true,

  },
  methods: {
    btnGreenPepper: function () {
      this.seenGP = !this.seenGP;
    },
    btnMushroom: function () {
      this.seenMushrom = !this.seenMushrom;
    },
    btnPepperoni: function () {
      this.seenPepperoni = !this.seenPepperoni;
    }
  }
})