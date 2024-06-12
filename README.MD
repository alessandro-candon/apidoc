# Install
If you want to install the cli :

```shell
npm install git+ssh://git@github.com:alessandro-candon/apidoc.git
```

# Testing the CLI during development
If you want to test the cli during development you can use this command :

```shell
  npm link --force
```

and then run the command :

```shell
  apidoc help
```

you should receive this output:

Available commnads:
    postman.collection.list --postmanCollection-id=xxxx
    postman.collection.generate --workspace-id=yyyy
    bruno.collection.generate


# From Postman to OpenApi

## How to
Download and open postman, detect the workspace-id. It is neccessary to follow the command flow.

## How to use command
First operation, the POSTMAN TOKEN must be exported =>

`
    export POSTMAN_APIKEY='PMAK-61e599eb8966c87f2ce482a8XXX';
`

## Output folder
All the generated files will be stored in `apidoc` folder.
To view all collections inside a worksapce you can yse this command :
```shell
apidoc collection.list --workspace-id=11226263-a63725ba-c689-4cc9-xxxx
```
and the output will be :

```text
    * Name => uuid
```

If you want to generate a apidoc in both formats (openapi / postman) use:

```shell
apidoc collection.generate --out=/Users/alessandro/Desktop/swagger --collection-id=11226263-a63725ba-c689-4cc9-xxxx
```

If you want to generate only the postman-collection use this command :

```shell
apidoc collection.generate --out=/Users/alessandro/Desktop/swagger --collection-id=11226263-a63725ba-c689-4cc9-xxxx --build-open-api=false
```


# From Bruno API to OpenApi

## How to
First of all you need to export bruno's collection to a PostmanCollection
Then you can use absolute paths to generate new OpenApi file.

This is an example of command :

```shell
apidoc bruno.collection.generate --out=tests/resources/openapi_apidoc --in=tests/resources/apidoc.json
```
