
//se usa en busAvanzada multiple
  function s_mostrarBocadilloElemento(event, t)
{   
     var tbl= MM_findObj('tbl_bocadilloElemento')
     if(tbl.style.display == 'none')
     {
      tbl.style.display = '';
     }else
     {
      tbl.style.display = 'none';
     }
   
    MM_findObj('td_BocadilloElementotexto').innerHTML= t;
 
   }
  
function s_checkTodoEnable(x,n,k){
    var y
    for (i = 1; i <= n+1; i++){
        if(i<10)
            {y=x.id.substring(0,x.id.length-18)+'0'+i+'_chb_seleccionar'; 
        }
        else {
            y=x.id.substring(0,x.id.length-18)+i+'_chb_seleccionar';
        }
        if (document.getElementById(y)!= null  && document.getElementById(y).getAttribute("disabled") !="disabled"){
            if (document.getElementById(y).parentNode.style.display=="") {
                document.getElementById(y).checked = x.checked;
            }
            else if(k!=1){
                document.getElementById(y).checked = x.checked;
            }
        }
    }
}
  
function s_checkTodo(x,n,k){
    var y
    for (i = 1; i <= n+1; i++){
        if(i<10)
            {y=x.id.substring(0,x.id.length-18)+'0'+i+'_chb_seleccionar';
        }
        else {
            y=x.id.substring(0,x.id.length-18)+i+'_chb_seleccionar';
        }
        if (document.getElementById(y)!= null){
            if (document.getElementById(y).parentNode.style.display=="") {
                document.getElementById(y).checked = x.checked;
            }
            else if(k!=1){
                document.getElementById(y).checked = x.checked;
            }
        }
    }
}

function s_dosCheckTodo(x,n,k){
    var y
    for (i = 1; i <= n+1; i++){
        if(i<10){
            y=x.id.substring(0,x.id.length-22)+'0'+i+'_chb_seleccionarElim';
        }else {
            y=x.id.substring(0,x.id.length-22)+i+'_chb_seleccionarElim';
        }
        if (document.getElementById(y)!= null){
            if (document.getElementById(y).parentNode.style.display=="") {
                document.getElementById(y).checked = x.checked;
            }else if(k!=1){
                document.getElementById(y).checked = x.checked;
            }
        }
    }
}
function s_mostrarBocadillo(event, t)
{
    var x,y;
    var o;
    var tbl= MM_findObj('tbl_bocadillo')
    
    if (leerCookie('samm_disposicionPantalla')=='0')
    {
          if (g_browser.isIE) 
          {
            o=event.srcElement
            x = getPosicionAbsolutaElemento(o).left + document.documentElement.scrollLeft
              + document.body.scrollLeft;
            y = getPosicionAbsolutaElemento(o).top + o.clientHeight + document.documentElement.scrollTop
              + document.body.scrollTop;
          }
          if (g_browser.isNS) 
          {
            o = event.target
            x = getPosicionAbsolutaElemento(o).left
            y = getPosicionAbsolutaElemento(o).top + o.offsetHeight
          }    
    }
    else
    {
          if (g_browser.isIE) 
          {
            o = event.srcElement
            x = getPosicionAbsolutaElemento(o).left + o.clientWidth //+ document.documentElement.scrollLeft + document.body.scrollLeft;
            y = getPosicionAbsolutaElemento(o).top //+ document.documentElement.scrollTop + document.body.scrollTop;
          }
          if (g_browser.isNS)
          {
            o = event.target
            x = getPosicionAbsolutaElemento(o).left+ o.offsetWidth
            y = getPosicionAbsolutaElemento(o).top 
          }
    }
    tbl.style.position = 'absolute'
    tbl.style.top=y + 'px'
    tbl.style.left=x + 'px'
    tbl.style.display = ''
    MM_findObj('td_textoBocadillo').innerHTML= t
}

function mostrartexdef(e,ctrid){
    var o=e.target
    var tbl= MM_findObj(ctrid)
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
            var x = o.offsetWidth, y = 0;
            do {
                if (o.id != "ctl00_cph_general_pop_tbl_popup") {
                    y += o.offsetTop || 0;
                    x += o.offsetLeft || 0;
                }
                o = o.offsetParent;
            } while (o);
            
          }
    
    tbl.style.position = 'absolute';
    tbl.style.top=y + 'px';
    tbl.style.left=x + 'px';
    tbl.style.display = ''
}



function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function ocultar_bocadillo(){
    MM_findObj('tbl_bocadillo').style.display='none'
}

function asignarPrecio(textbox,value,lbllista,valuelista,lbl_valor_base,valor_base,porcedescto,valor_descuento) {
    var t = MM_findObj(textbox);
    t.value=value;
    var l=MM_findObj(lbllista);
    l.value = valuelista;
    var j = MM_findObj(porcedescto);
    j.value = valor_descuento;
    
      
}

function ValidarTamanoCaracteres(textareaControl,maxlength){
    var txt = document.getElementById(textareaControl);
    if (txt.value.length > maxlength){
        txt.value = txt.value.substring(0,maxlength);
        //alert("Debe ingresar hasta un maximo de "+maxlength+" caracteres");
    }
}

