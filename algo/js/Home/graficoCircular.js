var radio,centroX,centroY;
function iniciarC(ini,id_canvas,datos,w,h)
{
   var graphCanvas = document.getElementById (id_canvas);
   graphCanvas.width=w/2;
   graphCanvas.height=h;
   radio =Math.min((graphCanvas.width/2),graphCanvas.height/2) / 2;
 // Asegúrese de que el elemento está disponible dentro del DOM
   if (graphCanvas && graphCanvas.getContext) {
      var context = graphCanvas.getContext('2d');
   crearGraficoC(context, datos,( graphCanvas.width/2),(graphCanvas.height/4));
   }
   if(ini){
   graphCanvas.addEventListener("mousemove",function(e) {mostrarC(e.pageX,e.pageY,id_canvas,datos,w,h);},false);
   graphCanvas.addEventListener("mousedown",function(e) {clickC(e.pageX,e.pageY,id_canvas,datos,w,h);},false);
        } 
}

function crearGraficoC(objeto2D, datos, centroX,centroY) {
   
    var valores,total,valor,ang,textY; 
    textY=20;
    total=0;   
    valor=0;
    ang=0; 
    for(var i = 0; i <datos.length; i ++) {
      valores = datos [i].split(',')[1];
      total +=parseFloat(valores);
     }
    for (var i = 0; i <datos.length; i ++) {
    valor=parseFloat(datos[i].split(',')[1])/total; 
    crearCirculo(objeto2D,centroX ,centroY*2,radio,Math.PI * (- 0.5 + 2 * ang),Math.PI * (- 0.5 + 2 * (ang + valor)),false,colores[i]);
//    mostrarItem((centroX*2)+10,textY,objeto2D,datos[i].split(",")[0].split('-')[0]+"'",colores[i]);
//    textY=textY +25;
    ang =ang+ valor;
    }
} 
  // crearCirculo
function  crearCirculo(objeto2D,centX,centY,radio,angIni,angFin,sentido,color) {		
    objeto2D.beginPath();
    objeto2D.moveTo(centX,centY);
    objeto2D.arc(centX,centY,radio,angIni, angFin,sentido);
    objeto2D.lineTo(centX,centY);
    objeto2D.fillStyle = '#'+color;
    objeto2D.fill();
    objeto2D.closePath();
 } 

function mostrarC(x,y,id_canvas,datos,w,h)
{
 var graphCanvas = document.getElementById (id_canvas);
 var context = graphCanvas.getContext('2d');
 x=x-getPosicionAbsolutaElemento(id_canvas).left;
 y=y-getPosicionAbsolutaElemento(id_canvas).top;
 var descripcion= obtenerDescripcion(x,y,context,datos)
 graphCanvas.width=graphCanvas.width;
 iniciarC(false,id_canvas,datos,w,h);
 if(descripcion !=' '){
   mostrarTooltip(x+5,y-5,context,descripcion); 
 }  
}
function clickC(x,y,id_canvas,datos,w,h)
{
 var graphCanvas = document.getElementById (id_canvas);
 var context = graphCanvas.getContext('2d');
 x=x-getPosicionAbsolutaElemento(id_canvas).left;
 y=y-getPosicionAbsolutaElemento(id_canvas).top;
 var link= obtenerlink(x,y,context,datos);
 graphCanvas.width=graphCanvas.width;
 iniciarC(false,id_canvas,datos,w,h);
 if(link!=' '){
  window.open(link ,'', 'location=1,status=1,scrollbars=1,toolbar=1');
 }
}