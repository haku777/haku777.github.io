(()=>{

        let dia = document.getElementById("day").textContent;
        let mes = document.getElementById("month").textContent;
        let datesLeft = document.getElementById("daysLeft");
        let percent = document.getElementById("percent");

        console.log(dia, mes);

        const now = new Date();
        const currentyear = now.getFullYear();
        
        let birthday = new Date(currentyear, mes - 1, dia);
        
        if (birthday < now) {
            birthday.setFullYear(currentyear + 1);
        }
        
        const diferenciaMs = birthday - now;
        const diasFaltantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));
        
        let consumidos = 100 / diasFaltantes;
        percent.style.background = `conic-gradient(#ff8080 ${consumidos}%,dodgerblue ${consumidos}% 100%)`;
        console.log("dias faltantes: " + diasFaltantes);
        datesLeft.innerHTML = `${diasFaltantes} days left 🥳`;
})();
