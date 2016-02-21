// Your JS goes here

var body = document.getElementsByTagName('body')[0];

for(var i = 0; i < 63; i++){

  var tile_random = document.createElement("div");

  tile_random.style.width = "11.1%";
  tile_random.style.height = "auto";
  tile_random.style.float = "left";
  tile_random.style.paddingBottom = "11.1%";
  tile_random.style.backgroundColor = "#000000".replace(/0/g,function(){
                                      return (Math.floor((Math.random()*16))).toString(16);
                                    }
                                  );
                                  //formatting looks ugly =(
  body.appendChild(tile_random);
}
