var tiempo;  
var cuenta;
var alerta;
var titulo=window.document.title;
var comentario='';
var idtitulo;
var mensaje;
var hdd;
var pagina;

window.onbeforeunload =function cerrar()
{

  PageMethods.s_desactivarPagina(pagina,mntOK,error);
  PageMethods.cpComentario(pagina,mntOK,error);
}

function teclaF5(e)
{	
    try
    {
     var num = e?e.keyCode:event.keyCode;
      if(num==116)
		{
		cerrar();
		}
    }
    catch(err)
    {
       
    }
      
}
 document.onkeydown = teclaF5;
if(document.all)document.captureEvents(Event.KEYDOWN);	

function scrolltexto(texto,mostrar) {
    if(mostrar)
    {

             clearInterval(tiempo);
           if(window.document.title != texto )
           {    
             if( window.document.title!=titulo)
                    {  
                      window.document.title=titulo; 
                    }
                    else 
                    { 
                     window.document.title=texto;
                    }
           }
           else {
                   if( window.document.title == titulo)
                       {  
                       
                        window.document.title=texto;
                       }
                       else 
                       { 
                         window.document.title=titulo; 
                       }
           
           }       
           tiempo=setTimeout("scrolltexto('"+ texto  +"',"+ mostrar+")", 1000);
    }
   else
    {
      clearInterval(tiempo);
      tiempo=setTimeout("scrolltexto('"+ texto +"',"+ mostrar+")",1000);
      window.document.title =titulo ;
    }
  }
  function onSucceed(result) {
    if(isNaN(result))
   {   
     comentario='';
   }
  else{

   comentario=result;
  }
 }
 function cerrarComentario() {
  PageMethods.cpComentario(pagina,mntOK,error);
      
  }
   function error()
   { }

   function EjecutarClick() {
       //fOmis()
       fLk()
   }

   function fLk() {
       var popUp = document.getElementById(idtitulo);
       if (document.getElementById(hdd)==null) return;
        var popAbierto = (document.getElementById(hdd).value == '1');
        PageMethods.s_calcularID(onSucceed,mntErr); //calcula variable comentario
        //alert (comentario)
        if ((popUp!=null)&&
            (comentario !='' && comentario  != null)&&
            (!popAbierto) &&
            (document.URL.indexOf('inicio') != -1))
        {
//            clickElement(idBoton);//abrir el popup automaticamente
        }
        if ((comentario != '' && comentario != null))
        {
            //s_alertAnimado(idBoton,true);
            scrolltexto(mensaje,true);
        }
        else
        {
            //s_alertAnimado(idBoton,false);
            scrolltexto('',false)
        }
        
    }
   
   
function fOmis() 
  {

  var control=document.getElementById(idtitulo);
  PageMethods.s_calcularID(onSucceed,mntErr);
  var controlHDD = document.getElementById(hdd);
  if(control==null)
  {

          //      if (document.URL.indexOf('inicio') != -1)
          if (0 == 1)
            {  
//                 if(comentario !='' && comentario  != null)
//                    {
//                     clickElement(idBoton);
//                    }
                
            }
            else {
                          if(comentario !='' && comentario  != null)
                           {
                           clearInterval(tiempo);
                           //s_alertAnimado(idBoton,true);
                           tiempo=setTimeout("scrolltexto('"+ mensaje  +"',true)",1000);
                           }
                          else
                            {
                              clearInterval(tiempo);
                             // s_alertAnimado(idBoton,false);
                              tiempo=setTimeout("scrolltexto('',false)",1000);
                            }
            }
  }
  else
  {
                    //      if (document.URL.indexOf('inicio') != -1)
                    if (0 == 1)
                    {
                               if ( control.innerHTML.indexOf('Recordatorios')==-1 )
                                {  
                                     if(comentario !='' && comentario  != null)
                                        {
//                                           clickElement(idBoton);
                                        }
                                }
                                else
                                {
                                    if(controlHDD.value==1)
                                    {
                                       if(comentario !='' && comentario  != null)
                                         {
//                                            clickElement(idBoton);
                                         }
                                    }
                                }
                    }
                    else { //muestra mensaje en otras paginas
                                       if(comentario !='' && comentario  != null)
                                        {
                                          if (controlHDD.value==0)
                                          {    clearInterval(tiempo);
                                               //s_alertAnimado(idBoton,false);
                                              tiempo=setTimeout("scrolltexto('',false)",1000);
                                          }
                                          else
                                          {
                                             clearInterval(tiempo);
                                             //s_alertAnimado(idBoton,true);
                                             tiempo=setTimeout("scrolltexto('"+ mensaje  +"',true)",1000);
                                          }                                                                               
                                        }
                                        else
                                        {
                                              clearInterval(tiempo);
                                              //s_alertAnimado(idBoton,false);
                                              tiempo=setTimeout("scrolltexto('',false)",1000);
                                        }
                          
                    }
            
  
        }

  }
  function clickElement(elementid){
  document.getElementById(elementid).click();
  }
