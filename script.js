// Your JS goes here

var body = document.getElementsByTagName('body')[0];

for(var i = 0; i < 31; i++){

  var tile_red = document.createElement("div");

  tile_red.style.width = "11.1%";
  tile_red.style.height = "auto";
  tile_red.style.float = "left";
  tile_red.style.paddingBottom = "11.1%";
  tile_red.style.backgroundColor = "red";

  var tile_black = document.createElement("div");

  tile_black.style.width = "11.1%";
  tile_black.style.height = "auto";
  tile_black.style.float = "left";
  tile_black.style.paddingBottom = "11.1%";
  tile_black.style.backgroundColor = "black";

  body.appendChild(tile_black);
  body.appendChild(tile_red);
}

var tile_black = document.createElement("div");

tile_black.style.width = "11.1%";
tile_black.style.height = "auto";
tile_black.style.float = "left";
tile_black.style.paddingBottom = "11.1%";
tile_black.style.backgroundColor = "black";

body.appendChild(tile_black);
