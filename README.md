# API DOC
Use this repo for Italian API documentation.

## How to

Download and open postman, detect the workspace-id. It is neccessary to follow the command flow.


## How to use command

First operation, the POSTMAN TOKEN must be exported from Postman account settings =>

`
    export POSTMAN_APIKEY='PMAK-61e599eb8966c87f2ce482a8XXX';
`

Run it =>

```shell
    mkdir apidoc   
    src/index.js collection.generate --out=./apidoc/swagger --collection-id=11226263-98f53d21-17e4-4a05-af7d-xxx --build-open-api=false
```

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

#Install

If you want to install the script in another project use this tecnique :

```shell
npm install git+ssh://git@github.com:alessandro-candon/apidoc.git
```
