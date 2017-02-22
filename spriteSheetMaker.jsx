/*Photoshop script to automatically make spritesheets with the layers in psd
    */
app.preferences.rulerUnits = Units.PIXELS;
//resize image

var spriteFile = File.openDialog();
//select sprite image
var sprite = app.open(spriteFile);
app.activeDocument = sprite; 
var w = app.activeDocument.width;
var h = app.activeDocument.height;
var layers = app.activeDocument.layers.length;
alert("the width is" + w);
alert("the height is" + h);
app.activeDocument.resizeCanvas(w*layers,h);
for(var i=0;i<layers;i++)
{
   app.activeDocument.activeLayer = app.activeDocument.artLayers[i];  
    MoveLayerTo(sprite.activeLayer,w*i ,0 );
    }


function MoveLayerTo(fLayer,fX,fY) {

  var Position = fLayer.bounds;
  Position[0] = fX - Position[0];
  Position[1] = fY - Position[1];

  fLayer.translate(-Position[0],-Position[1]);
}