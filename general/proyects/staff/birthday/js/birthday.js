(()=>{
    function updateGraphics() {
        let dia = document.getElementById("day").textContent;
        let mes = document.getElementById("month").textContent;
        let datesLeft = document.getElementById("daysLeft");
        let percent = document.getElementById("percent");

        const now = new Date();
        const currentyear = now.getFullYear();
        
        let birthday = new Date(currentyear, mes - 1, dia);
        
        if (birthday < now) {
            birthday.setFullYear(currentyear + 1);
        }
        
        const diferenciaMs = birthday - now;
        const diasFaltantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));
        let leftDays = 100 / diasFaltantes;
        let consumidos = 365 - diasFaltantes;

        //percentages
        let daysLeftPercent = Math.floor((diasFaltantes / 365) * 100);
        let daysToDatePercent = Math.floor((consumidos / 365) * 100);

        // console.log("dias consumidos: " + consumidos);
        // console.log("dias diasFaltantes: " + diasFaltantes);
        // console.log("dias pasados cumpleaños: " + daysLeftPercent);
        // console.log("dias consumidos cumpleaños: " + daysToDatePercent);

        percent.style.background = `conic-gradient(dodgerblue ${daysToDatePercent}%,#00ff80 ${daysToDatePercent}%,#00ff80 100%)`;
        datesLeft.innerHTML = `${diasFaltantes} 🥳`;
    }
    updateGraphics();
    window.updateGraphics = updateGraphics;

})();
