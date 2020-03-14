var app5 = new Vue({
  el: '#app5',
  data: {
    url: '../index.html',
    isTrue: true,
    myhref: 'href',
    myclick: 'click'
  },
  methods: {
    changeIsTrue: function() {
      this.isTrue = !this.isTrue
    }
  }
}) 

