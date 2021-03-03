 function mostrar()
   {
    document.getElementById('divDuracion').style.visibility='visible';
   }
 function ocultar()
   {
    document.getElementById('divDuracion').style.visibility='hidden';
   }
 
 function s_establecerSeleccionados(chb,hdd)
 {
    var c = document.getElementById(chb)
    var h = document.getElementById(hdd)
    var s = new String();
    s=""
    for(i=0; i < c.rows.length; i++) {
        if (document.getElementById(chb + "_" + i).checked) 
        {
            var a =document.getElementById(chb + "_" + i)
            
            s += a.parentNode.getAttribute('dvalue')
            s += ","
        }
    } 
    if(s.length>0)
    {
       h.value=s.substring(0,s.length-1)
    }
 }
 
var lbl
var img
function f_str_calculaCruceDisp(ot,duracion,fec,controlHoraIni,controlhorafinal,plbl,pimg,hdd_tec){
    lbl=plbl
    img=pimg
    var hdd = document.getElementById(hdd_tec).value;
    if (hdd!="" && duracion!="")
    {
        document.getElementById(pimg).style.visibility='visible';
        PageMethods.f_str_validarHorario(ot,document.getElementById(fec).value,document.getElementById(controlHoraIni).value,duracion,hdd,s_establecerLabel)
    }
}
function f_str_calculaCruceDispHora(ot,duracion,fec,controlHoraIni,controlhorafinal,plbl,pimg,hdd_tec){
    lbl=plbl
    img=pimg
      var hdd = document.getElementById(hdd_tec).value;
    if (hdd!="" && duracion!="")
    {
        document.getElementById(pimg).style.display='';
        PageMethods.f_str_validarHorario(ot,document.getElementById(fec).value,document.getElementById(controlHoraIni).value,document.getElementById(duracion).value,hdd,s_establecerLabel)
    }
}
function s_establecerLabel(msg)
{
    document.getElementById(lbl).innerHTML=msg;
    document.getElementById(img).style.display='none';
}