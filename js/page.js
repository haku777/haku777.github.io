// auto invicaciones en js: 

(function(){ }()); 

(function(){ })(); 

(() =>{ })(); 




		
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
        title: '<ol><p>Repasar</p><li>.net</li><br><li>node js</li><br><li>Api</li><br><li>Javascript</li><br><li>Ajax</li><br><li>Canvas</li><br><li>Laravel</li><br><li>Angular</li><br><li>AngularJS</li><br><li>web sokets</li><br><li>python</li><br><li>Linux</li><br><li>Java</li></ol>',
        
        showConfirmButton: true
        // ,timer: 1700
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

    
    // setTimeout(task,2000);
    // setTimeout(task1,5000);
    // setTimeout(task2,7000);
    // setTimeout(task3,9000);
    // setTimeout(task4,12000);
    // setTimeout(what,15000);
    
    
