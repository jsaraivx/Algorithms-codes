// Algorithm of a countdown based on pomodoro...
let numT = 3;
let minutesCount = 3;

function minTest() {
  for (let i = 1; i != 0; i--) {
    var substiuindo = document.getElementById("mincount");
    var randomN = setInterval(() => {
      console.log(numT);
      substiuindo.innerHTML = numT;
      numT--;
      if (numT === -1) {
        clearInterval(randomN);
        minutesCount--;
        let exibeMin = document.getElementById("seccounter");
        exibeMin.innerHTML = minutesCount;
        numT = 3;
        if (minutesCount != 0) {
          minTest();
        }
        if(minutesCount == 0){
            alert("funcionou gata! =D");
        };
        
      }
    }, 1000);
  }
}
