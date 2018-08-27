# Xiti Smarttags plugin

UMD Library wrapper for [xiti's smarttag](https://developers.atinternet-solutions.com/javascript-en/getting-started-javascript-en/tracker-initialisation-javascript-en/) javascript library


## Getting started

#### Install
```console
   npm i xiti-smarttag-plugin
   yarn add xiti-smarttag-plugin 
```
or inline script
```html
   <script src="https://unpkg.com/xiti-smarttag-plugin@1.0.0/lib/SmarttagPlugin.js"></script>
```
#### Usage
In es6 project
```js

   import SmarttagPlugin from 'xiti-smarttag-plugin';
   const tag = new SmarttagPlugin('XXXXXX'/*at internet site id*/); 
   
```
or when it's loaded inline script
```html
  <html>
  <head>
    <title>testing tags</title>
    <script src="https://unpkg.com/xiti-smarttag-plugin@1.0.0/lib/SmarttagPlugin.js"></script>
  </head>
  <body>
  <h1>title</h1>
  <script>
    var tag = new window.SmarttagPlugin('XXXXXX');
  </script>
  </body>
  </html>
```

Click hit

```js
   tag.sendClick({elem: this,
                  name: 'clickName',
                  level2: 'clickLvl2',
                  type: 'navigation',
                  event: event
   }); //this is the xiti object
```

Page hit

```js
   tag.sendPage({name:'pageName',
                 chapter1:'chap1',
                 chapter2:'chap2',
                 chapter3:'chap3'
   }); //this is the xiti object
```




