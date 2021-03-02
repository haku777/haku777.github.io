// JScript File

 function Browser() 
        {
          var ua, s, i;
          this.isIE    = false;
          this.isNS    = false;
          this.version = null;
          ua = navigator.userAgent;
          s = "MSIE";
          if ((i = ua.indexOf(s)) >= 0) 
          {
            this.isIE = true;
            this.version = parseFloat(ua.substr(i + s.length));
            return;
          }
          s = "Netscape6/";
          if ((i = ua.indexOf(s)) >= 0)   
          {
            this.isNS = true;
            this.version = parseFloat(ua.substr(i + s.length));
            return;
          }
          s = "Gecko";
          if ((i = ua.indexOf(s)) >= 0)
          {
            this.isNS = true;
            this.version = 6.1;
            return;
          }
        }

function MM_findObj(n, d) { //v4.01
  var p,i,x;
  if(!d) d=document;
  x = d.getElementById(n);
  if(!x){
        
      if (!(typeof a_str_contenedor == 'undefined'))
      {
          n=a_str_contenedor + n;
      }

      if((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p+1)].document;
        n = n.substring(0,p);
      }
      if(!(x = d[n]) && d.all) x = d.all[n];
      for (i = 0;!x && i < d.forms.length;i++) x = d.forms[i][n];
      for(i = 0;!x && d.layers && i < d.layers.length;i++) x = MM_findObj(n,d.layers[i].document);
      if(!x && d.getElementById) x = d.getElementById(n);
  }
  return x;
}

function ocultar(x) {
    if (!x) { 
    MM_findObj(x).style.display='none'
    if(x.indexOf('tbl_popup')!=-1) {
        var y = x.substring(0,x.indexOf('tbl_popup'))+'divModal'
        MM_findObj(y).style.display='none'
    }
    }
    
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadimages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadimages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}


function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function InitHijo(initMensaje, hijo){
   var ctrhijo=MM_findObj(hijo) 
   ctrhijo.length = 0;
   var option = new Option(initMensaje.toString(), '');
   ctrhijo.options[0]=option;
}

function CargarHijo(padre, hijo, total, hdd, msg) {
				var ctrpadre=MM_findObj(padre)
				var ctrhijo=MM_findObj(hijo)
				var ctrtotal=MM_findObj(total)
				var ctrhdd=MM_findObj(hdd)
				var id_padre
				var j=1
				var sel=0
				ctrhijo.length=0
				if (ctrpadre.selectedIndex!=-1) {
				id_padre = ctrpadre[ctrpadre.selectedIndex].value
				ctrhijo.length=j
				ctrhijo[0].text = msg
				ctrhijo[0].value = ''
				for (i=0; i<ctrtotal.length ; i++){
					if(ctrtotal[i].value.split("_")[1]==id_padre || ctrtotal[i].value == 0){					
						j=j+1
						ctrhijo.length=j
						ctrhijo[j-1].text = ctrtotal[i].text 
						ctrhijo[j-1].value = ctrtotal[i].value.split("_")[0]
						if(ctrhijo[j-1].value==ctrhdd.value){
							ctrhijo.selectedIndex=j-1
							sel = 1;
						}
					}
				}
				if (sel==0) {
				    ctrhdd.value='';
				}
				//if(ctrpadre[0].value=="0" && ctrpadre.selectedIndex!=0){ctrpadre.remove(0)}				
				}								
							 
}
//2006_04_28 15:28
function CargarHijo_v2(padre, hijo, total, hdd) {
			var ctrpadre=MM_findObj(padre)
			var ctrhijo=MM_findObj(hijo)
			var ctrtotal=MM_findObj(total)
			var ctrhdd=MM_findObj(hdd)
			var id_padre
			var noItems = 0;
			var j=0
			ctrhijo.length=0
			if (ctrpadre.selectedIndex==-1) return false;
			id_padre = ctrpadre[ctrpadre.selectedIndex].value
			for (i=0; i<ctrtotal.length ; i++){
				if(ctrtotal[i].value.split("_")[1]==id_padre || ctrtotal[i].value == 0){					
					//var option = new Option(ctrtotal[i].text, ctrtotal[i].value.split("_")[0]);
					var option = document.createElement("option")
					option.value=ctrtotal[i].value.split("_")[0]
					option.text=ctrtotal[i].text
					ctrhijo.options.add(option)
					if(ctrtotal[i].value.split("_")[0] == ctrhdd.value){
							ctrhijo.selectedIndex = ctrhijo.length - 1;
					}
					noItems=noItems+1;				 
				}
			}									
			return true							 
}            

