 var colores = [ "FF6347","999900", "008080","B22222", "8B008B"];
 function obtenerColor(x,y,objeto2D)
{
 var colorD=objeto2D .getImageData(x, y, 2, 2).data;
 return rgbAhex(colorD[0],colorD[1],colorD[2]);
}
function rgbAhex(R,G,B) 
{
return Hex(R)+Hex(G)+Hex(B)
}
function Hex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}
//function generarColores(can){
//    colores = new Array(can);
//    for(var i=0;i<can;i++){
//     colores[i]= rgbAhex(255-i*3,255-i*3,255-i*3);//  Math.floor(Math.random() * (255-0+1)) + 0;
//    }
//}