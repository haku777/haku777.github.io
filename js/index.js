(function(){ }()); 
(function(){ })(); 
(() =>{ 

    // var audio2 = document.getElementById('audio2');
    // setTimeout(function() {
    //   audio2.play();
    // }, 2700);
    
    // setTimeout(function() {
    //     audio2.play();
    //     audio2.loop = true;
    //     audio2.volume = 0.017;
    //   }, 32000);

    //   audio2.addEventListener('ended', function() {
    //     audio2.currentTime = 0;
    //     audio2.play();
    //     }
    //   );

    var video = document.getElementById('myVideo');
    video.playbackRate = 0.4;

    // window.onbeforeunload = preguntarAntesDeSalir;
    // function preguntarAntesDeSalir(){
    //     return "¿Are you sure?";
    // }

})(); 
		
var reloj = function(){
let fecha = document.getElementById('fecha');
let hora = document.getElementById('hora');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let ampm = document.getElementById('ampm');

let date = new Date(),
day = date.getDay(),
day2 = date.getDate(),
month = date.getMonth(),
year = date.getFullYear(),
hour = date.getHours(),
minutes = date.getMinutes(),
seconds = date.getSeconds(),
am_pm;

diaSemana = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
day =diaSemana[day];

mes = ['January','February','March','April','May','June','Julie','August','September','October','November','Dicember']
month =mes[month];

fecha.textContent=day + " " + day2 + " , " + month + " , " + year;

if (hour <= 12){am_pm="AM";}else{am_pm="PM";}

if (hour == 0){hour=12;}
if (hour < 10){hour='0' + hour;}
if (minutes < 10){minutes='0' + minutes;}
if (seconds < 10){seconds='0' + seconds;}

hora.textContent= hour;
minutos.textContent=minutes;
segundos.textContent=seconds;
ampm.textContent=am_pm;
};
let interval=setInterval(reloj,1000);



((e) => {
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: "<div class='alert'><h3>Learning...</h3><h3>AI</h3><h3>Node js</h3><h3>SEO</h3><h3>React</h3><h3>web sokets</h3><h3>python</h3><h3>Linux</h3></div>",
        showConfirmButton: true
        ,timer: 9900
      })
})();

function task(){
    swal.fire(
        'aqui se agregaran las tareas a  realizar tambien implantar alertas por campana',
        '<i>Pdt: permanece activo</i>',
        'success',
        );
}
function task1(){
swal.fire(
    'aun queda mucho por revisar',
    '<i>Pdt: permanece activo</i>',
    'error'
    );
};

function task2(){
    swal.fire(
        'No declines, dont let me down',
        '<i>Pdt: permanece activo</i>',
        'warning'
        );

};

function task3(){
    // swal.fire(
    //     'El dia del desarrollador es el 13 de septiembre',
    //     '<i>Pdt: permanece activo</i>',
    //     'info'
    //     );
        swal.fire({
            position: 'center',
            icon: 'info',
            title: '13 de Septiembre es el dia del desarrollador',
            foot:'asdasdas',
            showConfirmButton: false,
            timer: 3000
        })
    
};

function task4(){
    swal.fire({
        position:'center',
        icon:'question',
        title:'siges aqui a trabajar we!',
        foot:'<i>Pdt: permanece activo!</i>',
        showConfirmButton: false,
        });
};
function what(){
    Swal.fire({
        title: '...',
        width: 700,
        padding: '3em',
        background: '#fff url(../img/lol.png)no-repeat 50% 70%',
        backdrop: `
        rgba(0,0,123,0.4)
        url("../img/load.gif")
         top
        no-repeat`
    })
}