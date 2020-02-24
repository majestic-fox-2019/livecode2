# movies-app-server

List of available endpoints:

- `GET /movies`
- `GET /movies/:id`
- `PUT /movies/:id`

- `POST /rate/:movieId`
- `DELETE /rate/:id`

Error response format:
Status: 4xx or 5xx

```json
{
  "errors": ["...", "..."],
  "message": "..."
}
```

GET /movies

- Response:
  - status: 200
  - body:

```json
[
  {
    "id": 2,
    "title": "Batman v Superman: Dawn of Justice",
    "year": 2016,
    "type": "movie",
    "poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbID": "tt2975590",
    "createdAt": "2020-02-21T17:03:45.819Z",
    "updatedAt": "2020-02-21T17:03:45.819Z",
  },
  {
    ...
  }
]
```

GET /movies/:id

- Response:
  - status: 200
- body:

```json
{
  "id": 2,
  "title": "Batman v Superman: Dawn of Justice",
  "year": 2016,
  "type": "movie",
  "poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "imdbID": "tt2975590",
  "createdAt": "2020-02-21T17:03:45.819Z",
  "updatedAt": "2020-02-21T17:03:45.819Z",
  "Rates": [
    {
      "id": 4,
      "point": 100,
      "reviewer": "hardim"
    }
  ]
}
```

PUT /movies/:id

- Request Body:
  - title: string [required],
  - year: number [required],
  - type: string [required],
  * type can only be either series or movie
  - poster: string [required]
- Response:
  - status: 200
  - body:

```json
{
  "id": "...",
  "title": "...",
  "year": "...",
  "type": "...",
  "poster": "...",
  "imdbID": "...",
  "createdAt": "...",
  "updatedAt": "..."
}
```

POST /rates/:movieId

- Request Param(s):
  - id: integer
- Request Body:
  - reviewer: string [required],
  - point: number [required]
  * point can only between 0 - 100
- Response:
  - status: 201
  - body:

```json
{
  "id": "...",
  "reviewer": "...",
  "point": "...",
  "MovieId": "...",
  "createdAt": "...",
  "updatedAt": "..."
}
```

DELETE /rates/:id

- Request Param(s):
  - id: integer
- Response:
  - status: 200
  - body:
  ```json
  {
    "message": "Delete rate success"
  }
  ```
