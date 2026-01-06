(()=>{
    let data = {};
    function getDate(person){
        let user = {};

        //validamos con el valor de person si es uno de los 5 usuarios
        //lo haremos con un switch case
        switch(person){
            case 0:
                user = {
                    name: "JIMMY",
                    year: 1998,
                    month: 1,
                    day: 11,
                    blood : "A+"
                };
            break;
            case 1:
                user = {
                    name: "SARA",
                    year: 2013,
                    month: 10,
                    day: 3,
                    blood : "O+"
                };
            break;
            case 2:
                user = {
                    name: "KATE",
                    year: 1997,
                    month: 2,
                    day: 4,
                    blood : "A+"
                };
            break;
            case 3:
                user = {
                    name: "NELSA",
                    year: 1977,
                    month: 6,
                    day: 16,
                    blood : "O+"
                };
            break;
            case 4:
                user = {
                    name: "JORGE",
                    year: 1974,
                    month: 3,
                    day: 33,
                    blood : "ask"
                };
            break;
        }

        data = user;
    }
    getDate(0);

    function calculateAge(year, month, day){
        let now = new Date();
        let birthDate = new Date(year, month - 1, day);
        let age = now.getFullYear() - birthDate.getFullYear();
        return age;
    }

    function getZodiacSign(month, day) {
        const zodiacData = [
            { sign: "Capricorn", element: "Earth", m: 1, d: 20 },
            { sign: "Aquarius", element: "Air", m: 2, d: 19 },
            { sign: "Pisces", element: "Water", m: 3, d: 21 },
            { sign: "Aries", element: "Fire", m: 4, d: 20 },
            { sign: "Taurus", element: "Earth", m: 5, d: 21 },
            { sign: "Gemini", element: "Air", m: 6, d: 21 },
            { sign: "Cancer", element: "Water", m: 7, d: 23 },
            { sign: "Leo", element: "Fire", m: 8, d: 23 },
            { sign: "Virgo", element: "Earth", m: 9, d: 23 },
            { sign: "Libra", element: "Air", m: 10, d: 23 },
            { sign: "Scorpio", element: "Water", m: 11, d: 22 },
            { sign: "Sagittarius", element: "Fire", m: 12, d: 22 },
            { sign: "Capricorn", element: "Earth", m: 13, d: 31 } // Cierre de año
        ];
        return result = zodiacData.find(z => (month < z.m) || (month === z.m && day < z.d));
    }

        let name = document.getElementById("name");
        let birthdayDay = document.getElementById("day");
        let birthdayMonth = document.getElementById("month");
        let age = document.getElementById("age");
        let year = document.getElementById("year");
        let zodiac = document.getElementById("zodiac");
        let element = document.getElementById("element");
        let blood = document.getElementById("blood");

        name.innerHTML = data.name;
        birthdayDay.innerHTML = data.day;
        birthdayMonth.innerHTML = data.month;
        year.innerHTML = data.year;
        age.innerHTML = calculateAge(data.year, data.month, data.day);
        zodiac.innerHTML = getZodiacSign(data.month, data.day).sign;
        element.innerHTML = getZodiacSign(data.month, data.day).element;
        blood.innerHTML = data.blood;


})()
