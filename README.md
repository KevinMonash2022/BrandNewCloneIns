# BrandNewCloneIns
 Instageram clone using Next js and Tailwind CSS

# All files are in folder ins-clone.


# Extentions in VScode

1. 	
ES7+ React/Redux/React-Native snippets

2.
Tailwind CSS IntelliSense

3.
Tabnine: AI Autocomplete & Chat for Javascript, Python, Typescript, PHP, Go, Java & more

# Preferences in VScode

1. Enable emmet in js and react

settings.json

{
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 500,
    "editor.formatOnSave": true,
    "editor.minimap.enabled": false,

    "emmet.includeLanguages": {
        "javascript": "html",
        "javascriptreact": "html"
    }
}


# @tailwindcss/forms

A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.

## Installation

Install the plugin from npm:

```sh
npm install -D @tailwindcss/forms
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
```


<p align="center">
  <a href="https://heroicons.com/#gh-light-mode-only" target="_blank">
    <img src="./.github/logo-light.svg" alt="Heroicons" width="300">
  </a>
  <a href="https://heroicons.com/#gh-dark-mode-only" target="_blank">
    <img src="./.github/logo-dark.svg" alt="Heroicons" width="300">
  </a>
</p>

<p align="center">
  Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS. <br>Available as basic SVG icons and via first-party <a href="#react">React</a> and <a href="#vue">Vue</a> libraries.
<p>

<p align="center">
  <a href="https://heroicons.com"><strong>Browse at Heroicons.com &rarr;</strong></a>
</p>

<p align="center">
    <a href="https://github.com/tailwindlabs/heroicons/releases"><img src="https://img.shields.io/npm/v/heroicons" alt="Latest Release"></a>
    <a href="https://github.com/tailwindlabs/heroicons/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/heroicons.svg" alt="License"></a>
</p>

## React

First, install `@heroicons/react` from npm:

```sh
npm install @heroicons/react
```

Now each icon can be imported individually as a React component:

```js
import { BeakerIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="h-6 w-6 text-blue-500" />
      <p>...</p>
    </div>
  )
}
```

The 24x24 outline icons can be imported from `@heroicons/react/24/outline`, the 24x24 solid icons can be imported from `@heroicons/react/24/solid`, the 20x20 solid icons can be imported from `@heroicons/react/20/solid`, and 16x16 solid icons can be imported from `@heroicons/react/16/solid`.

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@heroicons/react/24/outline/)


