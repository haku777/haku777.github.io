(()=>{
    let now = document.getElementById("date");
    function upDate(){
        let date = new Date();
        now.innerHTML = date.getFullYear() 
        +":"+ date.getHours() 
        +":"+ date.getMinutes() 
        +":<code>"+ date.getSeconds()+"</code>";
    }
    setInterval(upDate,1000);        
})();
