console.log('dom event js');

//option-2
function makeRed(){
    document.body.style.backgroundColor="red";
}
//option-3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue
function makeBlue(){
    document.body.style.backgroundColor = "blue";
}
//option-4
const makeGreen =document.getElementById('make-green');
      makeGreen.onclick = function makeGreen(){
        document.body.style.backgroundColor="green"
      }
      // option 4
      const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink)
function makePink(){
    document.body.style.backgroundColor="pink"
}
// another
const makePurple = document.getElementById("make-purple");
       makePurple.addEventListener('click',function makePurple(){
        document.body.style.backgroundColor="purple"
       })

      //  final option
      document.getElementById("golden-rod").addEventListener("click",function(){
        document.body.style.backgroundColor="goldenrod"
       })