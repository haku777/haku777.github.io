// Archivo JScript
function actualizarRadio(id,x)
{
    var c,str
    str = new String(id)
    c=str.split("dtl_imagenes_ctl")[0]
    for (i=0;i<x;i++)
    {
        if (i>9)
        {
            document.getElementById(c+"dtl_imagenes_ctl"+i+"_rdb_cargo").checked=false
        }else
        {
            document.getElementById(c+"dtl_imagenes_ctl0"+i+"_rdb_cargo").checked=false
        }
    }
    document.getElementById(id).checked=true
}
