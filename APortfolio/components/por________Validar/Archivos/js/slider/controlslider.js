/*funciones que restan horas*/
 function padNmb(nStr, nLen){
    var sRes = String(nStr);
    var sCeros = "0000000000";
    return sCeros.substr(0, nLen - sRes.length) + sRes;
   }

function stringToSegundos(tiempo){
        var sep1 = tiempo.indexOf(":");
        var sep2 = tiempo.lastIndexOf(":");
        var hor = tiempo.substr(0, sep1);
        var min = tiempo.substr(sep1 + 1, sep2 - sep1 - 1);
        var sec = tiempo.substr(sep2 + 1);
        return (Number(sec) + (Number(min) * 60) + (Number(hor) * 3600));
    }

function segundostoTiempo(secs){
       var hor = Math.floor(secs / 3600);
       var min = Math.floor((secs - (hor * 3600)) / 60);
       var sec = secs - (hor * 3600) - (min * 60);
       return padNmb(hor, 2) + ":" + padNmb(min, 2) + ":" + padNmb(sec, 2);
    }

function restar(t2, t1){
       var secs1 = stringToSegundos(t1);
       var secs2 = stringToSegundos(t2);
       var secsDif = secs1 - secs2;
       return segundostoTiempo(secsDif);
      }

function calcularresta(finals,controlHoraIni,controlDuracion,controlSlider){
        var dot1 = finals.indexOf(":");
        var dot2 = document.getElementById(controlHoraIni).value.indexOf(":");
        var m1 = finals.substr(0, dot1);
        var m2 = document.getElementById(controlHoraIni).value.substr(0, dot2);
      
        
        if (Number(m1)< Number(m2)){
            var diferencia=restar(document.getElementById(controlHoraIni).value+":00",finals+":00")
                var sep1 = diferencia.indexOf(":");
                var m1 = diferencia.substr(0, sep1);
                if (m1>-10){var s1 = diferencia.substr(sep1+1,sep1);
                }else{var s1 = diferencia.substr(sep1+1,sep1-1);
                }
                m1=m1*-1;
                m1=24-m1;
                var seg=Number(s1)/60;
                diferencia=Number(m1)+seg;
                document.getElementById(controlDuracion).value=diferencia;
                document.getElementById(controlSlider).value=diferencia;
        }
       else {
                var diferencia=restar(document.getElementById(controlHoraIni).value+":00",finals+":00")
                var sep1 = diferencia.indexOf(":");
                var m1 = diferencia.substr(0, sep1);
                var s1 = diferencia.substr(sep1 + 1,sep1)
                var seg=Number(s1)/60;
                diferencia=Number(m1)+seg
                document.getElementById(controlDuracion).value=diferencia;  
                document.getElementById(controlSlider).value=diferencia;
            }
        }
 /*funciones que calculan la resta de dos horas*/      
function sumar(t2, t1){
       var secs1 = stringToSegundos(t1);
       var secs2 = stringToSegundos(t2);
       var secsDif = secs1 + secs2;
       return segundostoTiempo(secsDif);
      }
function calculasuma(duracion,controlHoraIni,controlhorafinal){
            if (duracion>=0 && duracion<=24){
                duracion = duracion.toString();
                var ini=duracion.indexOf(".")+1;
                var duracionmin;
                 if (duracion.indexOf(".") != -1) {      
                    entero = Number(duracion.substr(0,ini));
                    duracionmin=(Number(duracion)-entero)*60;
                    
                 duracionmin= duracionmin.toString();
                 if (duracionmin.indexOf(".") != -1) {
                     duracionmin = duracionmin.substr(0,duracionmin.indexOf("."));
                  }
                 duracion=entero.toString()+":"+duracionmin;
    
            }else{
            duracion=duracion+":00";
            }        
            var suma =sumar(document.getElementById(controlHoraIni).value+":00",duracion+":00")
            document.getElementById(controlhorafinal).value=suma.substr(0,suma.lastIndexOf(":"));
            }else{//alert("La duración debe estar comprendida entre 0 y 24")
            
            }
        }
 /*Limpia los textbox de fechafinal y duracion*/
function limpiar(controlDuracion,controlhorafinal){
            document.getElementById(controlDuracion).value="";
            document.getElementById(controlhorafinal).value="";
        }
 /*Limpia los textbox de fechafinal duracion y horaAmPM*/
function limpiarT(controlDuracion,controlhorafinal,controlHoraAmPm){
            document.getElementById(controlDuracion).value="";
            document.getElementById(controlhorafinal).value="";
             document.getElementById(controlHoraAmPm).value="";
        }   
        
 function f_formatoHora(p_hora,p_lbl)
    {
                          
        var l = document.getElementById(p_lbl)
        var v = document.getElementById(p_hora)
        var txthora = ""
        txthora = ""+v.value
         var i = 0
        var entero = Number(txthora.substring(0,2));
        if(entero > 12)
            {
                if(entero >= 24)
                  {
                            if(entero < 24)
                                {
                                 entero = entero - 12;
                                }else { 
                                        entero = entero - 24; 
                                        i=1;
                                      }
                                var x = entero.toString();
                                if(entero > 12)
                                    {   
                                        entero = entero - 12;
                                        x = entero.toString(); 
                                        i=2
                                    }
                                if(entero < 10 )
                                        {
                                            x = "0" + x
                                        }
                         l.value = ""+ x +":"+ txthora.substring(3,5);
                  }else{
                         entero = entero - 12;
                         var x = entero.toString();
                         if(entero < 10 )
                            {
                                x = "0"+x
                            }
                         l.value = ""+ x +":"+ txthora.substring(3,5);
                         l.value = l.value + " PM";
                        }
            }else
                {
                    l.value = txthora + " AM";
                }
               
          if(entero == 12)
         {
           if(i==1)
             {
             l.value =  l.value + " PM Prox Dia"
             return;
             }else {l.value = txthora + " PM";  }
         }
         
         if(entero == 0)
         {
         l.value = "12:" + txthora.substring(3,5);    
         
          if(i==1)
         {
         l.value =  l.value + " AM Prox Dia"
         return;
         }else {l.value = l.value + " AM";}      
         }
         
          if(i==1)
         {
         l.value =  l.value + " AM Prox Dia"
         }
          if(i==2)
         {
         l.value =  l.value + " PM Prox Dia"
         }
  }