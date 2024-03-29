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


# minifaker

Generate fake data.  
An alternative to faker.js with both esm and cjs syntax
<https://github.com/Marak/faker.js>

## NPM

`npm i minifaker`

## Supported locales

`en` | `fr`, `fr-CA` | `es`

# Fake user image
https://pravatar.cc/

# tailwind-scrollbar
https://www.npmjs.com/package/tailwind-scrollbar?activeTab=readme
npm i tailwind-scrollbar

# NextAuth
https://next-auth.js.org/getting-started/example
NextAuth.js
## Install NextAuth
1. npm install next-auth
## Add API route
To add NextAuth.js to a project create a file called [...nextauth].js in pages/api/auth. This contains the dynamic route handler for NextAuth.js which will also contain all of your global NextAuth.js configurations.

If you're using Next.js 13.2 or above with the new App Router (app/), you can initialize the configuration using the new Route Handlers by following our guide.


import NextAuth from "next-auth"
import GoogelProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)



All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.

# Firebase google
https://firebase.google.com/?gad_source=1&gclid=Cj0KCQiAxOauBhCaARIsAEbUSQS1CVwGDU2mAYpmdAojjSxHS4UWmpAAoBGiC5wFu80KsOzLE2B2xKUaAhe2EALw_wcB&gclsrc=aw.ds

## Add Firebase SDK

Use npm

Use a <script> tag
If you're already using NPM and a module bundler such as webpack or Rollup, you can run the following command to install the latest SDK (Learn more):

npm install firebase
Then, initialise Firebase and begin using the SDKs for the products that you'd like to use.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe-X3-YAUoaJ1Es6aujAgEDXMFyvsKHDQ",
  authDomain: "ins-clone-kaixin-v1.firebaseapp.com",
  projectId: "ins-clone-kaixin-v1",
  storageBucket: "ins-clone-kaixin-v1.appspot.com",
  messagingSenderId: "809511987946",
  appId: "1:809511987946:web:45db0e57110e3ccbf00593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
Note: This option uses the modular JavaScript SDK, which provides a reduced SDK size.


# Google Cloud
APIs and services

## OAuth consent screen
external

app name:
kaixin-clone
user support email:
****
Authorised domains:
ins-clone-kaixin-v1.firebaseapp.com
developer contract information:
****

## Credentials
Name:
ins-clone-v1

Authorised JavaScript origins:
http://localhost
https://ins-clone-kaixin-v1.firebaseapp.com
http://localhost:5000
http://localhost:3000

Authorised redirect URIs
http://localhost:3000/api/auth/callback/google


# Recoil
## Instalation
npm install recoil

## RecoilRoot
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

Paste these code to _app.js file.

## Atom
An atom represents a piece of state. Atoms can be read from and written to from any component. Components that read the value of an atom are implicitly subscribed to that atom, so any atom updates will result in a re-render of all components subscribed to that atom:

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
Components that need to read from and write to an atom should use useRecoilState() as shown below:

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}