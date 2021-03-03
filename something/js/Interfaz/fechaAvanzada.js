// Archivo JScript

function validarHora(txt)
{
    var txthora = ""
    txthora = ""+txt.value
    if (Number(txthora.substring(3,5))>59)txt.value=txthora.substring(0,2)+":59";
    if (Number(txthora.substring(0,2))>=24) txt.value='23:59';
}
function validarFecha(fec)
{
  var txtfecha=fec.value;
  var txttemp="";
  var arrTiempo;
  var mes;
  
  var fechaTemp = txtfecha;
  if(fechaTemp!="" && fechaTemp.length===9 ) {
    if (fechaTemp.substring(1, 2) && fechaTemp.substring(4, 5)) {
        txtfecha = "0" + fechaTemp;
    }
  }
  
  if(txtfecha!="" && txtfecha.length>=10 )
   {
         for (var i=0;i<=10;i++)
         {
         
               if(i>0){
                    if (i==3 ||i==6)
                    {
                         if(txtfecha.substring(i,i-1)!="/")
                         {
                             txttemp=txttemp+"/";
                         }
                         else
                         {
                             txttemp= txttemp+ txtfecha.substring(i,i-1);
                         }
                     }
                    else
                    {
                     if(isNaN(txtfecha.substring(i,i-1))==false)
                     {
                     txttemp= txttemp+txtfecha.substring(i,i-1);
                     }
                     else 
                     {
                         txttemp="";
                         break ;
                     
                     }
            
                   }
             }
     }
  }
 if(txtfecha!="" && txtfecha.length==8 )
 {
    for (var i=0;i<=10;i++)
    {
      if(i==2 ||i==4)
      {
         txttemp= txttemp+txtfecha.substring(i,i-1)+"/";
      }
      else
      {
         txttemp= txttemp+txtfecha.substring(i,i-1);
      }
    }
 }
 
     if(txtfecha!="" && txtfecha.length==8 || txtfecha!="" && txtfecha.length==10 ){
     arrTiempo =txttemp.split("/");
     txttemp="";
     if(arrTiempo[1]>12){
       txttemp="/12/";
           mes =12;
      }
     else
     {
         if(arrTiempo[1]<10 && arrTiempo[1].indexOf("0")<0)
         {
          txttemp="/0"+arrTiempo[1]+"/";
          mes ="0" + arrTiempo[1];
         }
         else 
         {
           txttemp="/" + arrTiempo[1]+ "/";
           mes =arrTiempo[1];
         }
     }
      
      if( mes == "01" || mes == "03" || mes == "05" || mes == "07" || mes == "08" || mes == "10" || mes == "12")
      {
            if(arrTiempo[0]> 31 ){
             txttemp= "31"+txttemp;
            }
            if(arrTiempo[0].indexOf("0")==0 ||arrTiempo[0]>=10 &&arrTiempo[0]<=31 ){
              txttemp= arrTiempo[0]+txttemp;
            }
            if(arrTiempo[0]=="00" ){
              txttemp= "01"+txttemp;
            }
           
      }
      
       if( mes == "04" || mes == "06" || mes == "09" || mes == "11" )
       {
             if(arrTiempo[0]> 30 ){
             txttemp= "30"+txttemp;
            }
            if(arrTiempo[0].indexOf("0")==0||arrTiempo[0]>=10 &&arrTiempo[0]<=30){
              txttemp= arrTiempo[0]+txttemp;
            }
            if(arrTiempo[0]=="00" ){
              txttemp= "01"+txttemp;
            }
       }
       
       if( mes == "02"  )
       {
         if(arrTiempo[0]> 29 ){
             txttemp= "29"+txttemp;
            }
            if(arrTiempo[0].indexOf("0")==0||arrTiempo[0]>=10 &&arrTiempo[0]<=29){
              txttemp= arrTiempo[0]+txttemp;
            }
            if(arrTiempo[0]=="00" ){
              txttemp= "01"+txttemp;
            }
       }
      if(arrTiempo[2]<1900 )
      {
         txttemp= txttemp +"1900" ;
      }
      else
      {
       txttemp= txttemp+ arrTiempo[2] ;
      }  
    }  
    else
    {
     txttemp ="";
    }     
     fec.value=txttemp;
}