var arrNumeros = new Array("1","2","3","4","5","6", "7", "8", "9", "0", ",")
//function esNumero: recibe del evento onKeyPress el objeto event.
function pulsaNumero(e, ctr, negativo, entero, separador_decimal){   
   if(!separador_decimal)separador_decimal = ",";
   var car
   var key = 0
   var tecla
   var numeros = "1234567890"
  
   var estado=true

          if(document.all){          
              key = event.keyCode                        
          }
          else if(document.layers){
              key = e.which        
          }                
          else if(document.getElementById){       
              key = (window.Event) ? e.which : e.keyCode;          
          }             	
          tecla = String.fromCharCode(key);
		  		  
		  if(key > 32){ 
		   	if(numeros.indexOf(tecla) != -1){estado=true}		          
			else{estado = false} 
		  }
		  
          if(estado==false)
          {
             if(!entero){    
                if(tecla==".")tecla=separador_decimal;
		        if(tecla==separador_decimal){
		            var varctr = document.getElementById(ctr)			   
			        if((varctr.value).indexOf(separador_decimal) == -1)varctr.value = varctr.value + separador_decimal;
			    }
		        
		     }
		     
		     if(tecla=="-" && negativo){
		        var varctr = document.getElementById(ctr)
		        if((varctr.value).indexOf('-') == -1)varctr.value = "-" + varctr.value		   
			 }
		     
              if(document.all)
                  event.returnValue = estado;
              else
                  return estado;
          }
}

function popup_ventanaNuevo(f,t,w,h,p){
    if(!h) h=500
    if(!w) w= 400
    var x=(screen.width-w)/2
    var y=(screen.height-h)/2
    var url = '../../forms/general/formNuevo.aspx?nc='+f
    if(p) url+=p
    if(t) url+='&t='+t
    window.open(url,'','scrollbars=1,status=0,toolbar=0,resizable=1,menubar=0,left='+x+',top='+y+',width='+w+',height='+h)
}

var g_browser = new Browser();

function getYTotal(){
    if(g_browser.isIE){
        return document.body.scrollTop + screen.height
       }
        if(g_browser.isNS){
        return window.scrollY + window.outerHeight
       }
}

function getXTotal(){
    if(g_browser.isIE){
        return document.body.scrollLeft + screen.width
       }
        if(g_browser.isNS){
        return window.scrollX + window.outerWidth
       }
}

