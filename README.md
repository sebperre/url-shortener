# URL Shortner

## Overview

This webapp has a fully functioning backend and frontend. The frontend consists of a tutorial on how to generate a shorter url. The backend consists of all
the functionality such as a database, the redirect and manages requests to it.

## Features

- **Simplistic Frontend Design**: Easy to generate a short url and use it.
- **Database**: Uses a database to store the shorten urls and the relationship to the longer urls.

## Tech Stack
### Frontend
1. React
2. CSS
3. HTML
4. JavaScript
5. Tailwind

### Backend
1. Express
2. Javascript
3. SQLite3

## Requirements

In the Frontend folder, run
```bash
npm install
```

In the backend folder, run
```bash
npm install
```

## Usage

To start up the backend server, go into the backend folder and run

```bash
node index.js
```

and in the frontend folder, run

```bash
npm start
```

## Clearing the Database
To clear the database, go into the backend folder and run

```bash
bash cleardb.sh
```

## Extra Notes

The backend uses port 4000 and the frontend uses port 3000.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
