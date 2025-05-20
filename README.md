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
