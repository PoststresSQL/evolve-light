# Ignited Local Deving Environment

This will be a boiler plate for full-time/contracted workers at Ignited Local can use to build out their client projects. The current process requires too much wasted time saving on our proprietary CMS, waiting for changes, reloading the test site, then finally seeing changes. I want to make the dev experience less tedious by incorporating React building since most of our contractors are coming from the Austin Coding Academy MERN stack. Using Create React App and React Snapshot for pre-rendering, the developers can build their site using CRAs JSX syntax then running the build script for React-Snapshot magic then copy and paste the rendered code into the CMS.

## Getting Started

- Open Terminal/Bash and clone the repo `git clone https://github.com/PoststresSQL/il-dev-env.git {NAME_OF_YOUR_PROJECT}`
- Remove the git remote `git remote remove origin`
- Add a remote to your project by copying the https link from the github repo. `git remote add origin {PASTE_YOUR_HTTPS_ADDRESS_HERE}`
- Confirm the remote by running `git remote -v` and make sure the remote points to your project repository
- Install Deps `yarn install` or `npm install`
- Start up the dev server `yarn start` or `npm start`
- CRA should open up the local site in your default browser; if it doesn't go to `localhost:3000`
- Build out your site using Bootstrap classes, premade components, and your own code
- Commit frequently! Try to make each commit Atomic and be clear with your commit messages.

## Creating Routes

There's a `routes.js` page where you'll add any routes you need in the dev server. You'll follow the convention of the dummy objects I already created. Subroutes for pages will go into a `subroutes` property which follows the same properties as a normal route. The routes will be mapped through generating your NavBar AND the routes. The app is pretty smart and will create Single Links for Routes without Subroutes and will create a dropdown for Routes WITH Subroutes.

## Importing into the CMS

- Once you're ready to bring the files into the CMS, run `yarn build` or `npm run build` scripts.
- A `build` repo will be generated with the static HTML files; copy and paste everything between div.main-container; including the div tags.
- Paste the code to the corresponding CMS pages.
