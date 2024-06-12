const fs = require('fs');
const {createOpenApiFile} = require("../src/openapi");
test('Test postman to openApi conversion', async () => {
    const collection = fs.readFileSync('tests/resources/apidoc.json', 'utf8');
    const jsonCollection = JSON.parse(collection);
    const result = await createOpenApiFile('tests/resources/openapi_apidoc', jsonCollection);
});