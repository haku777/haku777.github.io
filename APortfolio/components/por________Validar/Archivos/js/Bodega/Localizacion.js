
function s_sumarCantidades(arreglo,lbl)
{
 var total =0;
  var txt;
  for (var i=0;i<arreglo.length;i++)
  {
    txt= document.getElementById(arreglo[i]);
     if( !isNaN(txt.value))
    {
    total+= parseInt(txt.value);}
   }
  lbl=document.getElementById(lbl);
  lbl.innerHTML=total; 
}