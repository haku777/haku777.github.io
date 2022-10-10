window.onload=function(){
var t_str_brow=navigator.userAgent;
var scale=(screen.width /(screen.width /3));

//var scale=(screen.width /3);
//
if(navigator.platform!='Win32'){
if(t_str_brow.toLowerCase().indexOf('firefox') > -1){

document.body.setAttribute("style", "-moz-transform:scale("+scale+");    -moz-transform-origin: 0 0; ");
}
if(t_str_brow.toLowerCase().indexOf('msie') > -1){
document.body.setAttribute("style", " -ms-transform: scale("+scale+");  -ms-transform-origin: 0 0;");
}
if(t_str_brow.toLowerCase().indexOf('opera') > -1){
document.body.setAttribute("style", "-o-transform: scale("+scale+");    -o-transform-origin: 0 0;  ");
}
if(t_str_brow.toLowerCase().indexOf('chrome') > -1  ){
document.body.setAttribute("style", "-webkit-transform: scale("+scale+"); -webkit-transform-origin: 0 0; ");
}
if(t_str_brow.toLowerCase().indexOf('linux') > -1){
//document.body.setAttribute("style", "-webkit-transform: scale("+(scale*0.40) +"); -webkit-transform-origin: 0 0; ");
document.body.style.zoom = (scale*100)+"%";
}
}
} 