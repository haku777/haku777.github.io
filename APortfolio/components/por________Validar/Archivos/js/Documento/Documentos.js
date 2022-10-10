 // Archivo JScript
var estrategia;
var txt_fecha;
var txt_hora;
var codigoEstados;
function cargarcodigoestados(codigos){

codigoEstados=codigos;
}
function establecerPrefijo(str_subtipoDocumento,str_aux,str_prefijo)
{
    var drp_subtipo=MM_findObj(str_subtipoDocumento);
    var drp_aux=MM_findObj(str_aux);
	var txt_prefijo=MM_findObj(str_prefijo);
	if(txt_prefijo==null) return false;
	var id_subtipo
	if (drp_subtipo.selectedIndex==-1) return false;
	id_subtipo = drp_subtipo[drp_subtipo.selectedIndex].value
	for (i=0; i<drp_aux.length ; i++){
		if(drp_aux[i].value==id_subtipo){
		    txt_prefijo.value=drp_aux[i].text;
		}
	}
}

function establecerFechaLimite(str_subtipoDocumento,str_auxFecha,str_auxHora,str_fecha,str_hora,str_hdd)
{
    var drp_subtipo=MM_findObj(str_subtipoDocumento);
    var drp_fecha=MM_findObj(str_auxFecha);
    var drp_hora=MM_findObj(str_auxHora);
	var txt_fecha=MM_findObj(str_fecha);
	var txt_hora=MM_findObj(str_hora);
	var id_subtipo
	if (drp_subtipo.selectedIndex==-1) return false;
	id_subtipo = drp_subtipo[drp_subtipo.selectedIndex].value
	
	for (i=0; i<drp_fecha.length ; i++){
		if(drp_fecha[i].value==id_subtipo){
		    txt_fecha.value=drp_fecha[i].text;
		    txt_hora.value=drp_hora[i].text;
		}
	}
}


function establecerFechaLimiteFechaActual(str_subtipoDocumento,str_prioridad,str_fechaActual,str_horaActual,str_fecha,str_hora,int_equipo)
{
    var drp_subtipo=MM_findObj(str_subtipoDocumento);
    var drp_prioridad=MM_findObj(str_prioridad);
    var txt_fechaActual=MM_findObj(str_fechaActual);
	var txt_horaActual=MM_findObj(str_horaActual);
   	 txt_fecha=MM_findObj(str_fecha);
	 txt_hora=MM_findObj(str_hora);
	var id_subtipo;
	var int_horas=0;
	 str_fechaActual= txt_fechaActual.value;
	 str_horaActual= txt_horaActual.value;
	var fechaActual= new Date();
	var fechainiPro= new Date();
	var fechafinPro= new Date();
    var mesActual;
    var diaActual;
    var horaActual;
    var minutoActual;
	var estra='';

	if (drp_subtipo.selectedIndex==-1) return false;
	id_subtipo = drp_subtipo[drp_subtipo.selectedIndex].value;
	PageMethods.s_calcularfecha(str_fechaActual+' '+ str_horaActual+'-'+id_subtipo +'-'+int_equipo  ,s_onsuccedFecha,s_onerrorFecha);
	
}


function actualizarGrilla(fnc)
{
    window.setTimeout(fnc, 1);
}


//Muestra o no una seccion, dependiendo del item seleccionado en el dropdown. 
//texto es el texto con el que quiere que muestre la seccion
function mostrarSeccion(x,y,texto)
{
var igual=false;
    var o = document.getElementById(x);
    if (o.type == "select-one")
    var t = o.options[o.selectedIndex].value;
  
    {
        var p = document.getElementById(y);
        var tex= texto.toLowerCase().substring(0,2);   
         for(var re in codigoEstados.toString().split(',')){
            if( codigoEstados[re].toString().split('-')[0].toString()== t && isNaN(codigoEstados[re].toString().split('-')[1].toString())   ){//1 texto
              igual = codigoEstados[re].toString().split('-')[1].toString().toLowerCase() == texto.toLowerCase();
              break;
            }
        }
        if (igual)
        {
            p.style.display='';
        }else
        {
            p.style.display='none';
        }
             //re.toString().split('-')[0].String()== t.value.toString()  &&
      
//        if (""+t.text == ""+texto || t.text.toLowerCase().substring(0,2)==tex )
//        {
//            p.style.display=''
//        }else
//        {
//            p.style.display='none'
//        }
    }
}

