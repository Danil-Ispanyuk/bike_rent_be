## Getting Started
### Runtime environment
- Node.js 19.9.0
- PostgreSQL

### Development environment
1. Install the dependencies by running `npm install`
2. Run `npm run prepare`
3. Start the server by running `npm start:dev`

### Running the project
You can run the project by using `npm start`

### Testing the project
You can run the tests by using `npm test`

## Built With
- [NestJS ](https://nestjs.com "NestJS ")- A progressive Node.js framework for building efficient and scalable server-side applications
- [TypeORM](https://typeorm.io "TypeORM") - A powerful, lightweight ORM for TypeScript and JavaScript
- [PostgreSQL](https://www.postgresql.org/ "PostgreSQL") - A powerful, open source object-relational database system

## Test environment

- Linter `npm run lint`
- Tests `npm run test`

## Deployment instructions
### Staging
1. Create a new branch from `dev`
2. Make your changes
3. Create a pull request to merge your branch into `dev`
4. Once the pull request is approved, merge it into `dev`
5. Create a pull request to merge `dev` into `staging`
6. Once the pull request is approved, merge it into `staging`
7. The staging environment will be automatically deployed
