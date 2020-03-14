var data = {
  a: 1
}
var app4 = new Vue({
  el: '#app4',
  data: data,
  created: function() {
    console.log(this.a)
  }
}) 

app4.$watch('a', function (newVal, oldVal) {
  console.log(newVal, oldVal);
})
