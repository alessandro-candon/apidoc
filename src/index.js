#!/usr/bin/env node

const postmanCollection = require("./postman_collection");
const postmanCollectionLib = require("./postman_collection");
const openApiLib = require("./openapi");
const {thrownError} = require("./thrown-error");

const scriptExecutedDir = process.cwd();
const fs = require("fs");
const {createOpenApiFile} = require("./openapi");
let dotenvValues = {};
const dotEnvPath = `${scriptExecutedDir}/.env`;
if (fs.existsSync(dotEnvPath)) {
  dotenvValues = require('dotenv').parse(fs.readFileSync(dotEnvPath, 'utf-8'));

}


let apiKey = process.env.POSTMAN_APIKEY || dotenvValues['POSTMAN_APIKEY'];
const args = require('minimist')(process.argv.slice(3));
const command = process.argv[2];
const workspaceId = args['workspace-id'];
const collectionId = args['postmanCollection-id'] || dotenvValues['COLLECTION_ID'];
const buildOpenApi = args['build-open-api'] || true;
const outPath = args['out'];
const inPath = args['in'] || null;

if (!apiKey) {
  thrownError('Please set the POSTMAN API KEY to continue');
}

const run = () => {
  switch (command) {
    case 'postman.collection.list':
      postmanCollection.getWorkspaces(apiKey, workspaceId).then(
          (workspace) => {
            workspace.collections.forEach(
                collection => {
                  console.log(`\t* ${collection.name} => ${collection.uid}`);
                });
          });
      break;
    case 'postman.collection.generate':
      postmanCollectionLib.createCollectionFile(outPath, apiKey, collectionId).then(
          async collection => {
            if (buildOpenApi) {
              await openApiLib.createOpenApiFile(outPath, collection);
            }
          });
      break;
    case 'bruno.collection.generate':
        if (!inPath) thrownError("Please provide the input file path");
        const collection = fs.readFileSync(inPath, 'utf8');
        const jsonCollection = JSON.parse(collection);
        createOpenApiFile('tests/resources/openapi_apidoc', jsonCollection)
            .then(_ => console.log('OpenApi file created'))
            .catch(e => console.error('OpenApi cration failed', e));
        break;
    case 'help':
      console.log('Available commnads:')
      console.log('\tpostman.collection.list --postmanCollection-id=xxxx');
      console.log('\tpostman.collection.generate --workspace-id=yyyy');
      console.log('\tbruno.collection.generate');
      break;
    default:
        console.error('Unknown command');
  }
}


run();