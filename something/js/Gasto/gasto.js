//Archivo JScript


function recalcularValorPago(p_dbl_precio, p_dbl_cantidad,p_txt_valor)
{
    var t=document.getElementById(p_dbl_precio);
    var v=document.getElementById(p_txt_valor);
    var resultado=((p_dbl_cantidad.replace(",","."))*(t.value.replace(",","."))).toString();
    v.value=resultado.replace(".",",");
}