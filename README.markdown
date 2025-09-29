# Encoder-Decoder-Web-App

A simple, secure web app for encoding/decoding text in Base64, Binary, Hex, URL, ROT13, and ROT47 formats

## Features
- Encode/decode multiple formats: Base64, Binary, Hex, URL, ROT13, ROT47.
- Responsive: Works on all devices.
- Free: No registration needed.

## Installation
1. Clone repo:
   ```bash
   git clone https://github.com/rootKvitravnn/Encoder-Decoder-Web-App.git
   ```
2. Enter directory:
   ```bash
   cd Encoder-Decoder-Web-App
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start server:
   ```bash
   node script.js
   ```
5. Visit `http://localhost:3333`.

## Structure
```
Encoder-Decoder-Web-App/
├── public/
│   └── front.js
├── views/
│   ├── index.html
│   ├── base64.html
│   ├── binary.html
│   ├── hex.html
│   ├── url.html
│   ├── rot13.html
│   └── rot47.html
├── script.js
├── package.json
├── .gitignore
└── README.md
```

## Dependencies
- `express`: Web server
- `body-parser`: Request parsing

## Usage
- Go to `http://localhost:3333`.
- Choose a format (e.g., Base64).
- Enter text, submit to encode/decode.

## License
MIT License