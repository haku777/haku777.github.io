function Show(){
    let botton = document.getElementById('Photos');
    botton.classList.add("showPhotos");
    document.body.style.overflow = 'hidden';
}
function Close(){
    let botton = document.getElementById('Photos');
    botton.classList.remove("showPhotos");
    document.body.style.overflow = '';
}
////////////////////////////////////////
const basePath = '../../../../files/img/Family/Sara/sara'; // Ruta base sin el número
const extension = '.jpg'; // Extensión de la imagen
let currentIndex = 1; // Inicia en la imagen 'sara1'
const totalImages = 110; // Número total de imágenes (hasta 'sara99')

const imgElement = document.getElementById('photo');
const previewBtn = document.getElementById('previousPhoto');
const nextBtn = document.getElementById('nextPhoto');

// Función para validar si la imagen existe
function validateImage(path, callback) {
    const img = new Image();
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
    img.src = path;
}

// Función para cambiar la extensión de la imagen si no existe
function changeExtension(path) {
    const extensions = ['png', 'jpg', 'jpeg'];
    let basePath = path.replace(/\.(png|jpg|jpeg)$/i, ''); // Elimina la extensión actual

    function tryNextExtension(index) {
        if (index >= extensions.length) {
            return; // No se encontró una imagen válida
        }
        const newPath = basePath + '.' + extensions[index];
        validateImage(newPath, (exists) => {
            if (exists) {
                imgElement.src = newPath;
            } else {
                tryNextExtension(index + 1); // Intentar la siguiente extensión
            }
        });
    }

    tryNextExtension(0); // Iniciar con 'png'
}

// Función para actualizar la imagen
function updateImage(index) {
    const imagePath = `${basePath}${index}${extension}`;
    validateImage(imagePath, (exists) => {
        if (exists) {
            imgElement.src = imagePath;
        } else {
            changeExtension(imagePath); // Cambia la extensión si la imagen no existe
        }
    });
}

// Manejador para el botón de "Next"
nextBtn.addEventListener('click', () => {
    console.log(currentIndex)
    currentIndex = (currentIndex % totalImages) + 1; // Aumentar el índice, vuelve a 1 si llega a 34
    updateImage(currentIndex);
});

// Manejador para el botón de "Preview"
previewBtn.addEventListener('click', () => {
    console.log(currentIndex)
    currentIndex = (currentIndex - 1 + totalImages - 1) % totalImages + 1; // Disminuye el índice, vuelve a 34 si llega a 1
    updateImage(currentIndex);
});

// Inicializar la imagen al cargar la página
updateImage(currentIndex);
