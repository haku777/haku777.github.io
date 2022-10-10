

function s_verAdjunto(img,checklis){
    
    img =document.getElementById(img);
    checklis =document.getElementById(checklis);
     if(checklis.style.display=='none')
     {
      checklis.style.display='';
      img.src =img.src.replace('images/treelineimages/dashplus.gif','images/treelineimages/dashminus.gif');
     }
     else
     { 
       checklis.style.display='none';
       img.src=img.src.replace('images/treelineimages/dashminus.gif','images/treelineimages/dashplus.gif')
     }
        
}
function s_checkTodopersonalizado(x,checklis){
       x= document.getElementById(x);
      checklis  = document.getElementById(checklis);
      var inputRefArray = checklis.getElementsByTagName('input');
       for (i = 0; i < inputRefArray.length; i++){
       var inputRef = inputRefArray[i];
     
          if (inputRef.type == 'checkbox' )
           {
            inputRef.checked =x.checked;
           }
        }   
}
function agregarCorreo(elemento,seleccion,estados)
{
elemento = document.getElementById(elemento);
seleccion =document.getElementById (seleccion);
var contenido=correoContenidos(seleccion,estados);
if (elemento.type=="checkbox") elemento=elemento.parentNode;

if(contenido==true){
    elemento.style.display=""; 
}
else
{
    elemento.style.display="none";
}

}
function correoContenidos(seleccion,estados)
{
var seleccionado = seleccion[seleccion.selectedIndex].value;
for(i=0;i<estados.split(",").length;i++){
if(seleccionado==estados.split(",")[i]){
return true;
}
}
return false;
}

function mostrarEsconderItem(seleccion, name)
{var elementos=document.getElementsByName(name);
 seleccion=document.getElementById (seleccion);
if (seleccion.checked==true){
for(i=0; i<elementos.length ; i++){
elementos[i].style.display="";
}
}
else{
for(i=0; i<elementos.length ; i++){
elementos[i].style.display="none";
}
}
}