function mostrarTRM(str_estados,str_drpDesc,tr)
{
    if(document.getElementById(tr))
    {
        var drp_estados=MM_findObj(str_estados);
        var str_drpDesc=MM_findObj(str_drpDesc);
	    var tr_trm=MM_findObj(tr);
	    var id_estado
    	
	    if (drp_estados.selectedIndex==-1) return false;
	    id_estado = drp_estados[drp_estados.selectedIndex].value
    	var estado = drp_estados[drp_estados.selectedIndex].text
    	for (i=0; i<str_drpDesc.length ; i++){
		    if(str_drpDesc[i].value==id_estado){
    			if(str_drpDesc[i].text=='False')
    			{
    			    tr_trm.style.display='none'
    			}else 
    			{
    			    if (estado=="Cerrada")
    			    tr_trm.style.display=''
    			}
    			return;
		    }else 
		    {
    		     
		    }
	    }
        
        
    }
}

function s_habilitarTXTItem(t_chb,id_item,fila,num_filas,estado)
{
    err=false;
    var chb = document.getElementById(t_chb);
    if (chb==null)return;
    if(estado==0)
    {
       chb.checked=1;
       //chb.disabled='disabled';
    }
    if(estado==1)
    {
       chb.checked=0;
       //chb.disabled='';
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
        
        var id_padre = document.getElementById(s + '_lbl_id_itemDoc_sup')
        if(id_padre==null)
        {
            err=true;
        }else
        {
            if (id_padre.innerHTML==id_item)
            {
                s_editarDisabledTXTItem(s,chb,estado,num_filas);
            }
        }
    }
    if (estado==-1)
    {
    s_editarCheckPadre(fila,num_filas)
    }
    if (err && mostrarerr){
        alert('Se presento un error durante la seleccion, por favor recargue la página.');
        mostrarerr=false;
        }
}
var err=false;
var mostrarerr=true;
function s_editarCheckPadre(fila,num_filas)
{
    var padre = document.getElementById(fila + '_lbl_id_itemDoc_sup');
    var id_padre = padre.innerHTML;
    if (id_padre==0)return false;
    var numChecked = 0
    var numHermanos = 0
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
        padre = document.getElementById(s + '_lbl_id_itemDoc_sup')
        if(id_padre==null)
        {
            err=true;
        }else
        {
            if(padre.innerHTML==id_padre)
            {
                numHermanos +=1;
                var c = document.getElementById(s + '_chb_habilitar')
                if (c.checked)
                {
                    numChecked +=1 ;
                }
            }
        }
    }
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
        padre = document.getElementById(s + '_lbl_id')
        if (id_padre==padre.innerHTML)
        {
            var c = document.getElementById(s + '_chb_habilitar')
            if (numChecked==numHermanos)
            {
                c.checked=true;
            }
            else
            {
                c.checked=false;
            }
            s_editarCheckPadre(s,num_filas)
            
        }
    }
}

function s_editarDisabledTXTItem(s,chb,estado,num_filas)
{
    if(estado==0)
    {
        s_habilitarTXTItem(s + '_chb_habilitar',document.getElementById(s+'_lbl_id').innerHTML,s,num_filas,0)
    }else
    {
        if(chb.checked==1)
        {
            s_habilitarTXTItem(s + '_chb_habilitar',document.getElementById(s+'_lbl_id').innerHTML,s,num_filas,0)
        }else
        {
            s_habilitarTXTItem(s + '_chb_habilitar',document.getElementById(s+'_lbl_id').innerHTML,s,num_filas,1)
        }
    }
}
function s_eliminarItems(grd,num_filas,str,str_)
{
    var mostrarAlert = true
    var i = 0;
    var s = new String();
    for(i=2;i<=num_filas+1;i++)
    {
        s=grd + '_ctl'
        if(i<10)
        {
            s = s + '0' + i;
        }else
        {
            s = s + i;
        }
        var chb=document.getElementById(s + '_chb_habilitar')
        if (chb.checked)
            mostrarAlert=false;
    }

    if (mostrarAlert)
    {
        alert(str_);
        return false;    
    }else{
        if(!confirm(str))
        {
            return false;    
        }
        else
        {
            return true 
        }
    }
}
function habilitarTodos(pchb,grd,num_filas)
{
    var i = 0;
    var s = new String();
    for(i=2;i<=num_filas+1;i++)
    {
        s=grd + '_ctl'
        if(i<10)
        {
            s = s + '0' + i;
        }else
        {
            s = s + i;
        }
        try {
            var chb = document.getElementById(s + '_chb_habilitar')
            chb.checked = pchb.checked;
        } catch (err) {
            // console.log(err)
        }
        
    }
}
function validarExistencia(existencia,lbl_cantidad){

 var cantidad=MM_findObj(lbl_cantidad);
 if ((Number(existencia)-Number(cantidad.value.replace(",",".")))<0){
 cantidad.className='txt_numeroGrilla_rojo';
  }else{
  cantidad.className='txt_numeroGrilla';}
 }
