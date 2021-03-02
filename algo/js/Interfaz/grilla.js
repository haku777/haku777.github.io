// Archivo JScript

function leerCookie(n) {
   a = document.cookie.substring(document.cookie.indexOf(n + '=') + n.length + 1,document.cookie.length);
   if(a.indexOf(';') != -1)a = a.substring(0,a.indexOf(';'))
   return a; 
} 

function Reorder(eSelect, iCurrentField, numSelects)
	{
        var eForm = eSelect.form;
        var iNewOrder = eSelect.selectedIndex + 1;
        var iPrevOrder;
        var positions = new Array(numSelects);
        var ix;
        var y;
        //var idGrilla = "ctl00_cph_general_ctl00_grd_columnas";
        for (ix = 0; ix < numSelects; ix++)
        {
                positions[ix] = 0;
        }
        for (ix = 0; ix < numSelects; ix++)
        {
                y = ix + 2; 
                if (y > 9)
                {
                    positions[eSelect.form[idGrilla + "_ctl" + y + "_drp_posicion"].selectedIndex] = 1;
                }
                else
                {
                    positions[eSelect.form[idGrilla + "_ctl0" + y + "_drp_posicion"].selectedIndex] = 1;
                }
        }
        for (ix = 0; ix < numSelects; ix++)
        {
                if (positions[ix] == 0)
                {
                        iPrevOrder = ix + 1;
                        break;
                }
        }
        if (iNewOrder != iPrevOrder)
        {
                var iInc = iNewOrder > iPrevOrder? -1:1
                var iMin = Math.min(iNewOrder, iPrevOrder);
                var iMax = Math.max(iNewOrder, iPrevOrder);
                for (var iField = 0; iField < numSelects; iField++)
                {
                        y = iField + 2; 
                        if (iField != iCurrentField)
                        {
                            if (y > 9)
                            {                            
                                if (eSelect.form[idGrilla + "_ctl" + y + "_drp_posicion"].selectedIndex + 1 >= iMin && eSelect.form[idGrilla + "_ctl" + y + "_drp_posicion"].selectedIndex + 1<= iMax)
                                {
                                        if(eSelect.form[idGrilla + "_ctl" + y + "_drp_posicion"].selectedIndex < numSelects)
                                        {
                                            eSelect.form[idGrilla + "_ctl" + y + "_drp_posicion"].selectedIndex += iInc;
                                        }
                                }
                            }
                            else
                            {                        
                                if (eSelect.form[idGrilla + "_ctl0" + y + "_drp_posicion"].selectedIndex + 1 >= iMin && eSelect.form[idGrilla + "_ctl0" + y + "_drp_posicion"].selectedIndex + 1<= iMax)
                                {
                                        if(eSelect.form[idGrilla + "_ctl0" + y + "_drp_posicion"].selectedIndex < numSelects)
                                        {
                                            eSelect.form[idGrilla + "_ctl0" + y + "_drp_posicion"].selectedIndex += iInc;
                                        }
                                }
                            }
                        }
                }
        }
}


//ejecuta un clic sobre un boton de una grilla, dependiendo del browser
function CargarDatos(gridViewName,int_columnaControl)
{
    var tabla = document.getElementById(gridViewName);
    var filas = tabla.rows.length;
    var ua = navigator.userAgent;
    s = "MSIE";
    if ((i = ua.indexOf(s)) >= 0) 
        {//explorer
        int_columnaControl=int_columnaControl-1
        for(i=1;i<filas;i++)
            {
             var t5 = tabla.rows[i].childNodes[int_columnaControl].firstChild
             if (t5 != null)
             {
                var t = tabla.rows[i].childNodes[int_columnaControl].firstChild.id
                fa = ""  + t;
                if( (fa.indexOf("bti_cargar")) >= 0 )
                {
                    var y = document.getElementById(t)
                    y.click();
                }
              }
            }
        return false;
        
        }else
            {
             
                for(i=1;i<filas;i++)
                {
                     var t5 = tabla.rows[i].childNodes[int_columnaControl].firstElementChild
                     if (t5 != null)
                     {
                        var t = tabla.rows[i].childNodes[int_columnaControl].firstElementChild.id
                        fa = ""  + t;
                        if( (fa.indexOf("bti_cargar")) >= 0 )
                        {
                            var y = document.getElementById(t)
                            y.click();
                        }
                    }
                 }
        return false;
          
  }
}


//Cambian de estado los controles check de una columna


function cambiarEstadoChecksXColumna(IDHeaderCheckBox, gridViewName)
{
    var HeaderCheckBox = document.getElementById(IDHeaderCheckBox);
    var columnIndex = HeaderCheckBox.parentNode.cellIndex;
    var newState = HeaderCheckBox.checked;
    ChangeChecksByColumn(gridViewName, newState, columnIndex);
}



function ChangeChecksByColumn(gridViewName, newState, columnIndex)
{
    var tabla = document.getElementById(gridViewName);
    for (i = 1; i < tabla.rows.length; i += 1){
        if (tabla.rows[i].children[columnIndex].firstElementChild.type == "checkbox" && tabla.rows[i].children[columnIndex].firstElementChild.checked != newState)
        {
             tabla.rows[i].children[columnIndex].firstElementChild.click()
        }
    }
}

function formatoFila(grv,index,filas,paginacion)
{
    //var f=document.getElementById(fila)
    //var tabla=document.getElementById(fila.substring(0,fila.length-6))
    var tabla=document.getElementById(grv)
    
    if (document.getElementById('ctl00_hdd_cargaCompleta'))
    var fls = tabla.rows.length-1
    if (filas>=paginacion)fls -= 1;
    {
    for(i=1;i<=fls;i++)
        if(i==index+1)
        {
            tabla.rows[i].className='gri_itemSeleccionado'
                for(k=2;k<tabla.rows[i].childNodes.length;k++)tabla.rows[i].childNodes[k].className='gri_itemSeleccionado';
        }else{
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
    //f.className='gri_itemSeleccionado'
    //for(i=2;i<f.childNodes.length;i++) f.childNodes[i].className='gri_itemSeleccionado';
    }
}