function crearCookie(name,value) {
    var date = new Date();
    date.setTime(date.getTime()+(20*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
    document.cookie = name+"="+value+expires+"; path=/";
}

function getPosicionAbsolutaElemento(e) {
  if (typeof e == "string"){
    e=document.getElementById(e)
    }
  if (!e) return { top:0,left:0 };
  
  var y = 0
  var x = 0
  while (e.offsetParent) {
    x+=e.offsetLeft
    y+=e.offsetTop
    e=e.offsetParent
  }
  return {top:y,left:x};
}
function leerCookie(n) {
   a = document.cookie.substring(document.cookie.indexOf(n + '=') + n.length + 1,document.cookie.length);
   if(a.indexOf(';') != -1)a = a.substring(0,a.indexOf(';'))
   return a; 
} 

function girar(){

    PageMethods.s_creaPreferencia("samm_disposicionPantalla","1",esOKG,esErr); 
}

function esOKG() { 
document.location.href=document.location.href;
}

function esErr(error, userContext, methodName) {
   PageMethods.s_regError(error + '('+ methodName +','+ userContext +')',esOK,esErr);
}


function s_maximizar() {
    window.moveTo(0, 0);
    if (!g_browser.isIE) {
        window.resizeTo(screen.availWidth, screen.availHeight);
    }
    else {
        if (document.layers || document.getElementById) {
            if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
                top.window.outerHeight = screen.availHeight;
                top.window.outerWidth = screen.availWidth;
            }
        }
    }
}
function CalcularDifQuienPaga(idcli,idpro,idotro,dif,tipo,idtotal){ 
 var vartotal=document.getElementById(idtotal).value;
 var varctr1 = document.getElementById(idcli).value;
 var varctr2 = document.getElementById(idpro).value;
 var varctr3 = document.getElementById(idotro).value;
 
 if (varctr1.indexOf(",") != -1) {
    varctr1=varctr1.replace(",",".");
 }
 if (varctr2.indexOf(",") != -1) {
    varctr2=varctr2.replace(",",".");
 }
 if (varctr3.indexOf(",") != -1) {
    varctr3=varctr3.replace(",",".");
 }
 if (vartotal.indexOf(",") != -1) {
    vartotal=vartotal.replace(",",".");
 }

  
 if (tipo == '%'){
    var total  = Number(100) - (Number(varctr1) + Number(varctr2) + Number(varctr3));
     total=total.toString()
     if (total.indexOf(".") != -1) {
        total=total.replace(".",",");
     }
    document.getElementById(dif).innerHTML= "  " + total + "  " + tipo;
 }
 else {
    var total=Number(vartotal) - (Number(varctr1) + Number(varctr2) + Number(varctr3));
    total=total.toString()
    if (total.indexOf(".") != -1) {
        total=total.replace(".",",");
     }
    document.getElementById(dif).innerHTML="  " + tipo + "  " +  total ;
 }
  }
  
function SalarioMinimo(idcli,idpro,idotro,dif,tipo,idtotal,idSM,cantidad,valoracalcular){ 
 var varSM = document.getElementById(idSM).value;
 var varcantidad = document.getElementById(cantidad).value;
 
 if (varSM.indexOf(",") != -1) {
    varSM=varSM.replace(",",".");
 }
   
var total  = Number(varSM)*Number(varcantidad);
     total=total.toString()
     if (total.indexOf(".") != -1) {
        total=total.replace(".",",");
     }
     if(valoracalcular=='cli'){
        document.getElementById(idcli).value= total;
        
        }
     if(valoracalcular=='pro'){
        document.getElementById(idpro).value= total;
       
        }
      if(valoracalcular=='otr'){
        document.getElementById(idotro).value= total;
        
        }
        
   CalcularDifQuienPaga(idcli,idpro,idotro,dif,tipo,idtotal)
  }

/*POP cambio estado */
 
function validarOrdenEstado(str_estados,str_orden,str_aviso,orden)
{
    var drp_estados=MM_findObj(str_estados);
    var drp_orden=MM_findObj(str_orden);
	var lbl_aviso=MM_findObj(str_aviso);
	var id_estado
	if (drp_estados.selectedIndex==-1) return false;
	id_estado = drp_estados[drp_estados.selectedIndex].value
	
	for (i=0; i<drp_orden.length ; i++){
		if(drp_orden[i].value==id_estado){
		    if(drp_orden[i].text<=orden)
		    {
		        lbl_aviso.style.display='';
		    }else{
		        lbl_aviso.style.display='none';
		    }
		}
	}
	
	
}
function establecerColorEstado(str_estados,str_colores,str_panel)
{
    var drp_estados=MM_findObj(str_estados);
    var drp_colores=MM_findObj(str_colores);
	var pnl_panel=MM_findObj(str_panel);
	var id_estado
	if (drp_estados.selectedIndex==-1) return false;
	id_estado = drp_estados[drp_estados.selectedIndex].value
	
	for (i=0; i<drp_colores.length ; i++){
		if(drp_colores[i].value==id_estado){
		    pnl_panel.style.background="#" + drp_colores[i].text;
		}
	}
}
function validarNumeroDeMotivos(str_motivo,str_td)
{
    var drp_motivos=MM_findObj(str_motivo);
    var td_motivo=MM_findObj(str_td);
    if (drp_motivos.length==1)
    {
        td_motivo.style.display='none'
    }else
    {
        td_motivo.style.display=''    
    }
}

function estableceDescripcionEstado(str_estados,str_drpDesc,str_desc)
{
    var drp_estados=MM_findObj(str_estados);
    var str_drpDesc=MM_findObj(str_drpDesc);
	var lbl_desc=MM_findObj(str_desc);
	var id_estado
	
	if (drp_estados.selectedIndex==-1) return false;
	id_estado = drp_estados[drp_estados.selectedIndex].value
	
	for (i=0; i<str_drpDesc.length ; i++){
		if(str_drpDesc[i].value==id_estado){
			
		    lbl_desc.innerHTML=	str_drpDesc[i].text
		
		  			   return;
		}else 
		{
		     
		}
	}
}

/*FIN POP CAMBIO ESTADO*/

function DoFocusControl(control){
    var a = null;
    try {
    a = document.getElementById(control);
    var i=0
    while(a==null && i<500){
        a = document.getElementById(control);
        i = i + 1;
    }
    a.focus();
    } catch (ex) {
        //alert('ERROR');
    }
}
function ubicarPop(tbl, hdd_vis, hdd_x, hdd_y, p, visibilidadScroll) {
    var pnl = document.getElementById(p);
    var t = document.getElementById(tbl);
    if ((t != null))
    {
        t.style.display='';
        if (g_browser.isIE)
        {
            t.style.position='fixed';
            if (t.offsetHeight>document.documentElement.clientHeight)
            {
                t.style.top= document.body.scrollLeft + "px";
            }else{
                t.style.top=((document.documentElement.clientHeight/2)-(t.offsetHeight/2)) + "px";
            }        
            t.style.left=((document.documentElement.clientWidth/2)-(t.offsetWidth/2)) + "px";
        } else {
            if (t.offsetHeight>window.innerHeight)
            {
                t.style.top=window.scrollY + "px";
            } else {

                t.style.top = (window.innerHeight / 2) - (t.offsetHeight / 2) + "px";
                if (tbl.toString().indexOf("/") == -1)
                t.style.top=(window.scrollY+(window.innerHeight/2)-(t.offsetHeight/2)) + "px";
        }
        t.style.left = (window.innerWidth / 2) - (t.offsetWidth) + "px";
            if (tbl.toString().indexOf("/") == -1)
            t.style.left = (window.scrollX + (window.innerWidth / 2) - (t.offsetWidth / 2)) + "px";
//            alert(t.style.left + ' , ' + t.style.top);
//            alert(pnl.id);
            if(pnl!=null)s_ubicarPanel(pnl,t,visibilidadScroll);
        }
        var vis = document.getElementById(hdd_vis);
        var X = document.getElementById(hdd_x);
        var Y = document.getElementById(hdd_y);
        var str = new String(vis.value)
        if(str.indexOf(tbl,0)<0)
        {
            vis.value += tbl + '@' + t.style.left + ',' + t.style.top + '|'
        }
        X.value=t.style.left
        Y.value=t.style.top
    }
}

function s_ubicarPanel(pnl,t,visibilidadScroll)
{
    if (g_browser.isIE)
        {
            if (t.offsetHeight>document.documentElement.clientHeight)
            {
                if((document.documentElement.clientHeight-180)>0)
                {
                    pnl.style.height=(document.documentElement.clientHeight-180) + "px";
                }
                if((document.documentElement.clientWidth-200)>0)
                {
                    if (t.offsetWidth>document.documentElement.clientWidth){
                        pnl.style.width=(document.documentElement.clientWidth-200) + "px";
                    }
                }
                pnl.style.overflow="auto";
                 if (visibilidadScroll=="True"){
                        pnl.style.overflow="visible";
                        pnl.style.height="";
                    }
            }       
        }else{
            if (t.offsetHeight>window.innerHeight)
            {
                pnl.style.height=(window.innerHeight-180) + "px";
                if (t.offsetWidth>window.innerWidth){
                    pnl.style.width=(window.innerWidth-200) + "px"; 
                }
                pnl.style.overflow="auto";
                if (visibilidadScroll=="True"){
                        pnl.style.overflow="visible";
                        pnl.style.height="";
                    }
            }
        }    
}

function s_ejecutarFuncion(fnc)
{
    window.setTimeout(fnc, 1);
}
function s_habilitarTXT(t_chb,id_item,fila,num_filas,porc,estado)
{
    var chb = document.getElementById(t_chb);
    if (chb==null)return;
    if(estado==0)
    {
       chb.checked=0;
       chb.disabled='disabled';
    }
    if(estado==1)
    {
       chb.checked=1;
       chb.disabled='';
    }
    var i = 1;
    var s = new String();
    for(i=2;i<=num_filas+1;i++)
    {
        s=fila.toString().substring(0,fila.toString().length-2);
        if(i<10)
        {
            s = s + '0' + i;
        }else
        {
            s = s + i;
        }
        
        var id_padre = document.getElementById(s + '_lbl_id_itemPadre')
        if(id_padre==null)
        {
            alert('Error: ' + i + ' s=' + s);
        }else
        {
            if (id_padre.innerHTML==id_item)
            {
                if(porc==0)
                {
                    s_editarDisabledTXT(s,'txt_cliente',chb,estado,num_filas,porc);
                    s_editarDisabledTXT(s,'txt_proveedor',chb,estado,num_filas,porc);
                    s_editarDisabledTXT(s,'txt_otro',chb,estado,num_filas,porc);
                }else
                {
                    s_editarDisabledTXT(s,'txt_clienteValor',chb,estado,num_filas,porc);
                    s_editarDisabledTXT(s,'txt_clienteSalariominimo',chb,estado,num_filas,porc);
                    s_editarDisabledTXT(s,'txt_proveedorValor',chb,estado,num_filas,porc);
                    s_editarDisabledTXT(s,'txt_proveedorSalariominimo',chb,estado,num_filas,porc);
                    s_editarDisabledTXT(s,'txt_otroValor',chb,estado,num_filas,porc);
                    s_editarDisabledTXT(s,'txt_otroSalariominimo',chb,estado,num_filas,porc);
                }
            }
        }
    }

    if(porc==0)
    {
        s_editarDisabledCheckPrincipal(fila,'txt_cliente',chb);
        s_editarDisabledCheckPrincipal(fila,'txt_proveedor',chb);
        s_editarDisabledCheckPrincipal(fila,'txt_otro',chb);
    }else
    {
        s_editarDisabledCheckPrincipal(fila,'txt_clienteValor',chb);
        s_editarDisabledCheckPrincipal(fila,'txt_clienteSalariominimo',chb);
        s_editarDisabledCheckPrincipal(fila,'txt_proveedorValor',chb);
        s_editarDisabledCheckPrincipal(fila,'txt_proveedorSalariominimo',chb);
        s_editarDisabledCheckPrincipal(fila,'txt_otroValor',chb);
        s_editarDisabledCheckPrincipal(fila,'txt_otroSalariominimo',chb);
    }
    
}

function s_editarDisabledCheckPrincipal(fila,control,chb)
{
    var a = document.getElementById(fila + '_' + control);
    if(chb.checked==1)
    {
        a.disabled="";
    }else
    {
        a.disabled="disabled";
    }
}

function s_editarDisabledTXT(s,control,chb,estado,num_filas,porc)
{
    var txt = document.getElementById(s + '_' + control);
    if(estado==0)
    {
        txt.disabled="disabled";
        s_habilitarTXT(s + '_chb_habilitar',document.getElementById(s+'_lbl_id_item').innerHTML,s,num_filas,porc,0)
    }else
    {
        if(chb.checked==1)
        {
            txt.disabled="disabled";
            s_habilitarTXT(s + '_chb_habilitar',document.getElementById(s+'_lbl_id_item').innerHTML,s,num_filas,porc,0)
        }else
        {
            txt.disabled="";
            s_habilitarTXT(s + '_chb_habilitar',document.getElementById(s+'_lbl_id_item').innerHTML,s,num_filas,porc,1)
        }
    }
}

var intento=0;
function startTimers()
{
   msgTimer=window.setInterval('mantener()',5000);
}
function mantener() {  
PageMethods.s_mantvs(document.getElementById(viewClientID).value,mntOK, mntErr);   
EjecutarClick(); 
}

function mntOK(result, userContext, methodName) { 
    intento=0;
}
function mntErr(error, userContext, methodName) {
    intento++;
    if(intento==1){
  
        if(error._message=='salir') document.location.href='../../forms/publica/logout.aspx?url=' + document.URL;
        window.clearInterval(msgTimer);
        msgTimer='';
        PageMethods.s_regError(error + '('+ methodName +','+ userContext +')',mntOK,mntErr);
    }else{
        if(intento>1)
        {  
            window.clearInterval(msgTimer);
            
        }
    }
}

function formatoFilaRemoverSeleccion(fila)
{
    var tabla=document.getElementById(fila)
    for(i=1;i<tabla.rows.length-1;i++)
    {
        if(i%2==1)
        {
            tabla.rows[i].className='gri_item'
            for(k=2;k<tabla.rows[i].childNodes.length;k++)tabla.rows[i].childNodes[k].className='gri_item';
        }
        else
        {
            tabla.rows[i].className='gri_itemAlterno';
            for(k=2;k<tabla.rows[i].childNodes.length;k++)tabla.rows[i].childNodes[k].className='gri_itemAlterno';
        }
    }
}

// Muestra o esconde los controles de correo segun sea el caso
function agregarCorreos(elemento,seleccion,estados)
{
var contenido=correoContenido(seleccion,estados);

if(contenido==true){
elemento.style.display=""; 
}
else
{
elemento.style.display="none";
}
}
// Determina si el estado actual esta en alguna regla
function correoContenido(seleccion,estados)
{
var seleccionado = seleccion[seleccion.selectedIndex].value;
for(i=0;i<estados.split(",").length;i++){
if(seleccionado==estados.split(",")[i]){
return true;
}
}
return false;
}
// Muestra o esconde las columnas de un datalist
function mostrarEsconderItems(seleccion, name)
{var elementos=document.getElementsByName(name);
if (seleccion==true){
for(i=0; i<elementos.length ; i++){
elementos[i].style.display=""
}
}
else{
for(i=0; i<elementos.length ; i++){
elementos[i].style.display="none";
}
}
}
// Modifica el texto de un control textbox
function cambiarTexto(elemento, texto){

if (texto !=''){
      var existeCorreo=false;
      for(var correo  in elemento.value.toString().split(',')){
   
        if(elemento.value.toString().split(',')[correo] !=''){
          if(elemento.value.toString().split(',')[correo] ==texto ){
                       existeCorreo=true;
             break ;
           }
        
        }
      }

        if(!existeCorreo ){
        if(elemento.value==""){
        elemento.value= texto;
        }
        else{
        elemento.value=elemento.value+","+texto;
        }}

  }
}
// Precarga un correo en un texbox segun sea el caso
function correosPrecargados(arreglodatos, cuadroTexto, seleccion) {
cuadroTexto.value = ''
var resultado = ''
var emailEst
for (i = 0; i < arreglodatos.split(";").length; i++) {
emailEst = arreglodatos.split(";")[i]
for (j = 0; j < emailEst.split(",").length; j++) {
if (j > 1 && seleccion[seleccion.selectedIndex].value == emailEst.split(",")[1])
resultado += emailEst.split(",")[j]+','
}
}
if (resultado.length > 0) resultado = resultado.substring(0, resultado.length - 1);
cuadroTexto.value = resultado
}
//Establecer index del control
function getIndex(input)
  {
    var index = -1, i = 0, found = false;
    while (i < input.form.length && index == -1)
      if (input.form[i] == input)index = i;
      else i++;
    return index;
  }
//Establecer el foco
function buscarFoco(formulario, campoInicial)
{
    var i;
    for (i = 0;  i<=formulario.length;i++)
    {
    if (((formulario[(getIndex(formulario[campoInicial]))+i].value) == "") && ((formulario[(getIndex(formulario[campoInicial]))+i].type)=="select-one" ||  ((formulario[(getIndex(formulario[campoInicial]))+i].type)=="text"||  ((formulario[(getIndex(formulario[campoInicial]))+i].type)=="textarea"))))
    {
        formulario[(getIndex(formulario[campoInicial]))+i].focus();
        i=formulario.length+1;
    }
    }
}
//Mostrar panel regendamiento
function mostrarPanelReagendamiento(actualProgramacion, nuevaProgramacion, panelReagendamiento)
{
if(actualProgramacion<nuevaProgramacion)
{
document.getElementById(panelReagendamiento).style.display='none';
}
else
{
document.getElementById(panelReagendamiento).style.display='';
}
}
//Mostrar control de Motivo de reagendamiento
function mostrarMotivoReagendamiento(fechaProgramada,nuevaFecha1,etiqueta,obligatorio)
{
var nuevaFecha=document.getElementById(nuevaFecha1).value;
var xdia = fechaProgramada.substring(0, 2);
var xmes = fechaProgramada.substring(3, 2);
var xanio = fechaProgramada.substring(6, 4);
var ydia = nuevaFecha.substring(0, 2);
var ymes = nuevaFecha.substring(3, 2);
var yanio = nuevaFecha.substring(6, 4);
if (xanio > yanio){
document.getElementById(etiqueta).style.display='none';
document.getElementById(obligatorio).value='0';
}else{
if (xanio == yanio){
if (xmes > ymes){
document.getElementById(etiqueta).style.display='none';
document.getElementById(obligatorio).value='0';
}
if (xmes == ymes){
if (xdia > ydia){
document.getElementById(etiqueta).style.display='none';
document.getElementById(obligatorio).value='0';
}else{
document.getElementById(etiqueta).style.display='';
document.getElementById(obligatorio).value='1';
}
}else{
document.getElementById(etiqueta).style.display='';
document.getElementById(obligatorio).value='1';
}
}else{
document.getElementById(etiqueta).style.display='';
document.getElementById(obligatorio).value='1';
}
}
if(xanio == yanio && xmes == ymes && xdia == ydia)
{
document.getElementById(etiqueta).style.display='none';
document.getElementById(obligatorio).value='0';
}
}
//Funcion cerrar popup rapido
function cerrarPop(divModal, tbl_popup, hdd_estado, pCerrado)
{
if (!pCerrado){
if (MM_findObj(divModal)!=null){
if (MM_findObj(tbl_popup)!=null){
MM_findObj(divModal).style.display="none";
MM_findObj(tbl_popup).style.display="none";
MM_findObj(hdd_estado).value='1';
PageMethods.s_cp(cpOK, cpErr);
return true;
}
}
}
}

function cpErr(error, userContext, methodName) {
    alert('problema cierre pop' + error);
}
function cpOK(result, userContext, methodName) { 
    return;
}


function obligatoriosTipoTercero(radioCliente, radioProveedor, radioFabricante, radioTransportador, radioProspecto, rfvNombreCorto, rfvDireccion, rfvCliente, rfvProveedor, rfvTransportador, rfvFabricante, rfvNIT, rfvZona, rfvEstado, rfvNaturaleza, rfvContacto, lblNombreCorto, lblNIT, lblZona, lblEstado, lblNaturaleza, lblDireccion, lblContacto, lblEsCliente, lblEsFabricante, lblEsProveedor, lblEsTransportador, revNit,trdocumento,rfvbuscadozona,rfvbucadoestado,rfvbuscadonaturaleza)
{
var rbl;
var arregloValores;
var habilitarCliente = valorRadioButton(radioCliente);
var habilitarProveedor = valorRadioButton(radioProveedor);
var habilitarTransportador = valorRadioButton(radioFabricante);
var habilitarFabricante = valorRadioButton(radioTransportador);
var habilitarProspecto = valorRadioButton(radioProspecto);
var arregloRFV = new Array(rfvNombreCorto,rfvDireccion,rfvCliente,rfvProveedor,rfvTransportador,rfvFabricante,rfvNIT,rfvZona,rfvEstado,rfvNaturaleza,revNit,rfvbuscadozona,rfvbucadoestado ,rfvbuscadonaturaleza   );
var arreglolbl = new Array(lblNombreCorto,lblNIT,lblZona,lblEstado,lblNaturaleza,lblDireccion,lblEsCliente,lblEsFabricante,lblEsProveedor,lblEsTransportador);
 if (habilitarProspecto==true){
   rbl=document.getElementById(radioCliente);
    arregloValores = rbl.getElementsByTagName('input');
   arregloValores[0].checked=false ;
   arregloValores[1].checked=true ;
   rbl=document.getElementById(radioFabricante);
    arregloValores = rbl.getElementsByTagName('input');
   arregloValores[0].checked=false ;
   arregloValores[1].checked=true ;
    rbl=document.getElementById(radioProveedor);
    arregloValores = rbl.getElementsByTagName('input');
   arregloValores[0].checked=false ;
   arregloValores[1].checked=true ;
    rbl=document.getElementById(radioTransportador);
    arregloValores = rbl.getElementsByTagName('input');
   arregloValores[0].checked=false ;
   arregloValores[1].checked=true ; 
}
 
 
if (habilitarCliente == true || habilitarProveedor == true || habilitarFabricante == true || habilitarTransportador == true){
    for (i=0;i<arregloRFV.length;i++){ 
        document.getElementById(arregloRFV[i]).enabled = true;  
    } 
    for (j=0;j<arreglolbl.length;j++){
        document.getElementById(arreglolbl[j]).className = 'lblobligatorio'
    }
    document.getElementById(lblContacto).className = 'lbl'
    document.getElementById(rfvContacto).enabled = false;
}
else{
if (habilitarProspecto==true){
    if(   document.getElementById(trdocumento )!=null){
    document.getElementById(trdocumento ).style.display='';}
   for (i=0;i<arregloRFV.length;i++){ 

       if (   document.getElementById(arregloRFV[i])!=null){
       document.getElementById(arregloRFV[i]).enabled = false;   }
        } 
    document.getElementById(rfvContacto).enabled = true;
    for (j=0;j<arreglolbl.length;j++){
        document.getElementById(arreglolbl[j]).className = 'lbl'}
    document.getElementById(lblContacto).className = 'lblobligatorio'
}else{
     if(   document.getElementById(trdocumento )!=null){ document.getElementById(trdocumento ).style.display='none';}
    for (i=0;i<arregloRFV.length;i++){ 
                 if (   document.getElementById(arregloRFV[i])!=null){
            document.getElementById(arregloRFV[i]).enabled = true;
            }
        } 
    document.getElementById(rfvContacto).enabled = false;
    for (j=0;j<arreglolbl.length;j++){
        document.getElementById(arreglolbl[j]).className = 'lblobligatorio'}
    document.getElementById(lblContacto).className = 'lbl'
  }
} 
}

function valorRadioButton(idRadioButton)
{
var valor = false;
var rbl=document.getElementById(idRadioButton);
var arregloValores = rbl.getElementsByTagName('input');
var valorPosicion = arregloValores[0];
if (valorPosicion.value == 1 && valorPosicion.checked){
valor = true;}
    else{
    valorPosicion = arregloValores[1];
        if(valorPosicion.checked){
            valor = false;}
        else{
            valor = false;}
   }
   return valor;
}

function s_estadoCerrada(str_estados,int_idCerrada,lbl_error)
{
    var mostrar=false;
    var drp_estados=MM_findObj(str_estados);
	var lbl_aviso=MM_findObj(lbl_error);
	var arrID= new Array();
	arrID = int_idCerrada.toString().split(',');
    for(i=0;i<arrID.length;i++)
	{
        if(arrID[i] == drp_estados.value)
	    {
	    mostrar=true;
	    }
	}
  	if(mostrar)
	{
	lbl_aviso.style.display='';
	}
	else
	{
	lbl_aviso.style.display='none';
	}	
}

function maxCaracteres(obj, elEvento, maxi,check) {
var dato=MM_findObj(check);
var label ='ctl00_cph_barraHerramientas_popupInterno_doc/pop_cambiarEstado.ascx_lbl_maxNotas';
var lbl_aviso=MM_findObj(label);
if(!dato.checked){
  
    var elem = obj;
    var evento = elEvento || window.event;
    var cod = evento.charCode || evento.keyCode;


    
    if ( cod == 8 || cod == 127 || cod == 26 || cod == 46 ) {
         lbl_aviso.style.display='none';
         return true;
    }
    if (elem.value.length < maxi) {
        elem.value= elem.value.substring(0,maxi)
        
        lbl_aviso.style.display='none';
        return true;
    }
    
    elem.value= elem.value.substring(0,maxi)
    lbl_aviso.style.display='';
    return false;
    elem.value= elem.value.substring(0,maxi)

}else{
 lbl_aviso.style.display='none';
}
    
}

function s_validarfechaHora(fecha1, hora1,fecha2,hora2,fecha3,hora3,txtfecha,txthora)
{
 var t_bol_valido=false;
 var dia= fecha1.substring(0,2);
 var mes =fecha1.substring(2,4);
 var año=fecha1.substring(4,8);
 var hor=hora1.substring(0,2);
 var min=hora1.substring(2,4);
 txtfecha=document.getElementById(txtfecha);
 txthora=document.getElementById(txthora);
 var dia2= txtfecha.value.substring(0,2);
 var mes2 = txtfecha.value.substring(3,5);
 var año2= txtfecha.value.substring(6,10);
 var hor2=txthora.value.substring(0,2);
 var min2=txthora.value.substring(3,5);
 if( fecha2 !="" && hora2 !="")
 {
 var dia3= fecha2.substring(0,2);
 var mes3 =fecha2.substring(2,4);
 var año3=fecha2.substring(4,8);
 var hor3=hora2.substring(0,2);
 var min3=hora2.substring(2,4);
  var date3 = new Date(año3,mes3,dia3,hor3 ,min3 ,0)
 }

 
 var dia4=fecha3.substring(0,2);
 var mes4 =fecha3.substring(2,4);
 var año4=fecha3.substring(4,8);
 var hor4=hora3.substring(0,2);
 var min4=hora3.substring(2,4);
 var date1 = new Date(año,mes,dia,hor ,min ,0)
 var date2 = new Date(año2,mes2,dia2,hor2 ,min2 ,0)
 var date4 = new Date(año4,mes4,dia4,hor4 ,min4 ,0)
 
              if(fecha2 =="")//fecha fin de evento no registrada
              {
                    if( date1<date2  && date2 >=date4 )
                    {
                     t_bol_valido =true ;
                    }
                    else
                    {
                    t_bol_valido =false ;
                    } 
              }
              else
              {
                    if( date1<date2 && date3 >=date2 && date2 >=date4 )
                    {
                      t_bol_valido =true ;
                    }
                    else
                    {  t_bol_valido =false ;
                    
                    } 
              }
              
              if(!t_bol_valido)
              {
                 txtfecha.value="";
                 txthora.value="";
              }
                     
}


function s_validarfechaHoraHistorico(fecha1, hora1,fecha2,hora2,txtfecha,txthora)
{
 var t_bol_valido=false;
 var dia= fecha1.substring(0,2);
 var mes =fecha1.substring(2,4);
 var año=fecha1.substring(4,8);
 var hor=hora1.substring(0,2);
 var min=hora1.substring(2,4);
 txtfecha=document.getElementById(txtfecha);
 txthora=document.getElementById(txthora);
 var dia2= txtfecha.value.substring(0,2);
 var mes2 = txtfecha.value.substring(3,5);
 var año2= txtfecha.value.substring(6,10);
 var hor2=txthora.value.substring(0,2);
 var min2=txthora.value.substring(3,5);
 if( fecha2 !="" && hora2 !="")
 {
 var dia3= fecha2.substring(0,2);
 var mes3 =fecha2.substring(2,4);
 var año3=fecha2.substring(4,8);
 var hor3=hora2.substring(0,2);
 var min3=hora2.substring(2,4);
 var date3 = new Date(año3,mes3,dia3,hor3 ,min3 ,0)
 }
 var date1 = new Date(año,mes,dia,hor ,min ,0)
 var date2 = new Date(año2,mes2,dia2,hor2 ,min2 ,0)
 
              if(fecha2 =="")//fecha fin de evento no registrada
              {
                    if( date1<date2)
                    {
                     t_bol_valido =true ;
                    }
                    else
                    {
                    t_bol_valido =false ;
                    } 
              }
              else
              {
                    if( date1<date2 && date3 >=date2)
                    {
                      t_bol_valido =true ;
                    }
                    else
                    {  t_bol_valido =false ;
                    
                    } 
              }
              
              if(!t_bol_valido)
              {
                 txtfecha.value="";
                 txthora.value="";
              }
                     
}
function s_registrar()
{
     Sys.Browser.WebKit = {}; //Safari 3 is considered WebKit
	if( navigator.userAgent.indexOf( 'WebKit/' ) > -1 )
	{
	  Sys.Browser.agent = Sys.Browser.WebKit;
	  Sys.Browser.version = parseFloat(navigator.userAgent.match(/WebKit\/(\d+(\.\d+)?)/)[1]);
	  Sys.Browser.name = 'WebKit';
		}
}



function iniciarVisitas()
{
  var visTimer=window.setInterval('correoVisitas()',600000);
}
function correoVisitas() {
    PageMethods.s_enviaCorreoVisitas(mntOK, mntErr);
}
function obtenerCoordenadas(hhdy,hhdx){
var hdy=document.getElementById(hhdy);
var hdx=document.getElementById(hhdx);
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          hdy.value=position.coords.latitude;
          hdx.value=position.coords.longitude;
         
        });

 }

}

