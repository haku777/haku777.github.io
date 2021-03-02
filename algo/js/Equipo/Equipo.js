// Archivo JScript
var t_serial ='';
var t_cmm ='';

function setserial(p_txtserial)
{
    t_serial=document.getElementById(p_txtserial).value;
}

function recalcularValorPago(horo,vh,v)
{
    var h=document.getElementById(horo)
    var horometro=parseFloat(new String(h.value).replace(",","."))
    var vhora=parseFloat(new String(vh).replace(",","."))
    var v=document.getElementById(v)
    
    var total = horometro * vhora
    v.value=total
}
function validarIntervaloAtributo(txt,vmx,vmn)
{
    var h=document.getElementById(txt)
    var v=parseFloat(new String(h.value).replace(",","."))
    if (v>vmn){
        if (v<vmx){
        h.style.color = "#000000"   
        }else{
        h.style.color = "#d2691e"
        }
    }else{
        h.style.color = "#d2691e"
    }
}
function s_actualizarFechasEquipo(str_fechaPuestaMarcha,str_fechaVencimientoGarantia,meses,idioma)
{
    var fpm=document.getElementById(str_fechaPuestaMarcha);
    var fgd=document.getElementById(str_fechaVencimientoGarantia);
    var sFc0 = fpm.value; // Se asume válida 
    var nSum = meses; 
    var sFc1 = sFc0; 
    if (!isNaN(nSum)){ 
        if (idioma=="en-US")
        {
             var nDia = parseInt(sFc0.toString().split("/")[1]); 
             var nMes = parseInt(sFc0.toString().split("/")[0]); 
             var nAno = parseInt(sFc0.toString().split("/")[2]); 
        }else{
             var nDia = parseInt(sFc0.toString().split("/")[0]); 
             var nMes = parseInt(sFc0.toString().split("/")[1]); 
             var nAno = parseInt(sFc0.toString().split("/")[2]); 
        }
     sFc1 = sumaMes(nDia, nMes, nAno, nSum,idioma); 
    } 
    fgd.value = sFc1; 
}

function cerosIzq(sVal, nPos){ 
    var sRes = sVal; 
    for (var i = sVal.length; i < nPos; i++) 
     sRes = "0" + sRes; 
    return sRes; 
   } 

   function armaFecha(nDia, nMes, nAno,idioma){ 
    var sRes = "";
    if (idioma=="en-US")
    {
        sRes = cerosIzq(String(nMes), 1); 
        sRes = sRes + "/" + cerosIzq(String(nDia), 1); 
        sRes = sRes + "/" + cerosIzq(String(nAno), 4); 
    }else{
        sRes = cerosIzq(String(nDia), 2); 
        sRes = sRes + "/" + cerosIzq(String(nMes), 2); 
        sRes = sRes + "/" + cerosIzq(String(nAno), 4); 
    }
    return sRes; 
   } 

   function sumaMes(nDia, nMes, nAno, nSum,idioma){ 
    if (nSum >= 0){ 
     for (var i = 0; i < Math.abs(nSum); i++){ 
      if (nMes == 12){ 
       nMes = 1; 
       nAno += 1; 
      } else nMes += 1; 
     } 
    } else { 
     for (var i = 0; i < Math.abs(nSum); i++){ 
      if (nMes == 1){ 
       nMes = 12; 
       nAno -= 1; 
      } else nMes -= 1; 
     } 
    } 
    return armaFecha(nDia, nMes, nAno,idioma); 
   } 

function f_habilitartxt(chk,txt)
    { 
        var c = document.getElementById(chk);
        var t = document.getElementById(txt);
        
       if(!c.checked)
       {
        t.value ="";
        t.disabled=true;
        
       }else
       {
       t.disabled=false;
       }
    }
    
    function f_deshabilitartxt(chk,txt,textoDefecto,hidden)
    { 
        var c = document.getElementById(chk);
        var t = document.getElementById(txt);
        var h = document.getElementById(hidden);
         
       if(c.checked)
       {
            t.value =textoDefecto;
            t.disabled=true;
        }else
       {
       if(h.value == "")
       { 
        t.value ="";
            }else {
       t.value =h.value;
       }
       t.disabled=false;
       }
   }

   function resultadoEquipoSerial(callbackResult) {
       var info = document.getElementById('div_resultadoEquipoSerial');
       info.innerHTML = callbackResult;
   }

   function clientErrorCallback(error, context) {
       alert('Error en Calculo de serial! ' + error);
   }
