
(function(){


var reloj = function(){

	var date = new Date();

	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	var ampm;
	
	var day = date.getDate();
	var month = date.getMonth();
	var year = date.getFullYear();

/*definition*/


var hours= document.getElementById('hours');
var minutes= document.getElementById('minutes');
var seconds= document.getElementById('seconds');

var am_pm= document.getElementById('ampm');

var days= document.getElementById('days');
var months= document.getElementById('months');
var years= document.getElementById('years');


/*se pueden crear dos arreglos uno para los dias
la se mana y otro para los meses del año*/

/*ejemplo:

var diasSemana = [domingo,lunes,martes, etc] 
days = diasSemana[days]
*/


if (hour>=12) {
	hour =hour -12;
	ampm='PM';
}else{
	ampm='AM';
};


if (hour<10) {
	hour = "0" + hour;
};
if (minute<10) {
	minute = "0" + minute;
};
if (second<10) {
	second = "0" + second;
};


if (hour ==0 ) {
	hour = 12;
}


am_pm.textContent=ampm;

hours.textContent=hour;
minutes.textContent=minute;
seconds.textContent=second;

days.textContent=day;
months.textContent=month;
years.textContent=year;

};

reloj();
interval = setInterval(reloj,1000);

}())