function s_mostrarcontrol(td){
td= document .getElementById (td);
if(td.style.display=='none'){
td.style.display='';
}else{
td.style.display='none';
}

}

function s_aplicarAtodasFechas(fecha,lista){
fecha=document.getElementById(fecha);
var item
for( i=0;i< lista.toString().split(',').length;i++ ){
  if(lista.toString().split(',')[i]!=''){
    item =document .getElementById ( lista.toString().split(',')[i]);

    if (item !=null){
        item.value=fecha.value;
    }
    
    }
}
}

function recalcularFechaLimite(fecha, fechalimite, fechaCopia){
    if (document.getElementById(fechalimite).value != "") {
        var fechaNueva = document.getElementById(fecha).value
        var fechaAnterior = document.getElementById(fechaCopia).value
        var diferenciaFechas = calcularDiffDias(fechaNueva, fechaAnterior);
        var fechaLimiteDiv = document.getElementById(fechalimite).value.split("/");
        var fechaLimiteN = new Date(fechaLimiteDiv[1] + "/" + fechaLimiteDiv[0] + "/" + fechaLimiteDiv[2]); 
        fechaLimiteN.setDate(fechaLimiteN.getDate() + diferenciaFechas);
        document.getElementById(fechaCopia).value = document.getElementById(fecha).value
        var mes = fechaLimiteN.getMonth()+1 + '';
        if (mes.length === 1){
            mes = "0" + mes;
        }
        document.getElementById(fechalimite).value = fechaLimiteN.getDate() + "/" + mes + "/" + fechaLimiteN.getFullYear();
    }
    
}

function calcularDiffDias(f1, f2){
    var aFecha1 = f1.split('/');
    var aFecha2 = f2.split('/');
    var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
    var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
    var dif = fFecha1 - fFecha2;
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    return dias;
 }

function deshabilitarControl(elemento){
elemento.disable=true ;
console.log(elemento.disable);
}
function obtenerdirerencias (txt1,txt2,resul){
txt1=MM_findObj(txt1);
txt2=MM_findObj(txt2);
resul=MM_findObj(resul);
var num2=txt2 .value.replace(',','.');
var num1=txt1 .value.replace(',','.')
if(num2==''){
num2 =0;
}
if(num1==''){
num1 =0;
}
resul.innerHTML =(parseFloat(num2).toFixed( 2 )-parseFloat(num1 ).toFixed( 2 ) ).toFixed( 2 ) ;

}