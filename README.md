# Font Teritorio Map

A map icon font set by [Teritorio](teritorio.fr).

## Font Demo

Last release demo :
- https://unpkg.com/@teritorio/font-teritorio/teritorio/teritorio.html

## Usage

```html
<link rel="stylesheet" type="text/css" href="teritorio.css" />

<i class="teritorio teritorio-accessories"></i>
```

Font available from `teritorio` directory and as [NPM package](https://www.npmjs.com/package/@teritorio/font-teritorio).

## Build

```
bash ./scripts/update.sh
```

## Publish

```
$ git checkout master
$ npm version minor -m "release: %s"
$ git push --follow-tags
$ npm publish
```

## Author

[Teritorio](https://teritorio.fr)

## License

[SIL](LICENSE.md)
