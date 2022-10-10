((e) => {
  
    
    
    // Swal.fire({
        //     position: 'center',
        //     icon: 'success',
        //     title: Message,
        //     showConfirmButton: false,
        //     timer: 3000
        //   })
        
        
    })();
    var contador =0;
    function hora(){
        let fecha =new Date(),
        dia =fecha.getDate(),
        mes =fecha.getMonth(),
        year =fecha.getFullYear(),
        horas =fecha.getHours(),
        minutos =fecha.getMinutes(),
        segundos =fecha.getSeconds();
        Msegundos =fecha.getMilliseconds();
        
        
        
        let message = "Hoy es martes? " + dia + " de julio? " + mes + " del " + year + " y son las " + horas + ":" + minutos + ":" + segundos + " Ms " + Msegundos;
        contador =contador +1 ;
        alert(message + "ya paso media hora?" + contador);   
    } 


    interval = setInterval(hora,300000);

    // setTimeout(hora(),2000);
    // setInterval(hora(), 1000);