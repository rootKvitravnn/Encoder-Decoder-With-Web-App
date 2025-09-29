
document.addEventListener('DOMContentLoaded',() => {

        const encb64value   = document.getElementById('b64encvalue')
        const encformb64   = document.getElementById('b64encForm')
        const enctextb64   = document.getElementById('b64enctext')
        const errorb64    = document.getElementById('b64-error')

        if (enctextb64 && encformb64 && encb64value && errorb64) {
            encformb64.addEventListener('submit', async (e) => {
                e.preventDefault();
                const encodevalue = encb64value.value;

                if (!encodevalue)  return;
                
                try {
                    const response = await fetch('/base64-encode', {
                        
                        method: 'POST',
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        body: `encodevalue=${encodeURIComponent(encodevalue)}`
                        
                    });

                    if (!response.ok) throw new Error('Backend error');
                    if (response.ok) {
                    const result = await response.text();
                    enctextb64.innerText = result;
                    }
                } catch (error) {
-                    console.log(error)
                     errorb64.innerText = 'Error'
        
        }}           
    )};
});



document.addEventListener('DOMContentLoaded', () => {
    const b64decode = document.getElementById('b64decvalue');
    const decform = document.getElementById('b64decForm');
    const dectext = document.getElementById('b64dectext');
    const b64error  = document.getElementById('b64-error')

    if (b64decode && decform && dectext && b64error) {
        decform.addEventListener('submit', async (d) => {
            d.preventDefault();

            const decodevalue = b64decode.value;
            if(!decodevalue) return;

            try {
                const response = await fetch('/base64-decode', {
                    method:'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `decodevalue=${encodeURIComponent(decodevalue)}`
                })
                if(!response.ok) throw new Error('Backend Error');

                if(response.ok) {
                    const result = await response.text();
                    dectext.innerText = result;
                }
            } catch (error) {
                b64error.innerText = 'Error' 
                console.log(error)
        }}
    )};
});


document.addEventListener('DOMContentLoaded', () => {
    const encvalue01 = document.getElementById('01encvalue');
    const enctext01 = document.getElementById('enc-original');
    const encform01 = document.getElementById('01encForm');
    const error01 = document.getElementById('01-error');

    if(encvalue01 && encform01 && enctext01 && error01) {
        encform01.addEventListener('submit', async (e) => {
            e.preventDefault();
            const encodevalue = encvalue01.value;
            if(!encodevalue) return;
            try {
                const response = await fetch('/binary-encode', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `encodevalue=${encodeURIComponent(encodevalue)}`
                })
                if (!response.ok) throw new Error('Backend Error');

                if(response.ok) {
                    const result = await response.text()
                    enctext01.value = result;
                }
            } catch (error) {
                error01.innerText = 'Error'
                console.log(error)
        }}
    )};
});


document.addEventListener('DOMContentLoaded', () => {
    const decvalue01 = document.getElementById('01decvalue');
    const dectext01 = document.getElementById('01dectext');
    const decform01 = document.getElementById('01decForm');
    const error01 = document.getElementById('01-error');

    if(dectext01 && decvalue01 && error01 && decform01) {
        decform01.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const decodevalue = decvalue01.value;
            if(!decodevalue) return;
            if(!/^[01\s]+$/.test(decodevalue)) {
                dectext01.innerText = 'Only 0 and 1 are allowed'
                return;
            }
            try {
                const response = await fetch('/binary-decode', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `decodevalue=${encodeURIComponent(decodevalue)}`
                })
                if(!response.ok) throw new Error('Backend Error');
                if(response.ok) {
                    const result = await response.text();
                    dectext01.innerText = result;
                }
            } catch (error) {
                console.log(error)
                error01.innerText = 'Error';
        }}
    )};
});


document.addEventListener('DOMContentLoaded', ()  => {
    const hexvalue = document.getElementById('hexValue');
    const hexencode = document.getElementById('hexencode');
    const hexerror = document.getElementById('hex-error');
    const hexForm = document.getElementById('hexForm');

    if (hexvalue && hexencode && hexerror && hexForm) {
        hexForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const encodevalue = hexvalue.value;
            if(!encodevalue) return;

            try {
                const response = await fetch('/hex-encode', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `encodevalue=${encodeURIComponent(encodevalue)}`
                })
                if(!response.ok) throw new Error('Backend Error');

                if(response.ok) {
                    const result = await response.text()
                    hexencode.innerText = result;
                } 
            } catch(error) {
                hexerror.innerText = 'Error';
                console.log(error)
        }}
    );}
});


document.addEventListener('DOMContentLoaded', () => {
    const hexdeForm = document.getElementById('hexdeForm');
    const hexdecode = document.getElementById('hexdecode');
    const hexerror = document.getElementById('hex-error');
    const hexdevalue = document.getElementById('hexdeValue')

    if(hexdeForm && hexdecode && hexerror && hexdevalue) {
        hexdeForm.addEventListener('submit', async(e) => {
            e.preventDefault();
            const decodevalue = hexdevalue.value;
            if(!decodevalue) return;
            try {
                const response = await fetch('/hex-decode', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `decodevalue=${encodeURIComponent(decodevalue)}`
                })
                if(!response.ok) throw new Error('error');

                if(response.ok) {
                    const result = await response.text()
                    hexdecode.innerText = result
                }
            } catch (error) {
                hexerror.innerText = 'Error'
                console.log(error)
        }}
    )};
});

