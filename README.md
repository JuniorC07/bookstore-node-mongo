# Books and Authors CRUD API

This is a simple API developed with Node.js and MongoDB for performing CRUD operations on books and authors. The embedded concept is utilized, where an author is a property of the book.

## Requirements

Make sure you have Node.js and MongoDB installed in your environment.

## Setup

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the server: `npm run dev`

## Database Configuration

Set the MongoDB connection string in the `DB_STRING_CONNECTION` environment variable and the database name in `DB_DATABASE`.

Example in the `.env` file:

```env
DB_STRING_CONNECTION=mongodb://<user>:<pass>@<server>:<port>?authMechanism=DEFAULT
DB_DATABASE=<database>

```

## API Documentation

The API documentation can be accessed at [http://localhost:3000/docs](http://localhost:3000/docs) after starting the project. This documentation is generated using Swagger, providing details about available endpoints, input parameters, and responses.

## Endpoints

### Books

- **POST /books**: Adds a new book. Requires a JSON body with properties `title`, `publishingCompany`, `price`, `pages`, and `authorId`.

- **GET /books**: Returns all books.

- **GET /books/{id}**: Returns a specific book based on ID.

- **GET /books/author/{idAuthor}**: Returns all books by an author.

- **PUT /books/{id}**: Updates information for a specific book. Requires a JSON body with properties to be updated.

- **DELETE /books/{id}**: Deletes a specific book based on ID.

### Authors

- **POST /authors**: Adds a new author. Requires a JSON body with properties `name`.

- **GET /authors**: Returns all authors.

- **GET /authors/{id}**: Returns a specific author based on ID.

- **PUT /authors/{id}**: Updates information for a specific author. Requires a JSON body with properties to be updated.

- **DELETE /authors/{id}**: Deletes a specific author based on ID.

## Running the API

After setup, run `npm run dev` to start the server. The API will be available at [http://localhost:3000](http://localhost:3000). Access the documentation at [http://localhost:3000/docs](http://localhost:3000/docs) for more details on endpoints and how to use them.