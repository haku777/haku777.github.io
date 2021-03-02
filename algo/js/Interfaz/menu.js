// Archivo JScript

function ocultarMenu(e){
    MM_findObj('divMenu').style.display='none';
}

function mostrarSubMenu(c,id,mostrar)
{
var sub,i,bol
    i=1
    bol=true
    while (bol)
    { i=i+1
        if (i>9)
        {
            sub = document.getElementById(c+"_grd_submenu_ctl"+i+"_divSubMenu")
            if (sub !=null)
            {
                sub.style.display='none'
            }else
            {
                bol=false
            }
        }else
        {
            sub =document.getElementById(c+"_grd_submenu_ctl0"+i+"_divSubMenu")
            if (sub !=null)
            {
                sub.style.display='none'
            }else
            {
                bol=false
            }
        }
       
    }
    if (mostrar)
    {
        id+=2;
        if (id<10) id='0'+id;
        var x=c+"_grd_submenu_ctl"+id+"_divSubMenu"
        document.getElementById(x).style.display='block';
        document.getElementById("divMenusRecientes").style.display='none'
    }else
    {
        document.getElementById("divMenusRecientes").style.display='block'
    }
}

function mostrarAyuda(ayuda_1,ayuda_2,id)
{
    MM_findObj(ayuda_1).style.display='';
    MM_findObj(ayuda_2).style.display='';
    MM_findObj(id).style.visibility='hidden';
    mostrarSAMM(true)
}

function ocultarAyuda(ayuda_1,ayuda_2,id)
{
    MM_findObj(id).style.visibility='';
    MM_findObj(ayuda_1).style.display='none';
    MM_findObj(ayuda_2).style.display='none';
    mostrarSAMM(false)
}

///Crea en la BD la preferencia del link visitado
var cargaEnProceso = false
function crearPreferenciaMenu(name,t,padre,url,usu) 
{
if(!cargaEnProceso)
    {
    window.open(url,"_self")
    cargaEnProeceso = true
    var cook=name + ';::;' + t + ';::;' + padre + ';::;' +url
    PageMethods.s_guardaPreferencia(cook,usu,esOK,esErr);  
    }
}
function esOK() { 
    cargaEnProceso = false
}

function esErr(error, userContext, methodName) {
   PageMethods.s_regError(error + '('+ methodName +','+ userContext +')',esOK,esErr);
}

function crearPreferencia(name,value) {
    PageMethods.s_creaPreferencia(name,value,esOK,esErr); 
}


function mostrarSAMM(mostrar)
{
   if(mostrar)
    {
        crearPreferencia("ayudaSAMM",1)
    }
    else
    {
        crearPreferencia("ayudaSAMM",0)
    }
}

function mouseover(x)
{
    x.className = "hover_" + x.className
}
function mouseout(x)
{
    var s = new String(x.className)
    x.className = s.substring(6)
}
function mouseoverLNK(x,mod,a)
{
    if (a=="False")
    {
        x.className = "hover_"+x.className
        x.style.backgroundColor=mod
    }
}
function mouseoutLNK(x,a)
{
    if (a=="False")
    {
        var s = new String(x.className)
        x.className = s.substring(6)
        x.style.backgroundColor='White'
    }
}