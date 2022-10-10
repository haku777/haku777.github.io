const express = require('express');
const morgan = require('morgan');

const exp = express();

//we create a server
    //middlewares
    exp.use(morgan('combined'));
    exp.use(express.json());
    
    //to learn when we send a form to the server
    exp.use(express.urlencoded({extended: false}));
    
    //settings
    exp.set('json spaces' ,2);
    exp.set('port', process.env.PORT || 777);
    
    exp.use('/api',require('../routes/routes'));
    

    //staring the server
    exp.listen(exp.get('port'), () => {
        console.log(`Server on port ${exp.get('port')}`);
    })

