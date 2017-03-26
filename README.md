# Introduction
Simple wrapper around xml2js to return a Promise.

# Install
```
npm install https://github.com/matgnt/xml2js-promise-matgnt.git
```

# Usage
```
const xml2js = require('xml2js-promise-matgnt');

const valid_xml = '...';
xml2js(valid_xml)
    .then((jsonResult) => {
        console.log(jsonResult);
    })
    .catch((error) => {
        console.error(error);
    });

```

# Test
```
npm test
```