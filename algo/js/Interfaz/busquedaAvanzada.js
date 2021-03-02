// Archivo JScript

var hdd;

function establecerHdd(hd)
{
    hdd=MM_findObj(hd);
}

function capturarNuevoID(id,fnc)
{
    hdd.value=id;
    window.setTimeout(fnc, 1);
}
function s_mostrarBocadilloBusquedaAvanzadaMultiple(event, t, p_tbl, p_td)
{
    var x,y;
    var o=event.target
    
    var tbl= MM_findObj(p_tbl)
    if (leerCookie('samm_disposicionPantalla')=='0')
    {
    if (g_browser.isIE) 
          {
            o=window.event.srcElement
            x = getPosicionAbsolutaElemento(o).left + document.documentElement.scrollLeft
              + document.body.scrollLeft;
            y = getPosicionAbsolutaElemento(o).top + o.clientHeight + document.documentElement.scrollTop
              + document.body.scrollTop;
          }
    if (g_browser.isNS) 
          {
            x = getPosicionAbsolutaElemento(o).left
            y = getPosicionAbsolutaElemento(o).top + o.offsetHeight
          }    
    }
    else
    {
    if (g_browser.isIE) 
          {
          o=window.event.srcElement
            x = getPosicionAbsolutaElemento(o).left + o.clientWidth //+ document.documentElement.scrollLeft
              //+ document.body.scrollLeft;
            y = getPosicionAbsolutaElemento(o).top //+ document.documentElement.scrollTop
              //+ document.body.scrollTop;
          }
    if (g_browser.isNS)
          {
            x = getPosicionAbsolutaElemento(o).left+ o.offsetWidth
            y = getPosicionAbsolutaElemento(o).top 
          }
    }
    tbl.style.position = 'absolute';
    tbl.style.top=y + 'px';
    tbl.style.left=x + 'px';
    tbl.style.display = ''
    var td = MM_findObj(p_td)
    td.innerHTML= t 
}

function ocultar_bocadilloBusquedaAvanzadaMultiple(p_tbl){
    MM_findObj(p_tbl).style.display='none'
}
function ejecutarEdicion(hdd_id,tabla,id_bus)
{
    establecerHdd(hdd_id);
    var hdd = document.getElementById(hdd_id)
    
    if (hdd.value==''){
        return false;
    }
    if (hdd.value>0){ 
        popup_ventanaNuevo(tabla,'','','','&id=' + hdd.value + '&nx=' + id_bus)
    }
    return false;
}
function establecerSeleccionEnHdd(hdd_id,drp,edita,editaDRP)
{
    if(document.getElementById(drp).value>0)
    {
        document.getElementById(hdd_id).value=document.getElementById(drp).value
        var ed = document.getElementById(edita)
        if (ed != null)
            ed.style.display='';
        var edDRP = document.getElementById(editaDRP)
        if (edDRP != null)
            edDRP.style.display='';
    }else{
        var ed = document.getElementById(edita)
        if (ed != null)
            ed.style.display='none';
        var edDRP = document.getElementById(editaDRP)
        if (edDRP != null)
            edDRP.style.display='none';
    }
}
//Valida el checkbox y de acuerdo al valor devuelve un -1 o un 1
function validar_checkBox(valor,elemento){
var cantidad;
var suma=1;
if (valor==true){
cantidad=parseInt(elemento)+suma;
return cantidad;
}
else {
cantidad=parseInt(elemento)-suma;
return cantidad;
}
}

function sumarTodoSeleccionado(valor,elemento,seleccionados,x){
var cantidad;
var sumat=seleccionados;
if (valor==true){
cantidad=parseInt(elemento)+sumat-s_cantidadSeleccionados(x,seleccionados);
return cantidad;
}
else {
cantidad=parseInt(elemento)-sumat+s_cantidadNoSeleccionados(x,seleccionados);
return cantidad;
}
}

function s_cantidadSeleccionados(x,n){
    var y;
    var suma=0; 
    for (i = 2; i <= n+1; i++)	{
        if(i<10)y=x.id.substring(0,x.id.length-18)+'0'+i+'_chb_seleccionar';
        else y=x.id.substring(0,x.id.length-18)+i+'_chb_seleccionar';
        if (document.getElementById(y).checked==true)suma++;
    }
    return suma;
}
function s_cantidadNoSeleccionados(x,n){
    var y;
    var suma=0; 
    for (i = 2; i <= n+1; i++)	{
        if(i<10)y=x.id.substring(0,x.id.length-18)+'0'+i+'_chb_seleccionar';
        else y=x.id.substring(0,x.id.length-18)+i+'_chb_seleccionar';
        if (document.getElementById(y).checked==false)suma++;
    }
    return suma;
}
function ejecutarEdicionpestana(hdd_id,car,tabla,id_bus)
{
 establecerHdd(hdd_id);
 var hdd = document.getElementById(hdd_id)
 if (hdd.value==''){
        return false;
    }
    if(hdd.value>0)
    { 
      window.open(car+'/'+tabla+'.aspx?'+''+''+'&id='+ hdd.value +'&nx='+id_bus);
    }
    return false;
}

function s_asignardrpseleccionado(p_drp,p_hdf,p_hdft){
var drp=document.getElementById(p_drp );
var hdf=document.getElementById(p_hdf );
var hdfp;
hdf.value=drp.options[drp.selectedIndex].value;
if(p_hdft!=''){
hdfp=document.getElementById(p_hdft );
hdfp.value=hdf.value;
}

}
