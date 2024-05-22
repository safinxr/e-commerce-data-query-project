
# E-Commerce Data Query Project

This project is an e-commerce data query API built with Nodejs, Express Mongoose, and TypeScript and for data validation, zod has been used.


- [Live Server Link](https://e-commerce-data-query-project.vercel.app/)
- [post:/api/products/create-product](https://e-commerce-data-query-project.vercel.app/api/products/create-porduct)
- [/api/products](https://e-commerce-data-query-project.vercel.app/api/products)
- [/api/products/:productId](https://e-commerce-data-query-project.vercel.app/api/products/:664dcc6dbc9e0cf5d5993297)

## Installation

### Clone the Repository

Start by cloning the repository to your local machine:
```bash
git clone https://github.com/safinxr/e-commerce-data-query-project.git
cd e-commerce-data-query-project
```


## Install Dependencies


### Install the necessary dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

## Set Up Environment Variables

Create a .env file in the root directory of the project and add the necessary environment variables. Below is an example of what your .env file should look like:

```plaintext
PORT=3000
MONGODB_URI=mongodb://localhost:27017/e-commerce

```

Make sure to replace mongodb://localhost:27017/e-commerce with the correct URI if your MongoDB instance is running elsewhere or has a different database name.
## Compile TypeScript to JavaScript

Since the project is written in TypeScript, you need to compile it to JavaScript. You can do this by running:

```bash
npm run build
# or
yarn build
```
## Run the Application

Once the compilation is done, you can start the application. Use the following command:

```bash
npm run server:ts
# or
yarn server:ts
```

# Common Commands

Here are some additional useful commands for development:

### Start in Development Mode

This command runs the application with ts-node-dev, which automatically restarts the server on file changes.

```bash
npm run server:ts
# or
yarn server:ts
```

### Lint the Code

To check the code for potential errors and style issues, run:

```bash
npm run lint
# or
yarn lint
```
### Prettier code format

Make code alignmentt with Prettier
```bash
npm run prettier
# or
yarn prettier
```

