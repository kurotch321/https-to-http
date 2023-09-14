# https-to-http

## What is this?

This is a simple server that simply redirects https to http.
For example: Accessing https://server.example.com/index.html will redirect to http://server.example.com/index.html.

## How to use

### Step 1: Clone this repository

```bash
git clone https://github.com/nekodayo2222/https-to-http.git
cd https-to-http
```

### Step 2: Place your certificate files

Place your certificate files and private key files in the same directory as `server.js`.

### Step 3: Edit `config.json`

Edit `config.json` to your settings.

```json
{
    "port": 443,
    "cert": "example.crt",
    "key": "example.key"
}
```

### Step 4: Install dependencies

```bash
npm install --production
```

### Step 5: Run

```bash
npm start
```