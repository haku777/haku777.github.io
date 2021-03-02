
function mostrarTooltip(x,y,objeto2D,texto)
{ 
    objeto2D.beginPath();
    objeto2D.globalAlpha=0.7;
    objeto2D.rect(x,y-10,texto.length*5,13);
    objeto2D.closePath();
    objeto2D.fillStyle = "#ffffff";
    objeto2D.fill();
    objeto2D.textAlign = "rigth";
    objeto2D.fillStyle = "#000";
    objeto2D.fillText (texto, x, y,100);	
  
}
function obtenerDescripcion(x,y,objeto2D,datos)
{
     var desc=' ';
     var  hexa= obtenerColor(x,y,objeto2D);
     for(var i = 0; i <colores.length; i++)
     {
       if(colores[i]==hexa){
       desc=datos[i].split(",")[0];
       break; 
       }
     }
    return desc;
}

function obtenerlink(x,y,objeto2D,datos)
{
     var lin=' ';
     var  hexa= obtenerColor(x,y,objeto2D);
     for(var i = 0; i <colores.length; i++)
     {
       if(colores[i]==hexa ){
       lin=datos[i].split(",")[2];
       break; 
       }
     }
     return lin;
}

function crearLinea(objeto2D, startx, StartY, EndX, endy) {
   objeto2D.beginPath();
   objeto2D.moveTo(startx, StartY);
   objeto2D.lineTo(EndX, endy);
   objeto2D.closePath();
   objeto2D.stroke();
 }

function  crearRectangulo(objeto2D, x, y, w, h,color, relleno) {			
   objeto2D.beginPath();
   objeto2D.rect(x, y, w, h);
   objeto2D.closePath();
   objeto2D.stroke();
   objeto2D.fillStyle = '#'+color;
   if(relleno)objeto2D.fill();
 } 
// 
//function mostrarItem(x,y,objeto2D,texto,color)
//{ 
//    objeto2D.beginPath();
//    objeto2D.rect(x,y,15,15);
//    objeto2D.closePath();
//    objeto2D.fillStyle = "#"+color;
//    objeto2D.fill();
//    objeto2D.textAlign = "rigth";
//    objeto2D.fillStyle = "#000";
//    objeto2D.fillText(texto, x+15 ,y+10,100);	
//  
//}