function ocultarBocadillo(){
ocultar('tbl_bocadillo');}

//permite hacer visible los campos de fecha y usuario en RECORDARCOMENTARIOS
function verRecordar(radio,div)
{
    radio=document.getElementById(radio);
    div =document.getElementById(div);
     var inputRefArray = radio.getElementsByTagName('input');
          for (i = 0; i < inputRefArray.length; i++){
           var inputRef = inputRefArray[i];
           if (inputRef.type == 'radio' && inputRef.value == 1 && inputRef.checked)
           {
              div.style.display="";
           }
           else
           { div.style.display="none";
           }
         
        }  
}

function obtenerFecha(fecha,item,tr)
{
 tr=document.getElementById(tr);
 fecha =document.getElementById(fecha);
 if(fecha.value == item)
 {
  tr.style.display= 'none';
 }
 else
 {
 tr.style.display='';
 }

}
function habilitarFecha(checkvalor,tr,txt,actual,min)
{
   tr=document.getElementById(tr);
  checkvalor=document.getElementById(checkvalor);
  txt=document.getElementById(txt);
        var inputRefArray = checkvalor.getElementsByTagName('input');
          for (i = 0; i < inputRefArray.length; i++){
           var inputRef = inputRefArray[i];
           if (inputRef.type == 'radio' && inputRef.value == 1 && inputRef.checked)
           {
              tr.style.display='';
              txt.value= actual;
           }
            else
            {
                  if(inputRef.checked)
                    {
                     tr.style.display='none';
                     txt.value= min;
                    }
            }
        }  
}

function s_seleccionarcomentario(txt)
{
  txt=document.getElementById(txt);
  txt.style.width='200px';
    txt.style.height='100px';
   
}

function verVLRrecordar(radio,txt)
{ 

     txt=document.getElementById(txt);
     radio=document.getElementById(radio);
      var inputRefArray = radio.getElementsByTagName('input');
          for (i = 0; i < inputRefArray.length; i++){
           var inputRef = inputRefArray[i];
           if (inputRef.type == 'radio'&& inputRef.checked)
           {
           txt.value = inputRef.value;
            return txt.inputRef.value
           }
                  
    }  
}

function limpiar (grd, columna){
    var tabla = document.getElementById(grd);
    var filas = tabla.rows.length;
    for (i = 0; i < tabla.rows.length; i += 1){
        if (tabla.rows[i].children[columna].firstElementChild.type == "text")
        {
             tabla.rows[i].children[columna].firstElementChild.value=0   
        }
    }

}


function actualizarBodegas(drp_bodegas, grd_bodegas, indice) {
    var drp = document.getElementById(drp_bodegas);
    var tabla = document.getElementById(grd_bodegas);
    var bodega = drp.value;
    var filas = tabla.rows.length;
    for (i = 1; i < filas; i++) {
        if (tabla.rows[i].children[indice].firstElementChild.type == "select") {
        }
        else {
            tabla.rows[i].children[indice].firstElementChild.value = bodega;
        }
    }
}


function CopiarFechas(chk, txt_fecha, items) {
    chk = document.getElementById(chk);
    txt_fecha = document.getElementById(txt_fecha);
    var txt;
    if (chk.checked == 1) {
        for (var i = 0; i < items.length; i++) {
            txt = document.getElementById(items[i]);
            if (txt != null) {
                txt.value = txt_fecha.value;
            }

        }
    } else {
        for (var i = 0; i < items.length; i++) {
            txt = document.getElementById(items[i]);
            if (txt != null) {
                txt.value = '';
            }
        }

    }
}

function s_onsuccedFecha(p_str_nfecha){
    if(p_str_nfecha !=''){
     txt_fecha.value=p_str_nfecha.split('-')[0];
     txt_hora.value=p_str_nfecha.split('-')[1];
    }
}
function s_onerrorFecha(){
    
}

