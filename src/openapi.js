const postmanToOpenApi = require("postman-to-openapi");

const createOpenApiFile = (outPath, collection) => {
  const options = {
    auth: {
      oAuth2: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'A resource owner JWT',
        description: 'OAuth2 JWT token'
      },
    },
    servers: [
      {
        url: 'https://api.preprod.decathlon.net',
        description: 'PreProduction environment server'
      },
      {
        url: 'https://api.preprod.decathlon.net',
        description: 'Production environment server'
      }
    ]
  };

  const rawCollectionJson = JSON.stringify(collection);
  postmanToOpenApi(rawCollectionJson, `${outPath}.yaml`, options);
}

exports.createOpenApiFile = createOpenApiFile;
