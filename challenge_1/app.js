
console.log('it loaded');
var player = true;
var movevalue; 
var boardvalue = true;
var counter = 0;
console.log(player);
var board = [[0, 0,0],
             [0, 0,0],
             [0, 0,0]
             ];
var elements = document.getElementsByClassName('box');


function changer(){
  if(player === true){
  	 movevalue = 'X';
  	 boardvalue = 1;  
  }
  else{
  	movevalue = 'O';
  	boardvalue = 2;
  }
  event.target.innerHTML = movevalue;
  player = !player;
};

function checker(){
  //check if first row all 1s
  if((board[0].every(function(x){return x===1})) || 
  	(board[1].every(function(x){return x===1})) ||
    (board[2].every(function(x){return x===1})) ||
    (board[0].every(function(x){return x===2})) || 
  	(board[1].every(function(x){return x===2})) ||
    (board[2].every(function(x){return x===2})) ||
    //first column for 1
    (board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1) ||
    //second column for 1
    (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) ||
    //third column for 1
    (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1) ||
    //first column for 2
    (board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2) ||
    //second column for 2
    (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2) ||
    //third column for 2
    (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2) ||
    //diagonal for 1
    (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) ||
    //diagonal for 2
    (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) ||
    //reverse diagonal for 1
    (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) ||
    //reverse diagonal for 2
    (board[0][2] === 2 && board[1][1] === 2 && board[2][1] === 2))     
     
  {
  	alert('WINNER!');
  }
  if(counter === 9){
  	alert('TIE');
  }

}

for(var i = 0; i < elements.length; i++){
	elements[i].addEventListener("click", function(event){
    changer();
    counter++;
    console.log(counter);
    checker();
   })
}

var firstbox = document.getElementById('box1');
firstbox.addEventListener("click", function(){
    board[0][0] = boardvalue;}	
);

var secondbox = document.getElementById('box2');
secondbox.addEventListener("click", function(){
    board[0][1] = boardvalue;}	
);

var thirdbox = document.getElementById('box3');
thirdbox.addEventListener("click", function(){
    board[0][2] = boardvalue;}	
);
var fourthbox = document.getElementById('box4');
fourthbox.addEventListener("click", function(){
    board[1][0] = boardvalue;}	
);
var fifthbox = document.getElementById('box5');
fifthbox.addEventListener("click", function(){
    board[1][1] = boardvalue;}	
);
var sixthbox = document.getElementById('box6');
sixthbox.addEventListener("click", function(){
    board[1][2] = boardvalue;}	
);
var seventhbox = document.getElementById('box7');
seventhbox.addEventListener("click", function(){
    board[2][0] = boardvalue;}	
);
var eighthbox = document.getElementById('box8');
seventhbox.addEventListener("click", function(){
    board[2][1] = boardvalue;}	
);
var ninthbox = document.getElementById('box9');
ninthbox.addEventListener("click", function(){
    board[2][2] = boardvalue;}	
);

var resetbutton = document.getElementById('resetter');
resetbutton.addEventListener('click', function(event){
	for(var i = 0; i < elements.length; i++){
		elements[i].innerHTML = '';
	}
	board = [[0, 0,0],
             [0, 0,0],
             [0, 0,0]
             ];
    player = true;
    counter = 0;
})	




