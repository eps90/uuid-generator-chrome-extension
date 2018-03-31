# UUID Generator Chrome Extension

[![Build Status](https://travis-ci.org/eps90/uuid-generator-chrome-extension.svg?branch=master)](https://travis-ci.org/eps90/uuid-generator-chrome-extension)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8f1ccbacb113428abd419ebaf0a060af)](https://www.codacy.com/app/eps90/uuid-generator-chrome-extension?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=eps90/uuid-generator-chrome-extension&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/8f1ccbacb113428abd419ebaf0a060af)](https://www.codacy.com/app/eps90/uuid-generator-chrome-extension?utm_source=github.com&utm_medium=referral&utm_content=eps90/uuid-generator-chrome-extension&utm_campaign=Badge_Coverage)
[![CircleCI](https://circleci.com/gh/eps90/uuid-generator-chrome-extension.svg?style=svg)](https://circleci.com/gh/eps90/uuid-generator-chrome-extension)

## About

How many times have you needed to quickly generate UUID, for example, for test purposes?
Probably each time you opened a web page with online generator, copy and paste into your code. 
Then, when you need another one, you had to open this page or refresh, copy and paste it, probably loosing focus on what you've been doing so far.

The main goal of this project is to provide quick way to generate new UUIDs. 
The initial stage, the Google Chrome Extension, seems to be the easiest way to invoke the generator without need to switch a work context.

More features coming soon!

## Installation

Feel free to install the extension from Google Chrome WebStore:

[![UUID generator Chrome Extension](https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_206x58.png)](https://chrome.google.com/webstore/detail/uuid-generator/nflgkajcbjiooanofomjjaagkaednbel) 

## Development

You cam choose whether you'd like to develop the extension locally or with docker.

### Locally

**Requirements:**

* Node.js 8+
* Yarn or NPM

Install npm dependencies and run following scripts to develop the project:
```bash
# Install dependencies
npm install     # if you use NPM
yarn inatall    # if you use Yarn

# Run the dev-server
npm start       # if you use NPM
yarn start      # if you use Yarn
```

#### Building the project

```bash
# Build the development version of the project
npx build:dev   # if you use NPM
yarn build:dev  # if you use Yarn

# Build the development version and watch for the file changes
npx build:dev -- --watch    # if you use NPM
yarn build:dev --watch      # if you use Yarn
```

#### Build the production package

Running the following script will generate a ZIP file with a package ready to deploy:

```bash
npx build:prod      # if you use NPM
yarn build:prod     # if you use yarn
```

You'll find a `uuid_generator.zip` file in `build` directory.

### With docker-compose

First you need to install dependencies:

```bash
docker-compose run node yarn install
```

Then you can run the same commands above via docker-compose:

```bash
docker-compose run node yarn build:dev --watch
# etc...
```

### Google Analytics tracking

This project provides a very simple Google Analytics page views and events tracing.
Following events are registered:

* **UI/REFRESH** - sent when new UUID is generated
* **UI/COPY** - sent when UUID is copied from the UI
* **LINK/CLICK** - sent when link is clicked the from the UI level

You can configure your tracking key by putting it into `.env` file (see `.env.dist` for the example)
## Contributing
Please read CONTRIBUTING.md for details on the code of conduct, and the process for submitting pull requests.
