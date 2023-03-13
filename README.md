# My Portfolio Frontend with React.js

[![Publish docker image (CI)](https://github.com/alexjcm/portfolio/actions/workflows/publish-docker-image.yml/badge.svg?branch=main)](https://github.com/alexjcm/portfolio/actions/workflows/publish-docker-image.yml) [![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/alexjcm/portfolio) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) 

## Features

- Production ready Dockerfile
- Linting with Eslint 8
- Format code with Prettier
- ES6+ features with babel (including es6 import/export feature).
- Transpile with Babel 7
- Bundle with Webpack 5

## Prerrequisites

- NodeJS 14
- [portfolio-ws](https://github.com/alexjcm/portfolio-ws) (Optional)

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
docker run --rm -d -p 3000:80 --name portfolio alexjcm/portfolio
```

Stop container:

```bash
docker stop portfolio
```

## TODO

- Fix warnings when excute npm run build
- Test cases written with karma and jasmine

## Conventional commits

To view the convention used for commit messages, [click here](https://gist.github.com/alexjcm/6cc0a0a1ed96c85675a9d92706e1099d)

## License

[MIT licensed](./LICENSE).
