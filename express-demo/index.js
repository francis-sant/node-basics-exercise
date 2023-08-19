const express = require('express')
const app = express()
const port = 3000


//for my all i can request or send something that can be used for get and post.  the moment its send, its done!
app.all('/', (req, res, next) => {
    console.log('Request logged')
    next();
});

//sendind a get request (more generic ) or post doesnt matter. but using all, its gonna use no matter what method is used
app.get('/', (req, res, next) => {
    res.send('Hello Users!' + req.method)
    next();
});

app.post('/', (req, res, next) => {
    res.send('Hello!' + req.method)
    next();
});

app.all('/', (req, res) => {
    console.log('Responde has been sent!')
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});