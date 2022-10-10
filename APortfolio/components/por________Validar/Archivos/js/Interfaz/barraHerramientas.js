// Archivo JScript

function mostrarMasEstados(e){
    var o=MM_findObj(e)
    var tbl= MM_findObj('divMasEstados')
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
    
    tbl.style.position = 'absolute';
    tbl.style.top=y + 'px';
    tbl.style.left=x + 'px';
    tbl.style.display = ''
}
function ocultarMasEstados()
{
    MM_findObj('divMasEstados').style.display='none';
}

