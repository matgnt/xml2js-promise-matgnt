const parseString = require('xml2js').parseString;

/**
 * Simple wrapper to make the xml2js Promise ready.
 * Input is a xml string.
 * Resolves in a proper JSON result, or rejects with the error message.
 */
module.exports = function(xml) {
    return new Promise((resolve, reject) => {
        parseString(xml, function (error, result) {
            if(error) {
                reject(error);
            }

            resolve(result);
        });
    });
};