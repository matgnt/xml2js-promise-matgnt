const assert = require('assert');
const xml2js = require('../index');

const valid_xml = `
<?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Say language="DE-de" voice="woman">Test</Say>
</Response>`;

const invalid_xml = `
<?xml version="1.0" encoding="UTF-8"?>
    <Response>
`;

describe("xml2js with promise", () => {
    it("good xml", (done) => {
        xml2js(valid_xml)
            .then((result) => {
                assert.ok(result.Response.Say, "Say tag missing");
                done();
            })
            .catch((error) => {
                done(error);
            });
    });
    it("bad xml", (done) => {
        xml2js(invalid_xml)
            .then((result) => {
                done("We expected an error with an invalid XML!");
            })
            .catch((error) => {
                done();
            });

    });
});
