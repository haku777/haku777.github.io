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

 /*funciones que calculan la resta de dos horas*/   
function restar(t2, t1){
       var secs1 = stringToSegundos(t1);
       var secs2 = stringToSegundos(t2);
       var secsDif = secs1 - secs2;
       return segundostoTiempo(secsDif);
      }

function calcularresta(finals,controlHoraIni,controlDuracion,controlFinTurno){
    if(controlFinTurno=="")
    {
        
    }else{
        var dot1 = finals.indexOf(":");
        var dot2 = document.getElementById(controlHoraIni).value.indexOf(":");
        var m2 = finals.substr(0, dot1);
        var m1 = document.getElementById(controlHoraIni).value.substr(0, dot2);
        var finTurno = document.getElementById(controlFinTurno).value
        
        
        
        if (Number(m2)< Number(m1)){
            if(Number(m1)<Number(finTurno.substr(0,2)))
            {
                alert('Hora fin menor que hora Inicial');
            }
            if(Number(m1)>Number(finTurno.substr(0,2)))
            {
                if(Number(m2)<Number(finTurno.substr(0,2)))
                {
                    var hora = parseInt(m2) + parseInt(24);
                    var horaFin =""+hora;
                    horaFin = horaFin+":"+finals.substr(3,5)+":00";
                    var diferencia=restar(document.getElementById(controlHoraIni).value+":00",horaFin)
                    var m1 = diferencia.substr(0, 5);
                    document.getElementById(controlDuracion).value=m1;  
                }else
                {
                    alert('Hora fin menor que hora Inicial');
                }
            }
        }else
        {
            if(Number(m2)>Number(finTurno.substr(0,2)) && Number(m1)<Number(finTurno.substr(0,2)))
            {
                alert('Hora fuera del rango');
            }
            var diferencia=restar(document.getElementById(controlHoraIni).value+":00",finals+":00")
            var m1 = diferencia.substr(0, 5);
            document.getElementById(controlDuracion).value=m1;  
        }
    }
}   
function sumar(t2, t1){
       var secs1 = stringToSegundos(t1);
       var secs2 = stringToSegundos(t2);
       var secsDif = secs1 + secs2;
       return segundostoTiempo(secsDif);
      }
