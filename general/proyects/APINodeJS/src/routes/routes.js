const { Router, json } = require('express');
const router = Router();

const datos = require('../../database/English.json');


router.get('/GetWords', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    // response.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    // next();
    response.json(datos);
});

router.post('/AddNewWord', (request, response) => {
    const {word, definition} = request.body;

    if(word && definition){
        const newWord = {...request.body};
        console.log(newWord);
        // datos.push(newWord);
        response.json(datos);
    }else{
        response.status(400).send('fallo el envio revise sus datos');
    }
});
//falta psot y put(que son similares)y delete
module.exports = router;
