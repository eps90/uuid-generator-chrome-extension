# UUID Generator Chrome Extension
[![Build](https://github.com/eps90/uuid-generator-chrome-extension/actions/workflows/test.yml/badge.svg?branch=master&event=push)](https://github.com/eps90/uuid-generator-chrome-extension/actions/workflows/test.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/f6e975f002f0452b997f0d137ec60256)](https://www.codacy.com/gh/eps90/uuid-generator-chrome-extension/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=eps90/uuid-generator-chrome-extension&amp;utm_campaign=Badge_Grade)

## About

How many times have you needed to quickly generate UUID, for example, for test purposes?
Probably each time you opened a web page with online generator, copy and paste into your code. 
Then, when you need another one, you had to open this page or refresh, copy and paste it, probably loosing focus on what you've been doing so far.

The main goal of this project is to provide quick way to generate new UUIDs. 
The initial stage, the Google Chrome Extension, seems to be the easiest way to invoke the generator without need to switch a work context.

More features coming soon!

## Installation

Feel free to install the extension from Google Chrome WebStore:

[![UUID generator Chrome Extension](https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/UV4C4ybeBTsZt43U4xis.png)](https://chrome.google.com/webstore/detail/uuid-generator/nflgkajcbjiooanofomjjaagkaednbel) 

## Development

You can choose whether you'd like to develop the extension locally or with docker.

### Locally

**Requirements:**

* Node.js 14+

Install npm dependencies and run following scripts to develop the project:
```bash
# Install dependencies
npm install

# Run the app locally
npm start
```

#### Building the project

```bash
npm run-script build
```

#### Running the tests
Unit tests
```bash
npm test
```

The project uses [Cypress](https://www.cypress.io/) to run browser e2e tests. 
You can run them locally manually having the app started with `npm start` with:
```bash
npx cypress open
```
Or just run all the test with:
```bash
npx cypress run
```

For more details on how to use the Cypress, please refer to their [docs](https://docs.cypress.io/guides/guides/command-line).

### With docker-compose

First you need to install dependencies:

```bash
docker-compose run node npm install
```

### Google Analytics tracking

This project provides a very simple Google Analytics page views and events tracing.
Following events are registered:

| Event (category/action) | Labels | Description |
| --- | --- | --- |
| **UI/MODE_SELECT** | <ul><li>SINGLE</li><li>MULTI</li>no :pno</ul> | Switching between generation screens |
| **UI/REFRESH** | ~ | New single UUID generation |
| **UI/COPY** | ~ | Copying single UUID using copy the button |
| **UI/REFRESH_MULTI** | SIZE=x | Multi UUID generation with specified size |
| **UI/COPY_MULTI** | SIZE=x | Copying multiple UUID using copy the button |
| **UI/OPTION_SELECT** | E.g. <ul><li>SIZE=x</li><li>SEPARATORS=comma,newline</li><li>SEPARATORS=nothing</li><li>QUOTES=single</li></ul> | Selecting an option in multi generation screen |
| **LINK/CLICK** | ~ | Clicking the external link in the footer



You can configure your tracking key by putting it into `.env.local` file (see `.env` for the example and [how to use environment variables in React Apps](https://create-react-app.dev/docs/adding-custom-environment-variables))
## Contributing
Please read CONTRIBUTING.md for details on the code of conduct, and the process for submitting pull requests.
