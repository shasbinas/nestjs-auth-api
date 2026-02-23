# 🔐 NestJS Authentication API

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

A production-ready **Authentication API** built with **NestJS**, featuring secure user registration with image uploads to **AWS S3**, **JWT-based authentication**, and **MongoDB** for persistence.

---

## 🚀 Features

-   **Secure Authentication**: JWT-based login and registration.
-   **File Upload**: Integration with **AWS S3** for profile picture (avatar) uploads.
-   **Database Persistence**: **MongoDB** integration using **Mongoose ODM**.
- **Security**:
    -   **Helmet**: Security-oriented HTTP headers.
    -   Password hashing using **bcrypt**.
    -   Protected routes via **JWT Guards**.
    -   **Rate limiting** (Throttling) to prevent brute-force attacks.
    -   Environment variable management.
-   **Scalable Architecture**: Clean and modular NestJS structure.

---

## 🛠 Tech Stack

-   **Backend**: NestJS (v11.x)
-   **Database**: MongoDB Atlas
-   **File Storage**: Amazon S3
-   **Auth**: Passport.js & JWT
-   **Validation**: Class-validator & Class-transformer
-   **Infrastructure**: AWS SDK v3

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   A **MongoDB** connection string (Atlas or Local)
-   **AWS Credentials** (IAM user with S3 access)

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```env
# MongoDB Configuration
MONGO_URI=your_mongodb_connection_uri
DB_NAME=your_database_name

# AWS S3 Configuration
AWS_REGION=your_aws_region
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_BUCKET_NAME=your_bucket_name

# JWT Configuration
JWT_SECRET=your_secure_random_secret
JWT_EXPIRES_IN=1d

# Security
ALLOWED_ORIGINS=http://localhost:3000,http://example.com
```

---

## 📥 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shasbinas/nestjs-auth-api.git
    cd nestjs-auth-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

---

## 🏃 Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The server will be running on `http://localhost:3000`.

---

## 🛣 API Endpoints

### Auth Module
-   `POST /auth/register`: Register a new user. Supports `multipart/form-data` for avatar upload.
-   `POST /auth/login`: Authenticate a user and receive a JWT token.

### User Module
-   `GET /users/profile`: Retrieve the currently logged-in user's details. **(Requires JWT Token)**

---

## 🏗 Project Structure

```bash
src/
├── auth/            # Authentication logic & S3 service
├── users/           # User management & Mongoose schemas
├── app.module.ts    # Main application module
└── main.ts         # Application entry point
```

---

## 🛡 Security

-   **Rate Limiting**: Configured to allow 10 requests per 60 seconds per IP.
-   **Validations**: All incoming data is validated using `ValidationPipe`.
-   **CORS**: Enabled for cross-origin requests.

---

## 📄 License

This project is [MIT licensed](LICENSE).

Developed with ❤️ by [Shasbin AS](https://github.com/shasbinas)
