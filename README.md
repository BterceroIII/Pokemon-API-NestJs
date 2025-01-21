<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Pokedex Project

## Running in Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Klerith/nest-pokedex.git
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Ensure Nest CLI is installed globally:
   ```bash
   npm i -g @nestjs/cli
   ```

4. Start the database:
   ```bash
   docker-compose up -d
   ```

5. Rebuild the database with the seed. Open the following URL in your browser:
   ```bash
   http://localhost:3000/api/v2/seed
   ```

## Stack Used

- MongoDB
- NestJS

## Project Structure

<pre>
.eslintrc.js
.gitignore
.prettierrc
.vscode/
  ├── launch.json
docker-compose.yaml
mongo/
  ...
nest-cli.json
package.json
public/
  ├── css/
  │   └── styles.css
  └── index.html
README.md
src/
  ├── app.module.ts
  ├── common/
  │   ├── handles/
  │   │   └── handle-exception.ts
  │   └── pipes/
  │       └── parse-mongo-id-pipe.pipe.ts
  ├── main.ts
  ├── pokemon/
  │   ├── dto/
  │   │   ├── create-pokemon.dto.ts
  │   │   ├── response-pokemon.dto.ts
  │   │   └── update-pokemon.dto.ts
  │   ├── entities/
  │   │   └── pokemon.entity.ts
  │   ├── pokemon.controller.ts
  │   ├── pokemon.module.ts
  │   └── pokemon.service.ts
  └── seed/
      ├── interfaces/
      │   └── poke-response.interface.ts
      ├── seed.controller.ts
      ├── seed.module.ts
      └── seed.service.ts
test/
  ├── app.e2e-spec.ts
  └── jest-e2e.json
tsconfig.build.json
tsconfig.json
</pre>

## License

This project is licensed under the MIT License.