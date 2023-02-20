# My Portfolio

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/alexjcm/portfolio) [![Publish docker image (CI)](https://github.com/alexjcm/portfolio/actions/workflows/publish-docker-image.yml/badge.svg?branch=main)](https://github.com/alexjcm/portfolio/actions/workflows/publish-docker-image.yml)

## Prerrequisites

NodeJS 14

## Installation

Clone or download this repository:

```
git clone https://github.com/alexjcm/portfolio.git
```

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

```bash
docker build -t alexjcm/portfolio -f docker/DockerfilePro .
```

Or

```bash
docker pull alexjcm/portfolio
```

Start container:

```bash
docker run --rm -d -p 3000:80 --name my-portfolio alexjcm/portfolio
```

Stop container:

```bash
docker stop my-portafolio
```

## Conventional commits

To view the convention used for commit messages, [click here](https://gist.github.com/alexjcm/6cc0a0a1ed96c85675a9d92706e1099d)

## License

[MIT licensed](./LICENSE).
