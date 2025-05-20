# Backend-Secure-File-Upload-service

This is a simple Node.js backend service built with Express.js that allows authenticated users to upload files, stores metadata in PostgreSQL, and processes files asynchronously using a local queue.

## Features

- JWT Authentication
- File upload with Multer
- PostgreSQL database (via Sequelize)
- Async background job processing
- API to check file status

## Technologies Used

- Node.js (v18+)
- Express.js
- Sequelize + PostgreSQL
- jsonwebtoken
- multer
- Local queue (setInterval-based)

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/shubhabundela071/Secure_File_Upload_Backend_Service.git
   cd Secure_File_Upload_Backend_Service


2. Install dependencies:
   ```bash
   npm install

3. Install dependencies:
   ```bash
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate

3. Start the server:
   ```bash
    npm start

## API endpoints

1. POST API:
### Endpoint: `/`

### Request
- **Method:** `POST`
- **Content-Type:** `multipart/form-data`
- **Body Parameters:**
  - `file` (File) — The file to be uploaded (field name: `file`)
  - `title` (String) — Title of the file
  - `description` (String) — Description of the file
  - **Headers:**  `Requires authentication (assumes `req.userId` is available via middleware)`
- **Purpose:** `Upload a file with title and description`

### Response

{
  "id": "file-uuid",
  "status": "uploaded"
}

2. GET API:
### Endpoint: `/:id`

### Request
- **Method:** `GET`
- **URL Parameter:**  `:id — ID of the file (UUID)`
-**Purpose:**  `Retrieve details about a previously uploaded file by its ID.`


### Headers
- Requires authentication (assumes req.userId is available via middleware)

### Response

{
  "id": "file-uuid",
  "filename": "generated-filename",
  "originalName": "original-filename.ext",
  "title": "User-provided title",
  "description": "User-provided description",
  "userId": "user-id",
  "status": "processed",
  "extractedData": "{\"size\": 123456}"
}
