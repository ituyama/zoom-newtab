function zoom(){
          
    const url = document.getElementById("message").value;




  const $window = window.open(url)
  setTimeout(() => $window.close(), 12000)
  

}
