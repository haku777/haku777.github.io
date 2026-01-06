const contenedorTarjetas = document.getElementById('heros');

async function cargarHeroes() {
    const totalHeroes = 7; // 732
    const promesas = [];

    for (let i = 1; i <= totalHeroes; i++) {
        const url = `https://www.superheroapi.com/api.php/793211591386644/${i}`;
        promesas.push(fetch(url).then(res => res.json()));
    }

    try {
        const listaHeroes = await Promise.all(promesas);
        
        contenedorTarjetas.innerHTML = '';

        listaHeroes.forEach(hero => {
            if (hero.response === "success") {
                const htmlHero = `
                <div class="card hero">
                    <div class="foto">
                        <a href="#"><img src="${hero.image.url}" alt="${hero.name}"></a>
                    </div>
                    <div class="info">
                        <h3>Name: <b>${hero.name}</b></h3>
                        <h3>Publisher: <b>${hero.biography.publisher}</b></h3>
                        <div class="apariencia">
                            <h3>Gender: <b>${hero.appearance.gender}</b></h3>
                            <h3>Race: <b>${hero.appearance.race}</b></h3>
                            <h3>Height: <b>"${hero.appearance.height[0]}","${hero.appearance.height[1]}"</b></h3>
                            <h3>Weight: <b>"${hero.appearance.weight[0]}","${hero.appearance.weight[1]}"</b></h3>
                            <h3>Eye-color: <b>${hero.appearance['eye-color']}</b></h3>
                            <h3>Hair-color: <b>${hero.appearance['hair-color']}</b></h3>
                        </div>
                        <div class="voto">
                            <div class="likes">
                                <img src="../../../files/img/svg/like.svg" alt="Like">
                            </div>
                            <div class="dislikes">
                                <img src="../../../img/svg/dislike.svg" alt="Dislike">
                            </div>
                        </div>
                    </div>
                </div>`;
                
                contenedorTarjetas.insertAdjacentHTML('beforeend', htmlHero);
            }
        });
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}
cargarHeroes();

