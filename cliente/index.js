function callSoapOperation(params) {
    fetch('http://localhost:8000/wsdl', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/xml; charset=utf-8'
        },
        body: params
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            //console.log(data)
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(data, 'text/xml');
            var result = xmlDoc.getElementsByTagName('tns:result')[0].textContent;
            document.getElementById('result').innerText = 'Resultado: ' + result;
        })
        .catch(error => {
            document.getElementById('result').innerText = 'Error: ' + error.message;
        });
}

function add() {
    var params = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://example.com/">\
                    <soapenv:Header/>\
                    <soapenv:Body>\
                        <ser:Add>\
                            <a>' + document.getElementById('a').value + '</a>\
                            <b>' + document.getElementById('b').value + '</b>\
                        </ser:Add>\
                    </soapenv:Body>\
                </soapenv:Envelope>';
    callSoapOperation(params);
}

function subtract() {
    var params = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://example.com/">\
                    <soapenv:Header/>\
                    <soapenv:Body>\
                        <ser:Subtract>\
                            <a>' + document.getElementById('a').value + '</a>\
                            <b>' + document.getElementById('b').value + '</b>\
                        </ser:Subtract>\
                    </soapenv:Body>\
                </soapenv:Envelope>';
    callSoapOperation(params);
}

function multiply() {
    var params = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://example.com/">\
                    <soapenv:Header/>\
                    <soapenv:Body>\
                        <ser:Multiply>\
                            <a>' + document.getElementById('a').value + '</a>\
                            <b>' + document.getElementById('b').value + '</b>\
                        </ser:Multiply>\
                    </soapenv:Body>\
                </soapenv:Envelope>';
    callSoapOperation(params);
}

function divide() {
    var params = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://example.com/">\
                    <soapenv:Header/>\
                    <soapenv:Body>\
                        <ser:Divide>\
                            <a>' + document.getElementById('a').value + '</a>\
                            <b>' + document.getElementById('b').value + '</b>\
                        </ser:Divide>\
                    </soapenv:Body>\
                </soapenv:Envelope>';
    callSoapOperation(params);
}
