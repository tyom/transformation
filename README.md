# Static site generator for Transformation page

The static site is built with [Metalsmith](http://www.metalsmith.io/) which being a Node app allows us to configure
our front-end assets similar to how they are configure for other sites/applications, using [nhsuk/frontend](https://github.com/nhsuk/frontend).

## Installation

First install Yarn globally:

```bash
npm install -g yarn
```

Then install app’s dependencies. In app’s directory run:

```bash
yarn
```

## Development

To run local server:

```bash
yarn serve
```

To build assets:

```bash
yarn build
```

This will build portable static site in `build/` directory. 

## Deployment

The static site is deployed to `gh-pages` branch which automatically appear on project’s repo pages
http://nhsuk.github.io/transformation/

To deploy the site run:

```bash
yarn deploy
```

Which will build local version and push the contents of `build/` directory to [`gh-pages`](https://github.com/nhsuk/transformation/tree/gh-pages).
There is no confirmation so use with caution. You can always rebuild and redeploy an earlier version.
