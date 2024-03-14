const soap = require('soap');
const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());

// Definimos las funciones que estarán disponibles en el servicio
const service = {
    MyService: {
        MyPort: {
            HelloWorld: function(args) {
                return { message: "hola " + args.name };
            },
            Add: function(args) {
                return { result: parseFloat(args.a) + parseFloat(args.b) };
            },
            Subtract: function(args) {
                return { result: parseFloat(args.a) - parseFloat(args.b) };
            },
            Multiply: function(args) {
                return { result: parseFloat(args.a) * parseFloat(args.b) };
            },
            Divide: function(args) {
                console.log(args.a +" "+ args.b)
                if (parseFloat(args.b) === 0 ){
                    return { result: "divicion indefinida" };
                }
                return { result: parseFloat(args.a) / parseFloat(args.b) };
            }
        }
    }
};

// Especificamos el WSDL
const xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

// Creamos el servidor SOAP
const server = app.listen(8000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('SOAP service listening at http://localhost:8000/wsdl');
});

// Publicamos nuestro servicio
soap.listen(app, '/wsdl', service, xml);