//  function s_alertAnimado(img, aler) {
//      var boton = document.getElementById(img);
//    if (boton)
//    if(aler)
//     {
//                clearInterval(alerta );
//             if(boton.src.indexOf('images/iconos/campanasRecordatorio.png') !=-1 )
//             {
//               boton.src = boton.src.replace('images/iconos/campanasRecordatorio.png','images/iconos/campanaAlert.png');
//             }
//             else
//             {
//               boton.src = boton.src.replace('images/iconos/campanaAlert.png','images/iconos/campanasRecordatorio.png');
//             }
//             alerta=setTimeout("s_alertAnimado('"+ img + "',true)",1000)
//     }
//     else { 
//           //detener animación
//              clearInterval(alerta );
////               if( boton.src.indexOf('images/iconos/campanaAlert.png') !=-1 )
////             {
////                boton.src = boton.src.replace('images/iconos/campanaAlert.png','images/iconos/campanasRecordatorio.png');
////             }
////             else
////             {
//              boton.src = boton.src.replace('images/iconos/campanaAlert.png', 'images/iconos/campanasRecordatorio.png');             
////             }
//             // alerta=setTimeout("s_alertAnimado('"+ img + "',false)",1000)   
//     }
//    
//        
//}

  function s_mostrarBocadilloRecordatorio(event, t,anchoControl)
{   
    var x,y;
    var o;
    var imagen=MM_findObj('img_col');
     var td=MM_findObj('td_col');
    var tbl= MM_findObj('tbl_bocadillo');
    if (leerCookie('samm_disposicionPantalla')=='0')
    {
    if (g_browser.isIE) 
          {
            o=event.srcElement;
            x = getPosicionAbsolutaElemento(o).left + document.documentElement.scrollLeft;
              + document.body.scrollLeft;
            y = getPosicionAbsolutaElemento(o).top + o.clientHeight + document.documentElement.scrollTop;
              + document.body.scrollTop;
          }
    if (g_browser.isNS) 
          {
            o = event.target;
            x = getPosicionAbsolutaElemento(o).left;
            y = getPosicionAbsolutaElemento(o).top + o.offsetHeight;
          }    
    }
    else
    {
    if (g_browser.isIE) 
          {
            o = event.srcElement;
            x = getPosicionAbsolutaElemento(o).left + o.clientWidth; 
            y = getPosicionAbsolutaElemento(o).top; 
          }
    if (g_browser.isNS)
          {
            o = event.target;
            x = getPosicionAbsolutaElemento(o).left+ o.offsetWidth;
            y = getPosicionAbsolutaElemento(o).top ;
          }
    }
    tbl.style.position = 'absolute';
    tbl.style.top=y + 'px';
    tbl.style.left=x + 'px';
    tbl.style.display = '';
    MM_findObj('td_textoBocadillo').innerHTML= t;   
    
    if(imagen.src.indexOf('c1_2')==-1)
    {
     imagen.src= imagen.src.replace('c1','c1_2');
    }
     imagen.width='18'; 
     imagen.height='15'; 
     td.align='right';
     td.vAlign='bottom';
     tbl.style.left= x -(Number(anchoControl) + Number(tbl.style.width.split("p")[0]))+ 'px';
       
}