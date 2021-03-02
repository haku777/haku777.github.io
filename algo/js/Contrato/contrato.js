// Archivo JScript
function validarCheck(source,arguments)
{    
    return true
}

function mostrarPeriodoTempario(event,v,p,t,rf,re,rn,rd1,rd2,rt,tt,lt,rtt)
{   
    var x;
    if (g_browser.isIE) x=event.srcElement;
    if (g_browser.isNS) x=event.target;
    
    if (x.tagName == "INPUT" && x.type == "checkbox")
    {
//        var str = new String(x.name)
//        if (str.split("$")[str.split("$").length-1]=="1")
//        {
//            //tempario
//            mostrarTabla(t)
//        }else
//        {
//            //periodo
//            mostrarTabla(p,rf,re,rn,rd1,rd2,rt,true)
//        }
    if (v=='1') mostrarTabla(t);
    if (v=='0') mostrarTabla(p,rf,re,rn,rd1,rd2,rt,true);
    }
    var o=document.getElementById(t)
    var p=document.getElementById(p) 
    var w=document.getElementById(tt) 
    var y=document.getElementById(lt) 
    var z=document.getElementById(rtt) 
    if (o.style.visibility=='' && p.style.visibility=='')
    {
        w.style.display=''
        y.style.display=''
        z.style.display=''
        z.enabled=true
    }else
    {
        w.style.display='none'
        y.style.display='none'
        z.style.display='none'
        z.enabled=false
    }
}
function mostrarTabla(t,rf,re,rn,rd1,rd2,rt,b)
{
    var o=document.getElementById(t)
    if(o.style.visibility=='hidden')
    {
        o.style.visibility=''
        if (b)
        {
            var r=document.getElementById(rf)
            r.enabled=true
            r=document.getElementById(re)
            r.enabled=true
            r=document.getElementById(rn)
            r.enabled=true
            r=document.getElementById(rd1)
            r.enabled=true
            r=document.getElementById(rd2)
            r.enabled=true
            r=document.getElementById(rt + '_rfvListado')
            if (r!=null)
            {
                r.enabled=true
            }else
            {   
                r=document.getElementById(rt + 'rfv_buscado')
                r.enabled=true
            }
        }
    }else
    {
        o.style.visibility='hidden'
        if (b)
        {
            var r=document.getElementById(rf)
            r.enabled=false
            r=document.getElementById(re)
            r.enabled=false
            r=document.getElementById(rn)
            r.enabled=false
            r=document.getElementById(rd1)
            r.enabled=false
            r=document.getElementById(rd2)
            r.enabled=false
            r=document.getElementById(rt + '_rfvListado')
            if (r!=null)
            {
                r.enabled=false
            }else
            {   
                r=document.getElementById(rt + 'rfv_buscado')
                r.enabled=false
            }
        }
    }
}
function habilitarEstrategia(event,d,rfv,dc,rfvd)
{
    var o;
    if (g_browser.isIE) o=event.srcElement;
    if (g_browser.isNS) o=event.target;
    
    var x=document.getElementById(d)
    var r=document.getElementById(rfv)
    var y=document.getElementById(dc)
    var s=document.getElementById(rfvd)
    
    if (o.value=="1")
    {
        x.style.visibility='hidden'
        r.enabled=false
        //ocultar el dias calendario
        y.style.display='none'
        s.enabled=false
        s.style.display='none'
    }else
    {
        x.style.visibility=''
        r.enabled=true
        y.style.display=''
        s.enabled=true
        s.style.display=''
    }
}
function habilitarDias(event,d1,d2,rfv1,rfv2)
{
    var o;
    if (g_browser.isIE) o=event.srcElement;
    if (g_browser.isNS) o=event.target;
    
    var x=document.getElementById(d1)
    var y=document.getElementById(d2)
    var z=document.getElementById(rfv1)
    var w=document.getElementById(rfv2)
    if(o.value==0)
    {
        x.style.display=''
        z.enabled=true
        z.style.display=''
        y.style.display='none'
        w.enabled=false
    }else
    {
        x.style.display='none'
        z.style.display='none'
        z.enabled=false
        y.style.display=''
        w.enabled=true
    }
}
function establecerPromedio(t,v)
{
    var o=document.getElementById(t)
    o.value=v
}
function calcularSaldo(c1,c2,s)
{
    var x=document.getElementById(c1)
    var y=document.getElementById(c2)
    var z=document.getElementById(s)
    
    x=parseFloat(new String(x.value).replace(",","."))
    y=parseFloat(new String(y.value).replace(",","."))
    z.value=x-y
    if(z.value>0)
    {
        z.style.color = "#28679d"
    }else
    {
        z.style.color = "#d2691e"
    }
}
function pedirHorometro(tbl,b)
{
    var o=document.getElementById(tbl)
    var x=document.getElementById(b)
    if (o.style.display=="none")
    {
        o.style.display=""
        x.style.display=""
    }else
    {
        o.style.display="none"
        x.style.display="none"
    }
}