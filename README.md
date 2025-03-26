# Linkr

Built with Node.js, Express, PostgreSQL, and React.

## Setup

### Requirements:

- PostgreSQL
- Node.js
- npm

### How to run locally:

1. Clone this repository.
2. In the backend, install dependencies:
   ```sh
   npm install
   ```
3. Set up the database:

- Import the dump.sql file into PostgreSQL:
  ```sh
  psql -U your-username -d your-database-name -f dump.sql
  ```

4. Configure the environment variables in the `.env` file.

- `DATABASE_URL`: Your postgreSQL database URL;
- `SECRET_KEY`: A secret key for JWT for encryption;
- `PORT`: The port number for the backend server.

5. Start the server:
   ```sh
   npm start
   ```
6. In the frontend, install dependencies:
   ```sh
   npm install
   ```
7. Set `REACT_APP_API_URL` in the `.env` file.
8. Start the frontend:
   ```sh
   npm start
   ```
