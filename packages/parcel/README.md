Status: broken

Reason: bls use of top-level await

```js
index.js:9 Uncaught ReferenceError: await is not defined
    at eXlPn.22aced23f78d6bd4 (index.js:9:5)
    at newRequire (index.6b815632.js:71:24)
    at localRequire (index.6b815632.js:84:35)
    at 7tAC9.d1c443b9e87ecf96 (utils.ts:1:1)
    at newRequire (index.6b815632.js:71:24)
    at localRequire (index.6b815632.js:84:35)
    at 4u6IA.mitt (index.ts:9:1)
    at newRequire (index.6b815632.js:71:24)
    at localRequire (index.6b815632.js:84:35)
    at kuM8f.877f26f5c5203d51 (app.ts:20:1)
```

See https://github.com/parcel-bundler/parcel/issues/4028

## Package export issues

Requires work-around.
See https://parceljs.org/features/dependency-resolution/#enabling-package-exports
