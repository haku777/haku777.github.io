// JScript File

           var divElem = 'AlertDiv';
            var messageElem = 'AlertMessage';
            Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequestHandler);

            function EndRequestHandler(sender, args)
                {
                   if (args.get_error() != undefined)
                   {
                       //var errorMessage = args.get_error().message;
// if (args.get_error() && args.get_error().name === 'Sys.WebForms.PageRequestManagerTimeoutException') { 
                       var errorType = args.get_error().httpStatusCode;
                       var errorName = args.get_error().name;
                       var errorCode = args.get_error().code;
                       var errorMessage = args.get_error().message;
                       args.set_errorHandled(true);
                       switch(errorType){
                       case 0: 
                            document.location.href=document.location.href;//pérdida de sesión
                            break;
                       default:
                           if (errorMessage.indexOf('@ Page EnableEventValidation="true" %>')!=-1){
                           //el usuario dio click sin cargarse totalmente la página
                               //                            alert('va dejar pasar');
                           }
                           else{
                               $get(divElem).style.visibility = 'visible';
                               $get(messageElem).innerHTML = errorMessage;
                           }
                       }
                   }
                }
            function ClearErrorState() {
                     $get(messageElem).innerHTML = '';
                     $get(divElem).style.visibility = 'hidden';                     
                }

function isBackButtonUsed(){
 return isBack;
}
                
shortcut.add("f5",function() {
	document.location.href=document.location.href;
});

var x="1";
var isBack;
function handleBackButton(){
   var hddY=document.getElementById('_a1');
   isBack = (x != hddY.value);
   hddY.value=2;
   hddY.defaultValue=2;
   if(isBack){
    //alert("isback");
    document.location.href=document.location.href;
   }
}