document.addEventListener('DOMContentLoaded', () => {
    const urlvalue = document.getElementById('urlValue');
    const urlForm = document.getElementById('urlForm');
    const urlerror = document.getElementById('url-error');
    const urlencoded = document.getElementById('urlencode');

    if(urlvalue && urlForm && urlerror && urlencoded) {
        urlForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            

            const encodevalue = urlvalue.value;
            if(!encodevalue) return;

            try {
                const response = await fetch('/url-encode', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `encodevalue=${encodeURIComponent(encodevalue)}`
                })
                if(!response.ok) throw new Error('backend-error');

                if(response.ok) {
                    const result = await response.text()
                    urlencoded.innerText = result;
                }
            } catch (error) {
                urlerror.innerText = 'Error'
                console.log(error)
        }}
    )};
});

document.addEventListener('DOMContentLoaded',  () =>{
    const decvalueurl = document.getElementById('urldecValue');
    const decFromurl = document.getElementById('urldecForm');
    const urldecoded = document.getElementById('urldecoded');
    const urlerror = document.getElementById('url-error');
    if (decvalueurl && decFromurl && urldecoded && urlerror) {
        decFromurl.addEventListener('submit', async(d) => {
            d.preventDefault();
            const decodevalue = decvalueurl.value;
            if(!decodevalue) return;

            try {
                const response = await fetch('/url-decode', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `decodevalue=${encodeURIComponent(decodevalue)}`
                })
                if(!response.ok) throw new Error('Backend error');

                if(response.ok) {
                    const result = await response.text()
                    urldecoded.innerText = result
                }
            } catch (error) {
                urlerror.innerText = 'Error'
                console.log(error)
        }}
    )};
});


document.addEventListener('DOMContentLoaded', () => {
    const rot13value = document.getElementById('rot13encValue');
    const rot13Form = document.getElementById('rot13encForm');
    const rot13encoded = document.getElementById('rot13enctext');
    const rot13error = document.getElementById('rot13-error')
    
    if (rot13value && rot13Form && rot13encoded && rot13error) {
        rot13Form.addEventListener('submit', async(e) => {
            e.preventDefault();

            const encodevalue = rot13value.value;
            if (!encodevalue) return;

            try {
                const response =  await fetch('/rot13-encode', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `encodevalue=${encodeURIComponent(encodevalue)}`
                })
                if(!response.ok) throw new Error('Backend error');
                if(response.ok) {
                    const result = await response.text()
                    rot13encoded.innerText = result;
                }
            } catch(error) {
                console.log(error)
                rot13error.innerText = 'Error'
        }}
    )};
});


document.addEventListener('DOMContentLoaded', () => {
    const rot13decForm = document.getElementById('rot13decForm');
    const rot13decvalue = document.getElementById('rot13decValue');
    const rot13decoded = document.getElementById('rot13decText');
    const rot13error = document.getElementById('rot13-error');

    if (rot13decForm && rot13decoded && rot13decvalue && rot13error) {
        rot13decForm.addEventListener('submit', async(d) => {
            d.preventDefault();

            const decodevalue = rot13decvalue.value;

            if(!decodevalue) return;

            try {
                const response = await fetch('/rot13-decode', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `decodevalue=${encodeURIComponent(decodevalue)}`
                })
                if(!response.ok) throw new Error('Backend error');

                if(response.ok) {
                    const result = await response.text()
                    rot13decoded.innerText = result;
                }
            } catch(error) {
                console.log(error)
                rot13error.innerText = 'Error'
        }}
    )};
});

document.addEventListener('DOMContentLoaded', () => {
    const rot47encForm = document.getElementById('rot47encForm');
    const rot47encoded = document.getElementById('rot47encText');
    const rot47encValue = document.getElementById('rot47encValue');
    const rot47error = document.getElementById('rot47-error');

    if(rot47encForm && rot47encoded && rot47encValue && rot47error) {
        rot47encForm.addEventListener('submit', async(e) => {
            e.preventDefault();

            const encodevalue = rot47encValue.value;
            if(!encodevalue) return;

            try {
                const response = await fetch('/rot47-encode', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `encodevalue=${encodeURIComponent(encodevalue)}`
                })
                if (!response.ok) throw new Error('backend error');

                if(response.ok) {
                    const result = await response.text()
                    rot47encoded.innerText = result;
                }
            } catch (error) {
                console.log(error)
                rot47error.innerText = 'Error'
        }}
    )};
});


document.addEventListener('DOMContentLoaded', () => {
    const rot47decForm = document.getElementById('rot47decForm');
    const rot47decValue = document.getElementById('rot47decValue');
    const rot47decoded = document.getElementById('rot47decText');
    const rot47error = document.getElementById('rot47-error');

    if (rot47decForm && rot47decValue && rot47decoded && rot47error) {
        rot47decForm.addEventListener('submit', async(d) => {
            d.preventDefault()
            const decodevalue = rot47decValue.value;
            
            if(!decodevalue) return;
            
            try {
                const response = await fetch('/rot47-decode', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `decodevalue=${encodeURIComponent(decodevalue)}`
                })
                if(!response.ok) throw new Error('backend error');

                if(response.ok) {
                    const result = await response.text()
                    rot47decoded.innerText = result;
                }
            } catch(error) {
                console.log(error)
                rot47decoded.innerText = 'Error'
        }}
    )};
});


