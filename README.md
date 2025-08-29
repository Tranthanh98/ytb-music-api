# ytb-music-api

A simple API to search and access audio tracks from YouTube.

## Features

- **Search YouTube Audio:** Search for audio tracks by keywords.
- **Simple API:** Easily integrate into your applications.
- **Fast & Lightweight:** Minimal dependencies and quick responses.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository:

```bash
git clone https://github.com/Tranthanh98/ytb-music-api.git
cd ytb-music-api
```

Install dependencies:

```bash
npm install
# or
yarn install
```

### Usage

Start the API server:

```bash
npm start
# or
yarn start
```

The API will run on `http://localhost:3000` by default.

#### Example: Search for Audio

```
GET /search?query=your+search+term
```

**Parameters:**
- `query` (string): The search keyword(s) for YouTube audio.

**Response:**

```json
[
  {
    "title": "Song Title",
    "videoId": "xxxxxxxxxxx",
    "duration": "3:45",
    "thumbnail": "https://...",
    "url": "https://www.youtube.com/watch?v=xxxxxxxxxxx"
  },
  ...
]
```

## API Endpoints

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/search`          | Search audio tracks |
| GET    | `/play/{songId}`   | Get  url         |

## Project Structure

```
ytb-music-api/
├── src/
│   ├── index.js
│   └── ...other files
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

- [Tranthanh98](https://github.com/Tranthanh98)
