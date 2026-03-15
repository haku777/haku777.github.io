(() => {

    const previousUserBtn = document.getElementById('previousUser');
    const nextUserBtn = document.getElementById('nextUser');
    let id = parseInt(document.getElementById("id").textContent);

    
    previousUserBtn.addEventListener('click', () => {
        if(id !== 0)
            id = id - 1;
        userUpdate(id);
    });
    
    nextUserBtn.addEventListener('click', () => {
        id = id + 1;
        userUpdate(id);
    });

    async function userUpdate(idUser) {
        if(getData(idUser) == null){
            id = 0;
        }
        await actualizarDatos(id);
    }
    
})();
