# Include-tag
### neste repositoio voce vai encontrar um codigo bem simples que tem como objetivo permitir importar codigos html de outros arquivos para seu arquivo principal.

## como usar ❓
1. importe para seus arquivos.html o arquivo Include.js
```
<body>
    ...seu codigo
    <script src="caminho para o arquivo Include"></script>
</body>
```
<br>

2. Crie e exporte o elemento que deseja usar em outro arquivo
```
<body>
    <include type="export">
       ...inclua aqui tudo que deseja exportar 
    </include>
</body>
```
<br>

3. Adicione a tag <include ...> onde voce deseja incluir o elemento importado da seguinte maneira
```
<body>
    <include>
    <div>
        corpo do seu codigo
        <include src="/caminho/para/o/seu/arquivo" type="import"></include>
    </div>
    <script src="caminho para o arquivo Include"></script>
</body>
```

* ADENDOS ❗❗
  * Se o trecho de código exportado estiver sendo estilizado no próprio arquivo através de links ou da tag style, é necessário englobá-lo em uma tag include com o tipo ExportStyle. Como no exemplo abaixo:
```
<head>
    <include type="ExportStyle">
        <link ... href="./caminho/para/o/css"> 
        OU
        <style>
            ...seu css
        </style>
    </include>
</head>
<body>
    <include type="export">
       ...inclua aqui tudo que deseja exportar 
    </include>
</body>
```
    * Se o trecho for um script coloque ele edntro de um include com o type ExportScript como no exemplo abaixo:
```
<body>
    <include type="export">
       ...inclua aqui tudo que deseja exportar 
    </include>
    <include type="ExportScript">
        <script>
            seu script
        </script>
    </include> 
</body>
```

## Propriedades
* type:
  - import "usado para importar arquivos"
  - export "usado para exportar arquivos"
  - ExportStyle "usado para exportar os links dos arquivos de estilo"
* src:  "é o caminho para o arquivo onde vc esta exportando" 
