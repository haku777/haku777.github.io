// Archivo JScript

function ocultarInfoGeneral(e){


  if (g_browser.isIE) 
    {
    var cab=MM_findObj('div_cabecera')
    xc = getPosicionAbsolutaElemento(cab).left  
    yc= getPosicionAbsolutaElemento(cab).top  + cab.clientHeight
    var o=MM_findObj('div_infoGeneral')
    xi = getPosicionAbsolutaElemento(o).left  
    yi= getPosicionAbsolutaElemento(o).top  
     if  (!(event.x > xi && event.y > yi && event.y < (yi + o.clientWidth) && ( event.x < (xi + o.clientHeight) ||  event.x > (xc + cab.clientHeight)) ))
            {
            MM_findObj('div_infoGeneral').style.display='none';
            var im=MM_findObj('img_mostrarInfoGeneralCabecera')
            im.style.display = ''
            var io=MM_findObj('img_ocultarInfoGeneralCabecera')
            io.style.display = 'none'
            }
    
    }
    else{
        MM_findObj('div_infoGeneral').style.display='none';
        var im=MM_findObj('img_mostrarInfoGeneralCabecera')
        im.style.display = ''
        var io=MM_findObj('img_ocultarInfoGeneralCabecera')
        io.style.display = 'none'
        }
}
function mostrarInfoGeneral(e){
    var o=MM_findObj('div_cabecera')
    var tbl= MM_findObj('div_infoGeneral')
    if (g_browser.isIE) 
          {
          //o=window.event.srcElement
            x = getPosicionAbsolutaElemento(o).left  //+ document.documentElement.scrollLeft
              //+ document.body.scrollLeft;
            y = getPosicionAbsolutaElemento(o).top + o.clientHeight //+ document.documentElement.scrollTop
              //+ document.body.scrollTop;
          }
    if (g_browser.isNS)
          {
            x = getPosicionAbsolutaElemento(o).left
            y = getPosicionAbsolutaElemento(o).top + o.offsetHeight
          }
    
    if (tbl.style.display == 'none')
    {
        tbl.style.position = 'absolute';
        tbl.style.top=y + 'px';
        tbl.style.left=x + 'px';
        tbl.style.display = ''
        var im=MM_findObj('img_mostrarInfoGeneralCabecera')
        im.style.display = 'none'
        var io=MM_findObj('img_ocultarInfoGeneralCabecera')
        io.style.display = ''
    }else{
        ocultarInfoGeneral(e)
    }
}