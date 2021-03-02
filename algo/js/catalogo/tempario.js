// Archivo JScript
function mostrarTablaPorc(rb,tp,th)
{
    var rbl = document.getElementsByName(rb)
    var tbl_p = document.getElementById(tp)
    var tbl_h = document.getElementById(th)
    
    var rblChild = document.getElementById(rb + "_0");
    if (rblChild.checked) 
    {
        tbl_p.style.display=""
        tbl_h.style.display="none"
    }else
    {
        tbl_p.style.display="none"
        tbl_h.style.display=""
    }
    
    
}
