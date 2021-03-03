 function mostrarMotivoRBL(rbl,txtMotivo)
   {
   var a = document.getElementById(rbl+"_2")
   if(a.checked){
        document.getElementById(txtMotivo).style.display='none';
   }else{
        document.getElementById(txtMotivo).style.display='';
         }
   }
 
 function maxCaracteresProgramacion(obj, elEvento, maxi,labelMensaje) {
    var elem = obj;
    var mx=false;
    var evento = elEvento || window.event;
    var cod = evento.charCode || evento.keyCode;
    var lbl_aviso=MM_findObj(labelMensaje);
       if ( cod == 8 || cod == 127 || cod == 26 || cod == 46 ) {
         lbl_aviso.style.display='none';
         mx=true;
       }
    if (elem.value.length < maxi) {
        elem.value= elem.value.substring(0,maxi)
        lbl_aviso.style.display='none';
        mx=true;
       }
        if(!mx)
        {
        elem.value= elem.value.substring(0,maxi);
        lbl_aviso.style.display='';
        return false;
        }

    
}