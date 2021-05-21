const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Leandro',
        edad: 35,
        url: req.url
    }

    res.write(JSON.stringify(salida));

    //res.write('Hola Mundo');
    res.end();
}).listen(8081);

console.log('Escuchando puerto 8081');