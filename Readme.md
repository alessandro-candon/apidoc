# API DOC
Use this repo for Italian API documentation.

## How to

Download and open postman.

Import the collection and environment:

![Import](doc/import.png)


## How to use command

First operation, the POSTMAN TOKEN must be exported =>

`
    export POSTMAN_APIKEY='PMAK-61e599eb8966c87f2ce482a8XXX';
`

## Output folder

All the generated files will be stored in `apidoc` folder.

To view all collections inside a worksapce you can yse this command :
```shell
list-collections 2d97daf8-c97b-4c10-8b6f-bf816a843c92 
```
and the output will be :

```text
    * ProductNatureLocal => 920f51a7-a914-4e99-bd55-224498a4c12a
    * [DKTRENT] catalogue => 521c99e4-e125-40bb-afab-716856c006f2
    * [DKTRENT] availability => 65bd8338-28d8-4844-be04-6dfc65a9543b
    * [DKTRENT] core => 0680e039-593c-43f4-b357-6b12206e2063
    * [MasterData] => deb5bd4e-1271-4b26-9d23-9d6ecebe37a1
    * [DICTIONARIES] => f32923b1-d7b6-49af-9a43-1ca2de8df754
    * [OneCatalog] => ece5ddf7-16a9-4bac-993b-a837b2cb5604
    * [Member] EmployeeV2 => 646a8e71-07d0-4e92-b1b1-2ac24333542b
    * @deprecated [DKTRENT] back-sport => 53715bbe-e5cd-4654-b02b-5deb2c839357
```

If you want to generate a apidoc in both formats (openapi / postman) use:

```shell
 generate-collection 521c99e4-e125-40bb-afab-716856c006f2
```

If you want to generate only the postman-collection use this command :

```shell
 generate-collection 521c99e4-e125-40bb-afab-716856c006f2 false
```

#Install

If you want to install the script in another project use this tecnique :

```shell
npm install git+ssh://git@github.com:dktunited/italy-apidoc.git
```
