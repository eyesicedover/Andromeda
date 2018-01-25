function Game(x, y, z, a) {
  this.title = x;
  this.release = y;
  this.genre = z;
  this.synopsis = [];
}

function About(x, y, z) {
  this.score = x;
  this.story = y;
  this.developer = z;
}

Game.prototype.nameGenre = function() {
  return this.title + ", " + this.genre;
}

$(document).ready(function(){

  var Games = [];
  $("form").submit(function(event){
  event.preventDefault();
  var title = $("#title").val();
  var year = $("#year").val();
  var genre = $("#genre").val();
  var score = $("#score").val();
  var story = $("#story").val();
  var developer = $("#developer").val();

  var newGame = new Game(title, year, genre);

  var newAbout = new About(score, story, developer);

  // This line of code inserts the new About object into the synopsis property of the Game object
  newGame.synopsis = newAbout
  Games.push(newGame);

  $("ul#gameList").append("<li>" + newGame.nameGenre() + ", " + newGame.release + "</li>");

  $("#gameList").last().click(function() {
    $("#infoBox h2").text(newGame.title);
    $("#infoYear").text(newGame.release);
    $("#infoGenre").text(newGame.genre);
    $("#infoSynopsis").text(newGame.synopsis[0 - 2]);
    // $("#infoSynopsis").text(newGame.synopsis[0] + ", " + newGame.synopsis[1] + ", " + newGame.synopsis[2]);
  });


  }); // form submit

}); // doc ready
