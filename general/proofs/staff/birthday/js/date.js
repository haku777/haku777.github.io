    (()=>{
        let now = document.getElementById("date");
        function upDate(){
            let date = new Date();
            now.innerHTML = date.getFullYear() +"..."+ date.getHours() +":"+ date.getMinutes() +":<code>"+ date.getMilliseconds()+"</code>";
        }

        setInterval(upDate,100);
        function show(){
            let now = document.getElementById("name");
            now.innerHTML = "????";
            prompt('fotos');
        }
        
    })()