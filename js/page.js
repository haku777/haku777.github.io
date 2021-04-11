// auto invicaciones en js: 

(function(){ }()); 

(function(){ })(); 

(() =>{ })(); 


((e) => {
    console.log('permanece activo');


    Swal.fire({
        position: 'center',
        icon: 'info',
        title: '<ol><p>Repasar</p><li>Api</li><br><li>Javascript</li><br><li>Angular</li> <br><li>AngularJS</li><br><li>web sokets</li> <br><li>python</li> <br><li>Ajax</li><br><li>Java</li></ol>',
        
        showConfirmButton: false,
        timer: 4000
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
    
    
