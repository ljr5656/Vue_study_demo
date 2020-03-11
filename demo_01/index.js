var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    hoverMessage: '页面加载与' + new Date().toLocaleString()
  }
})