function calculasuma(duracion,controlHoraIni,controlhorafinal){
    if(duracion.indexOf(":") == -1){
        
     }else{
            var suma =sumar(document.getElementById(controlHoraIni).value+":00",duracion+":00")
            if(suma.substr(0, 2)>=24)
            {
                suma=restar("24:00:00",suma)
            }
            document.getElementById(controlhorafinal).value=suma.substr(0,suma.lastIndexOf(":"));
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

function textoMotivo(texto,serial,drp,txt)
{

    var separador = " - ";
    var txt_motivo = document.getElementById(txt);
    var drp_motivo = document.getElementById(drp);
    txt_motivo.value = "";
    
    if(serial == ""){
        separador = "";
    }
    
    if(txt_motivo.value=="")
    {
        if(drp_motivo.value==0){
            txt_motivo.value="";
        }else{
            txt_motivo.value=drp_motivo.options[drp_motivo.selectedIndex].text + separador + serial;
        }
    }else
    {
    var i =0
        for(i=0;i<drp_motivo.length;i++)
        {
            if(drp_motivo.options[i].text==txt_motivo.value)
            {
                if(drp_motivo.value==0){
                    txt_motivo.value="";
                }else{
                    txt_motivo.value=drp_motivo.options[drp_motivo.selectedIndex].text + separador + serial;
                }
            }
        }
    }
    
}
function sugerirHorometro(hora,txt,hdd)
{
    var hdd_horometros = document.getElementById(hdd);
    var txt_horometro = document.getElementById(txt);
    var iResultado = -1;
    var horaResultado="24:00:00";
    var h;
    h = hdd_horometros.value.split("-");
    var i=1;
    while(i<h.length && h[i]!="")
    {
        var t = h[i];
        var index=t.indexOf(":");
        var hora1 = t.substring(index-2,index+3);
        var horaResta = restar(hora1,hora);
        if(horaResta.indexOf("-")>=0)
        {}else
        {
            hora1=restar(horaResta,horaResultado);
            if(hora1.indexOf("-")>=0){}else{
                horaResultado=horaResta;
                iResultado=i;
            }
            
        }
        i++;
    }
    if(iResultado>=0)
    {
        var p = h[iResultado];
        txt_horometro.value=p.substring(0,p.indexOf("("));
    }
    else{
         var p = h[0];
         txt_horometro.value=p.substring(0,p.indexOf("("));
    }
    
    
}
function calcularDiferencia(txt1,txt2,txt3,horas)
{
    var t1=document.getElementById(txt1);
    var t2=document.getElementById(txt2);
    var t3=document.getElementById(txt3);
    var b=parseFloat(t1.value.replace(',','.'));
    var a =parseFloat(t2.value.replace(',','.'));
    var c=a-b;
    t3.value=c.toFixed(2).toString();
    if(c>24)
    {
        alert('No puede ser mayor a 24');
        t3.value='24';
        t2.value=b+24;
    }else  {
        if (parseFloat(c)>parseFloat(horas))
        {
            if(confirm("¿El horometro supera las horas esperadas, desea corregirlo?"))
                {
                     t3.value=horas;
                     t2.value=b+horas;
                }
        }
    }
}

function calcularFechaFinDesdeDuracion(controlFechaInicio,controlHoraInicio, controlDuracionDias, controlDuracionHoras, controlFechaFin, controlHoraFin) {
        var f1 = document.getElementById(controlFechaInicio);
        var h1 = document.getElementById(controlHoraInicio);
        var dd = document.getElementById(controlDuracionDias);
        var dh = document.getElementById(controlDuracionHoras);
        var f2 = document.getElementById(controlFechaFin);
        var h2 = document.getElementById(controlHoraFin);

        var f1V = f1.value;
        var h1V = h1.value;
        var ddV = dd.value;
        var dhV = dh.value;
        var f2V = f2.value;
        var h2V = h2.value;
        
        
        if (dd.value == ''){
            ddV = 0;}

        if (dh.value == '') {
            dhV = '00:00';}

        if (h1.value == '') {
            h1V= '00:00'; }

        if (f1.value != '' && h1.value != '') {
            var secs1 = HoraMinutosToSegundos(h1V);
            var secs2 = HoraMinutosToSegundos(dhV);
            var dias = Math.floor((secs1 + secs2) / (60 * 60 * 24));
            var horaSeg = (secs1 + secs2) - (dias * (60 * 60 * 24));
            var formatoHora = segundostoTiempoSinSegundos(horaSeg);
            var formatoFecha = sumaDeDiasYFecha((Number(ddV) + Number(dias)), f1V)

            document.getElementById(controlFechaFin).value = formatoFecha;
            document.getElementById(controlHoraFin).value = formatoHora;
        }
        else {
            document.getElementById(controlFechaFin).value = '';
            document.getElementById(controlHoraFin).value = '';
        }
        
        
  
    
  
 }
 function calcularDuracionDesdeFechaFin(controlFechaInicio, controlHoraInicio, controlDuracionDias, controlDuracionHoras, controlFechaFin, controlHoraFin) {
         var f1 = document.getElementById(controlFechaInicio);
         var h1 = document.getElementById(controlHoraInicio);
         var dd = document.getElementById(controlDuracionDias);
         var dh = document.getElementById(controlDuracionHoras);
         var f2 = document.getElementById(controlFechaFin);
         var h2 = document.getElementById(controlHoraFin);

         var f1V = f1.value;
         var h1V = h1.value;
         var ddV = dd.value;
         var dhV = dh.value;
         var f2V = f2.value;
         var h2V = h2.value;

        
         if (h1.value == '') {
             h1V = '00:00';
         }
         if (h2.value == '') {
             h2V = '00:00';
         }

         if (f1.value != '' && h1.value != '' && f2.value != '' && h2.value != '') {
             var milsecH1 = HoraMinutosToMilisegundos(h1V);
             var milsecH2 = HoraMinutosToMilisegundos(h2V);
             var milsecF1 = FechaToMilisegundos(f1V);
             var milsecF2 = FechaToMilisegundos(f2V);
             var suma = (milsecF2 + milsecH2) - (milsecF1 + milsecH1);
             var dias = Math.floor(suma / (1000 * 60 * 60 * 24));
             var horas = Math.floor((suma - (dias * 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
             var min = Math.floor((suma - (dias * 1000 * 60 * 60 * 24) - (horas * 1000 * 60 * 60)) / (1000 * 60));

             var horasFin;
             var minFin;

             if (horas < 10) {
                 horasFin = '0' + horas;
             }
             else {
                 horasFin = horas;
             }

             if (min < 10) {
                 minFin = '0' + min;
             }
             else {
                 minFin = min;
             }
             document.getElementById(controlDuracionDias).value = dias;
             document.getElementById(controlDuracionHoras).value = horasFin + ":" + minFin;

         }
         else {
             document.getElementById(controlDuracionDias).value = '';
             document.getElementById(controlDuracionHoras).value = '';
         }

     
     
     
}

function diferenciaDeDiasEntreDosFechas(fecha1,fecha2) {
    var d1 = fecha1.split("/");
    var dat1 = new Date(d1[2], parseFloat(d1[1]) - 1, parseFloat(d1[0]));
    var d2 = fecha2.split("/");
    var dat2 = new Date(d2[2], parseFloat(d2[1]) - 1, parseFloat(d2[0]));

    var fin = dat2.getTime() - dat1.getTime();
    var dias = Math.floor(fin / (1000 * 60 * 60 * 24));

    return dias;
}

function sumaDeDiasYFecha(dias, fecha) {
    var d1 = fecha.split("/");
    var dat1 = new Date(d1[2], parseFloat(d1[1]) - 1, parseFloat(d1[0]));
    var fin = dat1.getTime() + (dias * 86400000);
    var datSuma = new Date(fin);
    var mes = datSuma.getMonth() + 1;
    var dia = datSuma.getDate();
    var mesFinal;
    var diaFinal;
    
    if (mes < 10){
        mesFinal = '0' + mes; }
    else {
        mesFinal = mes;
    }

    if (dia < 10){ 
        diaFinal = '0' + dia; }
    else {
        diaFinal = dia;
    }

    var fechaSuma = diaFinal + "/" + mesFinal + "/" + datSuma.getFullYear();
    return fechaSuma;
}

function segundostoTiempoSinSegundos(secs) {
    var hor = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hor * 3600)) / 60);
    return padNmb(hor, 2) + ":" + padNmb(min, 2)
}

function HoraMinutosToSegundos(tiempo) {
    var d1= tiempo.split(":");
    return ((Number(d1[1]) * 60) + (Number(d1[0]) * 3600));
}
function HoraMinutosToMilisegundos(tiempo) {
    var d1 = tiempo.split(":");
    return ((Number(d1[1]) * 1000 * 60) + (Number(d1[0]) * 1000 * 3600));
}
function FechaToMilisegundos(fecha1) {
    var d1 = fecha1.split("/");
    var dat1 = new Date(d1[2], parseFloat(d1[1]) - 1, parseFloat(d1[0]));
    var fin = dat1.getTime() 
    return fin;
}
function asignarHora(controlFechaEstado, controlHoraEstado,controlFechaInicio,controlHoraInicio) {
    document.getElementById(controlFechaEstado).value = document.getElementById(controlFechaInicio).value;
    document.getElementById(controlHoraEstado).value = document.getElementById(controlHoraInicio).value;
}