function s_actualizarDocumento(drp,idSubtipo,txt_solicitante,txt_cargo,txt_email,valorSolicitante,valorCargo,valorEmail){
 drp= document.getElementById(drp);
    var txt_sol = document.getElementById(txt_solicitante);
    var txt_cargo = document.getElementById(txt_cargo);
   var agregar=false;
    var txt_ema = document.getElementById(txt_email);  
     for(item in idSubtipo .toString().split(',')){
    // alert ( idSubtipo .toString().split(',')[item]+'-'+idSubtipo);
      if(drp.value ==  idSubtipo .toString().split(',')[item]){
        agregar=true;
        break ;
      }
     }
   
    if(agregar){
    txt_cargo.value = valorCargo;
    txt_sol.value = valorSolicitante;
    txt_ema.value = valorEmail;   
    }else{
    txt_cargo.value = '';
    txt_sol.value = '';
    txt_ema.value = '';
    } 
}

function s_actualizarDocumentoOC(drp,idSubtipo,txt_solicitante,valorSolicitante){
    drp= document.getElementById(drp);
    
   var txt_sol = document.getElementById(txt_solicitante);
   var agregar=false;
   
     for(item in idSubtipo .toString().split(',')){
    // alert ( idSubtipo .toString().split(',')[item]+'-'+idSubtipo);
      if(drp.value ==  idSubtipo .toString().split(',')[item]){
        agregar=true;
        break ;
      }
     }
    
    if(agregar){
      txt_sol.value = valorSolicitante;
      }else{
        txt_sol.value = '';
    }
 }   
  function s_seleccionarReporte(p_drp,p_chkl,valores){
    
    
    if(valores!=''){
            var t_drp= document.getElementById(p_drp);
           var t_int_estado=t_drp.options[t_drp.selectedIndex].value;         
           var t_chkl= document.getElementById(p_chkl);
         
           var t_check = t_chkl.getElementsByTagName('input');
           var t_values = t_chkl.getElementsByTagName('span');
           var reportes='';
           
            for (var i=0;i<valores .toString().split("|").length;i++)
           {
                  if(valores .toString().split("|")[i].toString().split("=")[0]== t_int_estado ){
                        reportes=valores .toString().split("|")[i].toString().split("=")[1];
                        break;
                       }
              
           }
           for (var i=0;i<t_check.length;i++)
           {
                t_check[i].checked=false;            
                 for (var j=0;j<reportes .toString().split("-").length;j++)
                     {
                       if(t_values[i].attributes["idreporte"].value==reportes.toString().split("-")[j])
                       {
                         t_check[i].checked=true;
                       }
                 
                 }
            }
        }
              
  }
  
// Bandera global
var baderaGlobal=0;

// Reinicial la bandera Global al terminar la petición
function restaurar_enter(id_btn){
var c;
var y = document.getElementById(id_btn);
c = 0;
//if (y.id == "ctl00_cph_barraHerramientas_popupInterno_doc/pop_aprobarCotizacion.ascx_bti_aceptar" ) {
//document.getElementById(id_btn).disabled=false;
//    }
//document.getElementById(id_btn).disabled=false;
banderaGlobal = c;
 }

// Función para poner alerta
function eval_enter(e,id) {
		var tecla=new Number();
		//var w = document.getElementById(text);
		if(window.event) {
			tecla = e.keyCode;
		} else if(e.which) {
			tecla = e.which;
		} else {
			return true;
		}
		if (tecla==13 || tecla==32) {
            if (var_poner_bandera == 0){
                var_poner_bandera++;
                return true;
                }  else {
                alert('Su petición está siendo procesada, por favor aguarde un instante.');
                return false;
             }
		}
}

/* Se crea las funciones valueV_changed y valueH_changed las cuales reciben 2 parametros 
    t_str_valor: Valor ingresado en textbox por el usuario
    t_int_limite: Valor fijado en web.config como limite para cargar registros
    Si t_str_valor > t_int_limite se alerta a el usuario y se asigna en el textbox el numero limite
*/
function valueV_changed(t_str_valor, t_int_limite) {
    t_str_valor = Number(t_str_valor);
    t_int_limite = Number(t_int_limite);
    if (t_str_valor > t_int_limite) {
        $(".txt_msgVH").text("El numero maximo de registros verticales permitidos es de " + t_int_limite);
        $(".txt_msgVH").css("display", "block");
        $(".txt_vertical").val(t_int_limite);
    } else {
        $(".txt_vertical").val(t_str_valor);   
    }
}
function valueH_changed(t_str_valor, t_int_limite) {
    t_str_valor = Number(t_str_valor);
    t_int_limite = Number(t_int_limite);
    if (t_str_valor > t_int_limite) {
        $(".txt_msgVH").text("El numero maximo de registros horizontales permitidos es de " + t_int_limite);
        $(".txt_msgVH").css("display", "block");
        $(".txt_horizontal").val(t_int_limite);
    } else {
        $(".txt_horizontal").val(t_str_valor);   
    }
}