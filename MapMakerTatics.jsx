//photoshopScript to make tile mapping for TaticsGame.

doEverything();

/*
 Doeverything(). Prompts users to select tile types and files, and then automatically aligns tile to correspodning txt file
    */
function doEverything(){
var doc = app.activeDocument;
preferences.rulerUnits = Units.PIXELS;


var file = File.openDialog();
file.open("r");


var w = file.readln();
var l = file.readln();
w = Number(w);
l = Number(l);

//opens other images
//var trees=File.openDialog();
//var mountains=File.openDialog();
var lava=File.openDialog("lava");
var sand=File.openDialog("sand");
var water=File.openDialog("water");
var grass = File.openDialog("grass");

var open1 = open(lava);
var open2 = open(sand);
var open3 = open(water);
var open4 = open(grass);
app.activeDocument= doc;
doc.resizeImage(100*w+"px",100*l+"px",null,ResampleMethod.BICUBIC);
var docBounds = doc.activeLayer.bounds;

var line;
var cur;

var x = 0,
    y = 0;
while (!file.eof) {
    line = file.readln();

    for (var i = 0; i < line.length; i++) {
        cur = line.charAt(i);
        switch (cur) {
            case("p"):
            app.activeDocument=open4;
            open4.activeLayer.duplicate(doc);
            break ;
            case("w"):
            app.activeDocument=open3;
            open3.activeLayer.duplicate(doc);
            break;
            case ("s"):
            app.activeDocument=open2;
            open2.activeLayer.duplicate(doc);
                break;
            case ("l"):
                        app.activeDocument=open1;
                        open1.activeLayer.duplicate(doc);
                        break;
        }
        app.activeDocument=doc;
        //doc.activeLayer.translate(i*50-docBounds[0],i*50-docBounds[1]);
        MoveLayerTo(doc.activeLayer, i*100, y*100);
        if(i%10==10)
        {
            activeDocument.mergeVisibleLayers();       
            }
    }
    y++;
    //alert(line);
}
try{  
    activeDocument.mergeVisibleLayers();  
    }catch(e){}  
}
//moves layer to position fx and fy
function MoveLayerTo(fLayer,fX,fY) {

  var Position = fLayer.bounds;
  Position[0] = fX - Position[0];
  Position[1] = fY - Position[1];

  fLayer.translate(-Position[0],-Position[1]);
}

//resize*50*parse(Str)