//Valida si algunno de los dos txt tienen contenido
function controlObligatorio(txt1,txt2,val1,val2,lbl1)
{
    var t1 = document.getElementById(txt1);
    var t2 = document.getElementById(txt2);
    var v1 = document.getElementById(val1);
    var v2 = document.getElementById(val2);
    var l2 = document.getElementById(lbl1);
    if(t2.value != "")
    {v1.validationGroup="";
     l2.style.textdecoration = "none";
     l2.style.fontStyle = "Verdana,Arial,Helvetica,sans-serif";
    }else {v1.validationGroup="form";
     l2.style.textdecoration = "underline"; 
     l2.style.fontStyle = "Italic";}
    if(t1.value != "" )
    {v2.validationGroup=""
    }else {v2.validationGroup="form"; }
    if(t2.value == "" && t1.value == "")
    {v2.validationGroup="";
    l2.style.textdecoration = "underline";
    l2.style.fontStyle = "Italic";}
    return;
}

//Esconde campos Minimo/Maximo, si Es Variable el atributo
function esconderSegunEsVariableAtributo(valor, elemento){
    if (valor==true){
        elemento.style.display="";
    } else {
        elemento.style.display="none";
    }
}

//No permite esconder si esta en estado Buscar
function noEsconderBuscarEsVariableAtributo(elemento){
    elemento.style.display="";
}

//Valida proyeccion y de acuerdo al valor esconde o muestra el elemento
function validar_proyeccion(valor, elemento){
if (valor==true){
elemento.style.display="";
}
else {
elemento.style.display="none";
}
}
//Esconde o muestra el elemento
function validar_pnlCancelar(elemento){
 if (elemento.style.display=="none"){
elemento.style.display="";
}
else {
elemento.style.display="none";
}
}
//cambia de valor un string
function cambiarSigno(signo){
if (signo=="(+)"){
return "(-)";
}
else {
return "(+)";
}
}
//Muestra o oculta el bocadillo con la Infomacion adicional del Equipo
function s_mostrarBocadilloInfoEquipo(event, t, link, etiqueta)
{
var tbl= MM_findObj('tbl_bocadilloInfoEquipo')
var x,y;
var o;
if (leerCookie('samm_disposicionPantalla')=='0')
{
if (g_browser.isIE) 
{
o=event.srcElement
x = getPosicionAbsolutaElemento(o).left + document.documentElement.scrollLeft
+ document.body.scrollLeft;
y = getPosicionAbsolutaElemento(o).top + o.clientHeight + document.documentElement.scrollTop
+ document.body.scrollTop;
}
if (g_browser.isNS) 
{
o = event.target
x = getPosicionAbsolutaElemento(o).left
y = getPosicionAbsolutaElemento(o).top + o.offsetHeight
}    
}
else
{
if (g_browser.isIE) 
{
o = event.srcElement
x = getPosicionAbsolutaElemento(o).left + o.clientWidth 
y = getPosicionAbsolutaElemento(o).top 
}
if (g_browser.isNS)
{
o = event.target
x = getPosicionAbsolutaElemento(o).left+ o.offsetWidth
y = getPosicionAbsolutaElemento(o).top 
}
}
tbl.style.position = 'absolute'
tbl.style.top=y + 'px'
tbl.style.left=x + 'px'
if(tbl.style.display == 'none')
{
tbl.style.display = '';
document.getElementById(link).innerHTML=etiqueta + "-"
}
else
{
tbl.style.display = 'none';
document.getElementById(link).innerHTML=etiqueta + "+"
}
MM_findObj('td_BocadilloInfoEquipoTexto').innerHTML= t;
}
//cambiar opcion de perfil CLIENTE/PROVEEDOR
function cambiarperfil(checkValor,check)
{
    checkValor=document.getElementById(checkValor);
    check =document.getElementById(check);
     var inputRefArray = checkValor.getElementsByTagName('input');
          for (i = 0; i < inputRefArray.length; i++){
           var inputRef = inputRefArray[i];
           if (inputRef.type == 'radio' && inputRef.value == 1 && inputRef.checked)
           {
              check.getElementsByTagName('input')[1].checked=inputRef.checked;
           }
         
        }  
}


var tex
function cambiarSignos(texto, control){

if (tex==null){
if(texto.indexOf('+') != -1){
control.innerHTML = texto.replace('+','-');
tex = control.innerHTML;
}
else{
control.innerHTML = texto.replace('-','+')
tex = control.innerHTML;
}
}
else
{
if(tex.indexOf('+') != -1){
control.innerHTML = tex.replace('+','-');
tex = control.innerHTML;
}
else
{
control.innerHTML = tex.replace('-','+')
tex =control.innerHTML;
}
}
}

function infoContactos (drp_contato, drp_datos, mostrar, controlInfo, texto){
var contacto=MM_findObj(drp_contato);
var datos=MM_findObj(drp_datos);
var control=MM_findObj(controlInfo);
var id_contacto;
var texto;
var tbl= MM_findObj('tbl_bocadilloElemento')
if (contacto.selectedIndex==-1 ||contacto.selectedIndex==0)
{
control.innerHTML = texto;
tex = control.innerHTML;
tbl.style.display = 'none';
control.style.display ="none";
return false;
}
else
{
id_contacto=contacto[contacto.selectedIndex].value
 for(var j =0;j<datos.length;j++){
        if(datos[j].value==id_contacto){
           id_contacto =j;
                
        }
        }

if (mostrar=='1')
{
s_mostrarBocadilloElemento("event",datos[id_contacto].text);
 }
else
{
cambiarSignos(texto, control)
}

s_mostrarBocadilloElemento("event",datos[id_contacto].text);
control.style.display ="";
}
}