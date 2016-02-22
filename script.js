// Your JS goes here

var tiles = [];
var body = document.getElementsByTagName("body")[0];
var song = document.createElement("audio");
song.src = "Cuppy Cake Song.mp3";
song.loop = "loop";

body.appendChild(song);

song.play();

makeTiles();

setInterval(changeColors, 1000);

function makeTiles() {
  for(var i = 0; i < 63; i++){

    var tile_random = document.createElement("div");

    tile_random.style.width = "11.1%";
    tile_random.style.height = "auto";
    tile_random.style.float = "left";
    tile_random.style.paddingBottom = "11.1%";
    tile_random.style.backgroundColor = "#000000".replace(/0/g,function(){ return (Math.floor((Math.random()*16))).toString(16);});

    body.appendChild(tile_random);
    tiles.push(tile_random);
  }
}

function changeColors() {
  for(var i = 0; i < tiles.length / 2; i++) {
    tiles[Math.floor(Math.random() * tiles.length)].style.backgroundColor = "#000000".replace(/0/g,function(){return (Math.floor((Math.random()*16))).toString(16);});
  }
}
