// Archivo JScript
function fechaCierreOT(x,y)
{
    var o = document.getElementById(x);
    if (o.type == "checkbox")
    {
        var p = document.getElementById(y);
        if (o.checked)
        {
            p.style.display=''
        }else
        {
            p.style.display='none'
        }
    }
}

function otroCierreOT(x,y,z)
{
    var o = document.getElementById(x);
    if (o.type == "select-one")
    var t = o.options[o.selectedIndex];
    var x = document.getElementById(z); 
    {
        var p = document.getElementById(y);
        if (""+t.text == "Otro" && o.length>1)
        {
            p.style.display=''
            x.validationGroup ='ot'
        }else
        {
            p.style.display='none'
            x.validationGroup =''
        }
    }
}

    function f_habilitartxtDef(chk,txt,textoDefecto,hidden)
    { 
        var c = document.getElementById(chk);
        var t = document.getElementById(txt);
        var h = document.getElementById(hidden);
         
       if(c.checked)
       {
            t.value =textoDefecto;
            t.disabled=true;
        }else
       {
       t.value =h.value;
       t.disabled=false;
       }
    }