# Dynamic Posts List Block

**Posts List Block** is a sample dynamic block that uses `WP_Query` and `getEntityRecords` to fetch latest posts. This block contains one option under the inspector control which is the ability to set the number of posts.

## Table of contents

* [Block Attributes](#changing-block-attributes)
  * [Block Name and Description](#block-name-and-description)
* [Block Display](#block-display)
* [Block Inspector](#block-inspector)

## Changing Block Attributes

You can easily change or add any block attributes on `block.json` file. This will automatically be applied on the `index.js` metadata call.

```bash
{
	"name": "{{namespace}}/postslist",
	"category": "common",
	"attributes": {
		"postsToShow": {
			"type": "number",
			"default": 6
		}
	},
	"supports": {
		"align": [ "wide", "full" ]
	}
}
```
[↑ Go up to Table of contents](#table-of-contents)

### Block Name and Description

You can change block name and description under `index.js`. Make sure to change the icon with your own preference as well.

```bash
title: __( 'Posts List', '{{textdomain}}' ),
description: __(
	'Display posts list with defined number of items to be shown.',
	'{{textdomain}}'
),
```

[↑ Go up to Table of contents](#table-of-contents)

## Block Display
Since this is a dynamic block, the frontend and editor view of the block are separated. The editor view is under the `edit.js` file with `editor.scss` for editor only styling.

The frontend view of the block is under the `index.php` file and `style.scss` for styling. I highly suggest the you use same CSS classnames in order to have better CSS targeting.

[↑ Go up to Table of contents](#table-of-contents)

## Block Inspector

You can set block settings under the `inspector.js`, please make sure that you add the attributes properly to avoid any error.

[↑ Go up to Table of contents](#table-of-contents)

**Do not hesitate to play on the block and settings**. This will make you understand the block registration and coding more. Thanks!