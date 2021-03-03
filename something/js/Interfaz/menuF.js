

//
function cambiocolor(control,color)
{
    if( control.parentNode.parentNode.parentNode.className == "menu"){
    control.parentNode.parentNode.style.background=color;
    }
    
    control.style.background=color;
    //submenu 
//    if (g_browser.isIE)
//    {
//         if(control.childNodes.length > 0)
//        {
//            if(control.lastChild.tagName == 'UL')   
//            {   
//                control.lastChild.style.left = (control.offsetWidth -1) + "px"
//            }
//        }
//    
//    }
//    else
//    {
//   
//        if(control.childElementCount > 0)
//        {
//            if(control.lastChild.tagName == 'UL')
//            {control.lastChild.style.left = (control.offsetWidth ) + "px"
//            }
//        }
//    
//    }
}


//
function f_cambiocolorPriLin(control,color)
{
control.style.cursor='pointer'
    control.style.background=color;
    control.style.color='black';
    if(color=='transparent')
    {control.style.color='#28679d';
        
    }else {control.style.color='white';
control.style.cursor='normal'
        }

     if(control.childNodes[1] != null)
        {   control.childNodes[1].style.color='black';}
   

}
