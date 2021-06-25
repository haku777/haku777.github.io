function UpHour(){

	var fecha = new Date(),
	Dia = fecha.getDate(),
	Mes = fecha.getMonth(),
	Year = fecha.getFullYear(),
	Horas = fecha.getHours(),
	Minutos = fecha.getMinutes(),
	Segundos = fecha.getSeconds(),
	AmPm;

	var docDiaSemana = document.getElementById("dsemana"),
	docDia = document.getElementById("dia"),
	docMes = document.getElementById("mes"),
	docYear = document.getElementById("year"),
	docHoras = document.getElementById("horas"),
	docMinutos = document.getElementById("minutos"),
	docSegundos = document.getElementById("segundos"),
	docAmpm = document.getElementById("ampm");

	var docDiaSemanaj = document.getElementById("dsemanaj"),
	docDiaj = document.getElementById("diaj"),
	docMesj = document.getElementById("mesj"),
	docYearj = document.getElementById("yearj"),
	docHorasj = document.getElementById("horasj"),
	docMinutosj = document.getElementById("minutosj"),
	docSegundosj = document.getElementById("segundosj");
	var docAmpmj = document.getElementById("ampmj");

	var Dsem = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	docDiaSemana.textContent = Dsem[Dia];
	docDiaSemanaj.textContent = Dsem[Dia];

	docDia.textContent = Dia;
	docDiaj.textContent = Dia+1;

	var Dmes = ["Diciembre","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre"];
	docMes.textContent = Dmes[Mes];
	docMesj.textContent = Dmes[Mes];

	docYear.textContent = Year;
	docYearj.textContent = Year;
// finaliza los datos de fecha, a continuacion los datos de hora
	

	if (Horas>=12) {
		Horas = Horas-12;
		docAmpm.textContent = "PM";
		docAmpmj.textContent = "AM";
	}else{
		docAmpm.textContent = "AM";	
		docAmpmj.textContent = "PM";	
	}
	if (Horas<10) {Horas = "0" + Horas;}
	docHoras.textContent = Horas;
	var hj = (parseInt (Horas)+14)-12;
	if (hj<10) {hj = "0" + hj; }
	docHorasj.textContent = hj;

	if (Minutos<10) {Minutos = "0" + Minutos;}
	docMinutos.textContent = Minutos;
	docMinutosj.textContent = Minutos;

	if (Segundos<10) {Segundos = "0" + Segundos;}
	docSegundos.textContent = Segundos;
	docSegundosj.textContent = Segundos;

}
UpHour();

var Up = setInterval(UpHour,1000);