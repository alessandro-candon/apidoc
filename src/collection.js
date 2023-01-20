const axios = require('axios').default;
const fsPromises = require('fs').promises;
const fs = require('fs');
const {thrownError} = require("./thrown-error");

const createCollectionFile = async (out, apikey, collectionUid) => {

  if (!out) {
    thrownError("You should set --out folder");
  }

  if (!collectionUid) {
    thrownError("You should set --collection-id folder");
  }

  let responseCollection = await axios.get(`https://api.getpostman.com/collections/${collectionUid}`, {
    params: {
      apikey
    }
  });

  const rawCollectionJson = JSON.stringify(responseCollection.data);

  await fsPromises.writeFile(`${out}.json`, rawCollectionJson, (err) => {
    if (err) {
      thrownError(err.message);
    }
  });
  return responseCollection.data.collection;
}


const getWorkspaces = async (apikey, workspaceId) => {
  let workspace = await axios.get(`https://api.getpostman.com/workspaces/${workspaceId}`, {
    params: {
      apikey
    }
  });
  return workspace.data.workspace;
}


exports.createCollectionFile = createCollectionFile;
exports.getWorkspaces = getWorkspaces;
