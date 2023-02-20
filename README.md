# My Portfolio

[![Build](https://github.com/alexjcm/portfolio/actions/workflows/build.yml/badge.svg)](https://github.com/alexjcm/portfolio/actions/workflows/build.yml) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

## Prerrequsites

NodeJS 14

## Installation

### `npm install`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment with docker

Start container:

```
docker build -t portfolio -f DockerfileProLite .
docker run --rm -d -p 8080:80 --name my-portfolio portfolio

#docker-compose -f docker-compose-prod.yml up --build -d
```

Stop container:

```
docker stop portafolio
#docker-compose -f docker-compose-prod.yml down -v --remove-orphans
```

## Conventional commits

[Commit messages conventions](https://gist.github.com/alexjcm/6cc0a0a1ed96c85675a9d92706e1099d)

### License

[MIT licensed](./LICENSE).
