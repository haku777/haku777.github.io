let value = document.getElementById('value').addEventListener('change', loadData);
let search = document.getElementById('search').addEventListener('click', loadData);
let header = document.querySelector('header');
let results = document.getElementById('results');

async function getData(text){
    return new Promise((resolve, reject)=>{
        fetch(`https://pixabay.com/api/?key=5782415-b3d87a084492871cc6157ae22&q=${text}&image_type=photo&per_page=50`)
        .then(data => data.json())
        .then(data => {
            ImageApi(data);
            resolve(data);       
        })
        .catch(error=> {
            console.log(error);
            reject(error);
        });
    })
}

async function ImageApi(data){
    for(let items of data.hits){
        results.innerHTML +=(`<img class="img" src="${items.largeImageURL}" width="300" height="300">`);
    }
}

async function loadData(){
    if(!header.classList.contains("header"))
    header.className += "header";
    results.innerHTML = "";
    let valueV = document.getElementById('value').value;
    let valueText = document.getElementById('search').value;
    const result = await getData(valueV);
    valueText = "";
    valueV = "";
}
