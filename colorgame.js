var difficulty = 3;
var answer=  newGame();

console.log(answer);
//wrongOrRight();
function newGame(){
  var i = Math.floor(Math.random() * 256);
  var j = Math.floor(Math.random() * 256);
  var k = Math.floor(Math.random() * 256);
  var answer = 'rgb(' + i + ',' + j + ',' + k + ')';
  document.getElementById('colorGuess').innerHTML = 'RGB(' + i + ', ' + j + ', ' + k + ')';
  var hello = random_color_pick(answer, difficulty);
  return hello;
}


function wrongOrRight(id){
  document.getElementById('wrongOrRight').innerHTML = '';
  if(id == answer)
  {
    for (var m = 0; m < 6; m++) {
      document.getElementsByClassName('square')[m].style.display = 'block';
      document.getElementsByClassName('square')[m].style.backgroundColor = document.getElementsByClassName('square')[answer].style.backgroundColor ;

    }
    document.getElementById('wrongOrRight').innerHTML = 'CORRECT';

  }
  else {
    console.log('You are wrong');
    document.getElementsByClassName('square')[id].style.display = 'none';
    document.getElementById('wrongOrRight').innerHTML = 'TRY AGAIN';

  }
}

function toggleDifficulty(id){
  //if easy is selected, show only 3 if hard is selected show 6. Needs to return random color picker a number
  if(id == 'easy')
  {
    for (var m = 3; m < 6; m++) {
      document.getElementsByClassName('square')[m].style.display = 'none';

    }
  }
  else {
    for (var m = 0; m < 6; m++) {
      document.getElementsByClassName('square')[m].style.display = 'block';

    }
  }
  random_color_pick(answer, id);

}



function random_color_pick(answer, difficulty) {
  for (var m = 0; m < 6; m++) {
    var i = Math.floor(Math.random() * 256);
    var j = Math.floor(Math.random() * 256);
    var k = Math.floor(Math.random() * 256);
    var bgColor = 'rgb(' + i + ',' + j + ',' + k + ')';
    document.getElementsByClassName('square')[m].style.backgroundColor = bgColor;
  }
  if(difficulty == 3)
  {
    var rightSquare = Math.floor(Math.random() * 3);
    document.getElementsByClassName('square')[rightSquare].style.backgroundColor = answer;
    return rightSquare;
  }
  else{
    var rightSquare = Math.floor(Math.random() * 6);
    document.getElementsByClassName('square')[rightSquare].style.backgroundColor = answer;
    return rightSquare;

  }
  console.log(rightSquare);


}
