# WordPress Gutenberg Block Plugin Builder

A foundation for WordPress Gutenberg blocks plugin development that aims to provide clear and concise guide for building your first block plugin.

## Table of contents

* [Installation](#installation)
  * [Setup](#setup)
* [Development](#development)
  * [Available Commands](#available-commands)
* [Contribute](#contribute)

## Installation

**WP Block Builder** is available through npm.

```sh
$ npx wp-block-builder
```

[↑ Go up to Table of contents](#table-of-contents)

### Setup

Series of questions will automatically be asked via CLI with regards to plugin information such as folder and plugin name, etc.

```sh
? The block slug used for identification (also the plugin and output folder name):
? The internal namespace for the block name (something unique for your products):
? The display title for your block:
? The short description for your block (optional):
? The name of the plugin author (optional). Multiple authors may be listed using commas:
? The short name of the plugin’s license (optional):
? The current version number of the plugin:
```

[↑ Go up to Table of contents](#table-of-contents)

## Development

All the required npm and composer packages will be automatically installed after the setup questions. This WordPress blocks plugin configuration is the one I've been using and it battle-tested. This config comes with:

📦 Multiple Gutenberg blocks sample

	- **Posts List**: a dynamic gutenberg block that displays configurable number of posts with title, featured image, post meta and excerpt. This block provides extensive code resources when it comes to building dynamic gutenberg block.
	- **Custom Container**: regular sample block using `InnerBlocks`. This block will let you follow the usage of inner blocks and custom color supports.

👨‍💻 PostCSS ready

	* easily add both editor and frontend styling via configured `wp-scripts`. Both sample blocks are showing how to include the `.scss` files which will automagically be generated on the `builds` folder.

🇵🇭 Translation ready

	* `languages` folder will automatically be generated on `npm build` or `npm makepot`. Both `.php` and `.js` files will be included on the translation process.

✅ ESLint, Stylint and Prettier configurations

	* WordPress standards for CSS and JS formatting are included with auto fixing configuration via `npm run lint:js-fix` or `npm run lint:css-fix`.

🔃 Browser-sync live reload

	* Live reloading is also available with configurable `local.json` file to easily add your WordPress website link.

```sh
{ "devURL": "http://icebergtest.local/wp-admin/post.php?post=5617&action=edit" }
```

📃 PHP file WordPress coding standards

	* WordPress coding standards check for `.php` files is also configure via composer. Just run `composer run format` to check which one needs changing.

⚙️ WebPack configurations

	* `webpack.config.js` is available for you to easily extend it with your own configs.

[↑ Go up to Table of contents](#table-of-contents)

## Available Commands

Inside that bootstrapped directory _(it doesn't apply to `es5` template)_, you can run several commands:

```bash
$ npm start
```
Starts the build for development. [Learn more](/packages/scripts#start).

```bash
$ npm run build
```
Builds the code for production. [Learn more](/packages/scripts#build).

```bash
$ npm run format:js
```
Formats JavaScript files. [Learn more](/packages/scripts#format-js).

```bash
$ npm run lint:css
```
Lints CSS files. [Learn more](/packages/scripts#lint-style).

```bash
$ npm run lint:css-fix
```
Check and auto apply Stylelint fixes on CSS files. [Learn more](/packages/scripts#lint-style).

```bash
$ npm run lint:js
```
Lints JavaScript files. [Learn more](/packages/scripts#lint-js).

```bash
$ npm run lint:js-fix
```
Check and auto apply ESlint fixes on JS files. [Learn more](/packages/scripts#lint-js).

```bash
$ npm run makepot
```
Generate language translations for PHP and JS files.

```bash
$ npm run packages-update
```
Updates WordPress packages to the latest version. [Learn more](/packages/scripts#packages-update).

[↑ Go up to Table of contents](#table-of-contents)

## Contribute

Your contributions and [support tickets](https://github.com/phpbits/wp-block-builder/issues) are welcome. Please see our [guidelines](https://github.com/phpbits/wp-block-builder/blob/master/.github/CONTRIBUTING.md) before submitting a pull request.

## Credits

- [@wordpress/create-block](https://github.com/WordPress/gutenberg/blob/master/packages/create-block/README.md)
- [editorskit](https://github.com/phpbits/block-options)