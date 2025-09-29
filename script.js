const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3333;

;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public', {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
/////////////base64
app.get('/base64', (req, res) => {
    res.sendFile(__dirname + '/views/base64.html');
});

app.post('/base64-encode', (req, res) => {
    try {
        const { encodevalue } = req.body;
        if (!encodevalue) return res.status(400).send('Bad request value is empty');
        const encoded = Buffer.from(encodevalue).toString('base64');
        res.status(200).send(encoded);
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
});

app.post('/base64-decode', (req, res) => {
    try {
        const { decodevalue } = req.body;
        if (!decodevalue) return res.status(400).send('Bad request value is empty');
        const cleaned = decodevalue.replace(/[^A-Za-z0-9+/=]/g, '');
        const decoded = Buffer.from(cleaned, 'base64').toString('utf-8');
        res.status(200).send(decoded);
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
});



///////////////binary

app.get('/binary', (req, res) => {
    res.sendFile(__dirname + '/views/binary.html');
});

app.post('/binary-encode', (req, res) => {
    try {    
        const { encodevalue } = req.body;
        if (!encodevalue) return res.status(400).send('Bad request value is empty');
        const encoded = Array.from(Buffer.from(encodevalue))
        .map(byte => byte.toString(2).padStart(8,'0'))
        .join('')
        res.status(200).send(encoded);
    } catch(error) {
        res.status(500).send('Internal Server Error')
    }
});



app.post('/binary-decode', (req,res) => {
    try {
        const {decodevalue} = req.body;
        if(!decodevalue) return res.status(400).send('Bad request value is empty');
        const cleanad = decodevalue.replace(/[^0-1]/g, '') ;
        let bytes = [];
        
        if (cleanad.includes(' ')) {
            bytes = cleanad.trim().split(/\s+/)
        } else {
            for (let i = 0; i < cleanad.length; i += 8) {
                bytes.push(cleanad.slice(i, i + 8))
            }
        }
        bytes = bytes.map(b => b.padStart(8, '0'));

        const decoded = bytes
            .map(b => b.trim())
            .filter(b => b.length > 0)   // <-- düzeltildi
            .map(b => String.fromCharCode(parseInt(b, 2)))
            .join('')
        
        res.status(200).send(decoded)
} catch(error) {
    res.status(500).send('Internal Server Error')
}
});


////////////////////////////////hex
app.get('/hexadecimal', (req,res) => {
    res.sendFile(__dirname + '/views/hex.html')
});

app.post('/hex-encode', (req,res) => {
    try {
    const {encodevalue} = req.body;
    if(!encodevalue) return res.status(400).send('Bad request value is empty')
    const encoded = Buffer.from(encodevalue).toString('hex')
    res.status(200).send(encoded)
    }catch (error) {
        res.status(500).send('Internal Server Error')
    }
});


app.post('/hex-decode', (req,res) => {
    try {
        const {decodevalue} = req.body;
        const cleanad = decodevalue.replace(/[^0-9a-fA-F]/g, '')
        const decoded = Buffer.from(cleanad, 'hex').toString('utf-8')
        res.status(200).send(decoded)
    } catch(error) {
        res.status(500).send('Internal Server Error')
    }
});


////////////////////////////url
app.get('/url', (req,res) => {
    res.sendFile(__dirname + '/views/url.html')
});

app.post('/url-encode', (req,res) => {
    try {
        const {encodevalue} = req.body;
        if (!encodevalue) return res.status(400).send('Bad request value is empty');
        function urlencoder(str) {
        return encodeURIComponent(str)
        .replace(/!/g, "%21")
        .replace(/'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/\*/g, "%2A");
        }
        const encoded = urlencoder(encodevalue) 

        res.status(200).send(encoded)
    } catch(error) {
        res.status(500).send('Internal Server Error')
    } 
});


app.post('/url-decode', (req,res) => {
    try {
        const { decodevalue} = req.body;
        if(!decodevalue) return res.status(400).send('Bad request value is empty');
        const decoded = decodeURIComponent(decodevalue)
        res.status(200).send(decoded); 
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
});


/////////////////////rot13
app.get('/rot13',(req,res) => {
    try {
        res.sendFile(__dirname + '/views/rot13.html')
    } catch(error) {
        res.status(500).send('Internal Server Error')
    }
});

app.post('/rot13-encode', (req,res) => {
    try {
        const {encodevalue} = req.body;
        if (!encodevalue) return res.status(400).send('Bad request value is empty');

        const encoded = encodevalue.replace(/[a-zA-Z]/g, (c) => 
            String.fromCharCode(
                c.charCodeAt(0) + (c.toLowerCase() < 'n' ? 13 : -13)
            )   
        )
        res.status(200).send(encoded)
    } catch(error) {
        console.log(error) 
        res.status(500).send('IInternal Server Error')
    }
});

app.post('/rot13-decode', (req,res) => {
    try {
        const {decodevalue} = req.body;
        if(!decodevalue) return res.status(400).send('Bad request value is empty');
        
        const decoded = decodevalue.replace(/[a-zA-Z]/g, c => 
            String.fromCharCode(c.charCodeAt(0) +(c.toLowerCase() < 'n' ? 13 : -13))
        );
        res.status(200).send(decoded)
    } catch(error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
});


//////////////rot47

app.get('/rot47', (req,res) => {
    try {
        res.sendFile(__dirname + '/views/rot47.html')
    } catch(error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
});

app.post('/rot47-encode', (req,res) => {

    try {
        const {encodevalue} = req.body;
        if(!encodevalue) return res.status('400').send('Bad request value is empty');

        const encoded = encodevalue.replace(/[\x21-\x7E]/g, c => 
            String.fromCharCode(33 + ((c.charCodeAt(0) -33 + 47) % 94))
        );
        res.status(200).send(encoded)
    } catch (error) {
        console.log(error) 
        res.status(500).send('Internal Server Error')
    }
});


app.post('/rot47-decode', (req,res) => {
    try {
        const {decodevalue} = req.body;

        if(!decodevalue) return res.status(400).send('Bad request value is empty');

        const decoded = decodevalue.replace(/[\x21-\x7E]/g, c => 
            String.fromCharCode(33 + ((c.charCodeAt(0) - 33 - 47 + 94) % 94))
        );
        res.status(200).send(decoded)
    } catch(error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
}

});




app.listen(port, () => {
    console.log('Sunucu online http://localhost:' + port);
});
