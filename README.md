# gatsby-starter-styled-ts

This starter was based on the source code of my [personal blog/website](https://github.com/diegocoxta/diegocosta.me) and aims to accelerate the development of new projects by keeping the dependencies I like to use configured.

## 🖥️ Tech Stack

- Built with Styled Components and TypeScript.
- Includes a test suite using Jest and Testing Library.
- Also configured with ESLint, Prettier, stylelint, Husky, lint-staged, and [more](package.json).
- This starter features two GitHub Actions - one for maintaining updated dependencies and another for deploying the project as GitHub Pages.

## :clipboard: Requirements

This project requires [Node.js 18](https://nodejs.org/en/) or higher and [yarn](https://yarnpkg.com/) as package manager.

## :dart: Using this starter
 Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#gatsby-cli)) to create a new site, specifying the `gatsby-starter-styled-ts`.

```shell
$ npx gatsby new your-project-name git@github.com:diegocoxta/gatsby-starter-styled-ts.git
```

## :gear: Scripts
- It provides several Gatsby CLI aliases, including `build`, `start`, `serve`, and `clean`, which can be executed using `yarn <command>`.
- Use `yarn prettier`, `yarn eslint`, and `yarn stylelint` to format your source code according to the respective configuration files.
- Use `yarn test` to run the test suite with Jest.
- Use `yarn prepare` to set up Husky git hooks.

## :keyboard: Developing

1. [Clone this repo](https://help.github.com/en/articles/cloning-a-repository) with git.
2. Install dependencies by running `yarn install` within the directory that you cloned (probably `gatsby-starter-styled-ts`).
3. Start the development server with `yarn start`.
4. Open development site by going to [`http://localhost:8000`](http://localhost:8000) in your browser.

## :triangular_ruler: Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## :coffee: Get in touch

Say hello on [twitter](https://twitter.com/diegocoxta) or [email](mailto:diego@diegocosta.me)
