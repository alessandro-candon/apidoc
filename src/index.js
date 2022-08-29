#!/usr/bin/env node

const collection = require("./collection");
const collectionLib = require("./collection");
const openApiLib = require("./openapi");
const apiKey = process.env.POSTMAN_APIKEY;
const args = require('minimist')(process.argv.slice(3));
const command = process.argv[2];
const workspaceId = args['workspace-id'];
const collectionId = args['collection-id'];
const buildOpenApi = args['build-open-api'] || true;
const outPath = args['out'];

switch (command) {
  case 'collection.list':
    collection.getWorkspaces(apiKey, workspaceId).then(
      (workspace) => {
        workspace.collections.forEach(
          collection =>  {
            console.log(`\t* ${collection.name} => ${collection.uid}`);
          });
      });
      break;
  case 'collection.generate':
    collectionLib.createCollectionFile(outPath, apiKey, collectionId).then(
      collection => {
        if (buildOpenApi) {
          openApiLib.createOpenApiFile(outPath, collection);
        }
      });
    break;
  case 'help':
    console.log('Available commnads:')
    console.log('\tcollection.list --collection-id=xxxx');
    console.log('\tgenerate.apidoc --workspace-id=yyyy');
      break;
}
