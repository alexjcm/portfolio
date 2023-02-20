# My Portfolio

[![Build](https://github.com/alexjcm/portfolio/actions/workflows/build.yml/badge.svg)](https://github.com/alexjcm/portfolio/actions/workflows/build.yml) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) [![Commit Message Check](https://github.com/alexjcm/portfolio/actions/workflows/commit-message-check.yml/badge.svg?branch=main)](https://github.com/alexjcm/portfolio/actions/workflows/commit-message-check.yml)

## Prerrequsites

NodeJS 14

## Installation

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment with docker

Build image:

```
docker build -t portfolio -f docker/DockerfileProLite .
```

Start container:

```
docker run --rm -d -p 3000:80 --name my-portfolio portfolio

#docker-compose -f docker-compose-prod.yml up --build -d
```

Stop container:

```
docker stop portafolio
#docker-compose -f docker-compose-prod.yml down -v --remove-orphans
```

## Conventional commits

To view the convention used for commit messages, [click here](https://gist.github.com/alexjcm/6cc0a0a1ed96c85675a9d92706e1099d)

### License

[MIT licensed](./LICENSE).
